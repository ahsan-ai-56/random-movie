// pages/api/movie.js
// Server-side TMDB proxy — keeps TMDB_API_KEY hidden from the frontend.
// Supported: ?type=random&genreId=28&yearFrom=1990&yearTo=2024&language=en&rating=7&runtime=normal&mood=feelgood
//            ?type=similar&movieId=123
//            ?type=trailer&movieId=123
//            ?type=imdb&movieId=123

const TMDB_BASE = "https://api.themoviedb.org/3";

async function tmdbFetch(path, params = {}) {
  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) {
    throw new Error(
      "TMDB_API_KEY is not configured on the server. Add it to your .env.local file."
    );
  }
  const url = new URL(`${TMDB_BASE}${path}`);
  url.searchParams.set("api_key", apiKey);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== "") url.searchParams.set(k, v);
  });

  const res = await fetch(url.toString());
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const err = new Error(body.status_message || `TMDB request failed (${res.status})`);
    err.status = res.status;
    throw err;
  }
  return res.json();
}

function mapMovie(m, genreMap) {
  if (!m) return null;
  return {
    id: m.id,
    title: m.title,
    overview: m.overview,
    posterPath: m.poster_path ? `https://image.tmdb.org/t/p/w500${m.poster_path}` : null,
    backdropPath: m.backdrop_path ? `https://image.tmdb.org/t/p/w1280${m.backdrop_path}` : null,
    releaseDate: m.release_date || "",
    year: m.release_date ? m.release_date.slice(0, 4) : "—",
    voteAverage: typeof m.vote_average === "number" ? Math.round(m.vote_average * 10) / 10 : 0,
    voteCount: m.vote_count || 0,
    runtime: m.runtime || null,
    language: m.original_language || null,
    genreIds: m.genre_ids || (m.genres ? m.genres.map((g) => g.id) : []),
    genreNames: m.genres
      ? m.genres.map((g) => g.name)
      : (m.genre_ids || []).map((id) => genreMap[id]).filter(Boolean),
  };
}

const GENRE_MAP = {
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime",
  99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History",
  27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance",
  878: "Sci-Fi", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western",
};

// Maps a friendly "language" value used by the frontend to TMDB's
// original_language ISO 639-1 code.
const LANGUAGE_MAP = {
  english: "en",
  hindi: "hi",
  spanish: "es",
  french: "fr",
  korean: "ko",
  japanese: "ja",
};

// Maps a friendly runtime bucket to TMDB's with_runtime.gte / .lte params.
function runtimeParams(runtime) {
  switch (runtime) {
    case "short":
      return { "with_runtime.lte": 90 };
    case "normal":
      return { "with_runtime.gte": 90, "with_runtime.lte": 120 };
    case "long":
      return { "with_runtime.gte": 120 };
    default:
      return {};
  }
}

// Maps a friendly "mood" filter to extra TMDB discover params — mostly
// additional genre tags or keyword-style nudges layered on top of the
// primary genre selection.
const MOOD_GENRE_MAP = {
  feelgood: "35,10751", // Comedy, Family
  dark: "53,80,27", // Thriller, Crime, Horror
  funny: "35", // Comedy
  romantic: "10749", // Romance
  mindbending: "878,9648", // Sci-Fi, Mystery
  familyfriendly: "10751,16", // Family, Animation
};

function buildDiscoverParams({ genreId, yearFrom, yearTo, language, rating, runtime, mood, page }) {
  const params = {
    sort_by: "popularity.desc",
    include_adult: "false",
    "vote_count.gte": 50,
    page,
  };

  // Genre: explicit genreId wins; otherwise fall back to a mood's genre set.
  if (genreId) {
    params.with_genres = String(genreId);
  } else if (mood && MOOD_GENRE_MAP[mood]) {
    params.with_genres = MOOD_GENRE_MAP[mood];
  }

  if (yearFrom) params["primary_release_date.gte"] = `${yearFrom}-01-01`;
  if (yearTo) params["primary_release_date.lte"] = `${yearTo}-12-31`;

  if (language && LANGUAGE_MAP[language]) {
    params.with_original_language = LANGUAGE_MAP[language];
  }

  if (rating) {
    const r = parseFloat(rating);
    if (!Number.isNaN(r)) params["vote_average.gte"] = r;
  }

  Object.assign(params, runtimeParams(runtime));

  return params;
}

export default async function handler(req, res) {
  const { type } = req.query;

  try {
    if (type === "random") {
      const { genreId, yearFrom, yearTo, language, rating, runtime, mood } = req.query;

      const baseFilters = { genreId, yearFrom, yearTo, language, rating, runtime, mood };
      const page1 = await tmdbFetch("/discover/movie", buildDiscoverParams({ ...baseFilters, page: 1 }));
      const totalPages = Math.min(page1.total_pages || 1, 100);
      const randomPage = Math.max(1, Math.floor(Math.random() * totalPages) + 1);

      const discover =
        randomPage === 1
          ? page1
          : await tmdbFetch("/discover/movie", buildDiscoverParams({ ...baseFilters, page: randomPage }));

      const results = discover.results || [];
      if (!results.length) {
        return res.status(404).json({
          error: "No movies matched those filters. Try widening your year range, rating, or runtime.",
        });
      }
      const pick = results[Math.floor(Math.random() * results.length)];

      // Fetch full details for runtime + genre names
      const details = await tmdbFetch(`/movie/${pick.id}`);
      return res.status(200).json({ movie: mapMovie(details, GENRE_MAP) });
    }

    if (type === "similar") {
      const { movieId } = req.query;
      if (!movieId) return res.status(400).json({ error: "movieId is required" });
      const data = await tmdbFetch(`/movie/${movieId}/similar`, { page: 1 });
      const movies = (data.results || []).slice(0, 4).map((m) => mapMovie(m, GENRE_MAP));
      return res.status(200).json({ movies });
    }

    if (type === "trailer") {
      const { movieId } = req.query;
      if (!movieId) return res.status(400).json({ error: "movieId is required" });
      const data = await tmdbFetch(`/movie/${movieId}/videos`);
      const vids = data.results || [];
      const trailer =
        vids.find((v) => v.site === "YouTube" && v.type === "Trailer" && v.official) ||
        vids.find((v) => v.site === "YouTube" && v.type === "Trailer") ||
        vids.find((v) => v.site === "YouTube");
      return res.status(200).json({ key: trailer ? trailer.key : null });
    }

    if (type === "imdb") {
      const { movieId } = req.query;
      if (!movieId) return res.status(400).json({ error: "movieId is required" });
      const data = await tmdbFetch(`/movie/${movieId}/external_ids`);
      return res.status(200).json({ imdbId: data.imdb_id || null });
    }

    return res.status(400).json({ error: "Unknown or missing type parameter." });
  } catch (err) {
    console.error("TMDB API error:", err.message);
    const status = err.status && err.status >= 400 && err.status < 600 ? err.status : 500;
    return res.status(status).json({
      error:
        status === 500
          ? "Something went wrong while fetching movie data. Please try again in a moment."
          : err.message,
    });
  }
}

