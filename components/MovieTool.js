// components/MovieTool.js
import { useState, useCallback, useEffect } from "react";
import { addToWatchlist, removeFromWatchlist, isInWatchlist, GENRES } from "./Layout";

// ── Filter option definitions (shared across every tool page) ──
const YEAR_PRESETS = [
  { id: "any", label: "Any Era", from: null, to: null },
  { id: "classic", label: "Classic (before 1990)", from: 1950, to: 1989 },
  { id: "90s", label: "90s", from: 1990, to: 1999 },
  { id: "2000s", label: "2000s", from: 2000, to: 2009 },
  { id: "2010s", label: "2010s", from: 2010, to: 2019 },
  { id: "new", label: "New (2020+)", from: 2020, to: 2024 },
];

const LANGUAGES = [
  { id: "any", label: "Any Language" },
  { id: "english", label: "English" },
  { id: "hindi", label: "Hindi" },
  { id: "spanish", label: "Spanish" },
  { id: "french", label: "French" },
  { id: "korean", label: "Korean" },
  { id: "japanese", label: "Japanese" },
];

const RATINGS = [
  { id: "any", label: "Any Rating", value: null },
  { id: "6", label: "6+ Good", value: 6 },
  { id: "7", label: "7+ Very Good", value: 7 },
  { id: "8", label: "8+ Excellent", value: 8 },
];

const RUNTIMES = [
  { id: "any", label: "Any Length" },
  { id: "short", label: "Short (under 90 min)" },
  { id: "normal", label: "Normal (90–120 min)" },
  { id: "long", label: "Long (120+ min)" },
];

const MOODS = [
  { id: "any", label: "Any Mood", icon: "🎬" },
  { id: "feelgood", label: "Feel Good", icon: "😊" },
  { id: "dark", label: "Dark & Intense", icon: "🌑" },
  { id: "funny", label: "Funny", icon: "😂" },
  { id: "romantic", label: "Romantic", icon: "❤️" },
  { id: "mindbending", label: "Mind-Bending", icon: "🌀" },
  { id: "familyfriendly", label: "Family Friendly", icon: "👨‍👩‍👧" },
];

const LANGUAGE_LABELS = {
  en: "English",
  hi: "Hindi",
  es: "Spanish",
  fr: "French",
  ko: "Korean",
  ja: "Japanese",
};

function StarRating({ value }) {
  // value 0-10 -> 0-5 stars
  const stars = Math.round((value / 10) * 5 * 2) / 2; // allow half stars
  return (
    <span className="star-rating" aria-label={`Rated ${value} out of 10`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = stars >= i;
        const half = !filled && stars >= i - 0.5;
        return (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className={filled || half ? "star-fill" : "star-empty"}
            fill="currentColor"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
          </svg>
        );
      })}
      <span className="rating-num">{value}/10</span>
    </span>
  );
}

function Spinner({ label }) {
  return (
    <div className="spinner-wrap">
      <div className="film-spinner" />
      <p>{label || "Finding your movie..."}</p>
    </div>
  );
}

function ErrorMessage({ message }) {
  return (
    <div className="error-card">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
      <span>{message}</span>
    </div>
  );
}

function SimilarCard({ movie }) {
  return (
    <div className="similar-card">
      <div className="similar-poster">
        {movie.posterPath ? (
          <img src={movie.posterPath} alt={`${movie.title} poster`} loading="lazy" />
        ) : (
          <div className="movie-poster-fallback">No image</div>
        )}
      </div>
      <div className="similar-card-body">
        <h4>{movie.title}</h4>
        <span>{movie.year}</span>
      </div>
    </div>
  );
}

// A single labeled group of selectable pills, used for every filter row.
function FilterGroup({ label, icon, options, activeId, onSelect, renderLabel }) {
  return (
    <div className="filter-group">
      <span className="filter-group-label">
        {icon} {label}
      </span>
      <div className="filter-pill-row">
        {options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            className={`filter-pill ${activeId === opt.id ? "active" : ""}`}
            onClick={() => onSelect(opt.id)}
          >
            {renderLabel ? renderLabel(opt) : opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function MovieTool({ genreId, genreName }) {
  const isAllGenresMode = !genreId;

  const [selectedGenre, setSelectedGenre] = useState(null); // null = "Surprise Me / Any Genre"
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [yearPreset, setYearPreset] = useState("any");
  const [language, setLanguage] = useState("any");
  const [rating, setRating] = useState("any");
  const [runtime, setRuntime] = useState("any");
  const [mood, setMood] = useState("any");

  const [movie, setMovie] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);
  const [imdbId, setImdbId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [saved, setSaved] = useState(false);
  const [lastGenreName, setLastGenreName] = useState(genreName || "movie");

  useEffect(() => {
    if (movie) setSaved(isInWatchlist(movie.id));
  }, [movie]);

  const activeFilterCount = [yearPreset, language, rating, runtime, mood].filter((v) => v !== "any").length;

  const fetchMovie = useCallback(async () => {
    setLoading(true);
    setError(null);
    setMovie(null);
    setSimilar([]);
    setTrailerKey(null);
    setImdbId(null);

    // Work out which genre to actually request this click.
    let activeGenreId = genreId;
    let activeGenreName = genreName;
    if (isAllGenresMode) {
      if (selectedGenre) {
        activeGenreId = selectedGenre.id;
        activeGenreName = selectedGenre.name;
      } else if (mood !== "any") {
        // No explicit genre chosen — let the mood imply a genre set server-side.
        activeGenreId = null;
        activeGenreName = MOODS.find((m) => m.id === mood)?.label || "movie";
      } else {
        const randomPick = GENRES[Math.floor(Math.random() * GENRES.length)];
        activeGenreId = randomPick.id;
        activeGenreName = randomPick.name;
      }
    }
    setLastGenreName(activeGenreName);

    const yearObj = YEAR_PRESETS.find((y) => y.id === yearPreset) || YEAR_PRESETS[0];
    const ratingObj = RATINGS.find((r) => r.id === rating) || RATINGS[0];

    const params = new URLSearchParams();
    params.set("type", "random");
    if (activeGenreId) params.set("genreId", activeGenreId);
    if (yearObj.from) params.set("yearFrom", yearObj.from);
    if (yearObj.to) params.set("yearTo", yearObj.to);
    if (language !== "any") params.set("language", language);
    if (ratingObj.value) params.set("rating", ratingObj.value);
    if (runtime !== "any") params.set("runtime", runtime);
    if (mood !== "any") params.set("mood", mood);

    try {
      const res = await fetch(`/api/movie?${params.toString()}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not fetch a movie. Please try again.");
      setMovie(data.movie);

      // Fire off secondary requests in parallel — don't block the main card on these.
      fetch(`/api/movie?type=similar&movieId=${data.movie.id}`)
        .then((r) => r.json())
        .then((d) => setSimilar(d.movies || []))
        .catch(() => setSimilar([]));

      fetch(`/api/movie?type=trailer&movieId=${data.movie.id}`)
        .then((r) => r.json())
        .then((d) => setTrailerKey(d.key || null))
        .catch(() => setTrailerKey(null));

      fetch(`/api/movie?type=imdb&movieId=${data.movie.id}`)
        .then((r) => r.json())
        .then((d) => setImdbId(d.imdbId || null))
        .catch(() => setImdbId(null));
    } catch (e) {
      setError(
        e.message ||
          "Something went wrong while finding a movie for you. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  }, [genreId, genreName, isAllGenresMode, selectedGenre, yearPreset, language, rating, runtime, mood]);

  const toggleWatchlist = () => {
    if (!movie) return;
    if (saved) {
      removeFromWatchlist(movie.id);
      setSaved(false);
    } else {
      addToWatchlist({
        id: movie.id,
        title: movie.title,
        posterPath: movie.posterPath,
        year: movie.year,
        voteAverage: movie.voteAverage,
        genreNames: movie.genreNames,
      });
      setSaved(true);
    }
  };

  const trailerHref = trailerKey
    ? `https://www.youtube.com/watch?v=${trailerKey}`
    : movie
    ? `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + " trailer")}`
    : "#";

  const imdbHref = imdbId
    ? `https://www.imdb.com/title/${imdbId}/`
    : movie
    ? `https://www.imdb.com/find/?q=${encodeURIComponent(movie.title)}`
    : "#";

  const generateLabel = isAllGenresMode
    ? selectedGenre
      ? `Generate Random ${selectedGenre.name} Movie`
      : "Generate a Random Movie"
    : `Generate Random ${genreName} Movie`;

  return (
    <div className="tool-wrap">
      {isAllGenresMode && (
        <div className="genre-selector" role="group" aria-label="Choose a genre filter">
          <button
            className={`genre-pill-select ${!selectedGenre ? "active" : ""}`}
            onClick={() => setSelectedGenre(null)}
          >
            🎲 Surprise Me
          </button>
          {GENRES.map((g) => (
            <button
              key={g.id}
              className={`genre-pill-select ${selectedGenre?.id === g.id ? "active" : ""}`}
              style={selectedGenre?.id === g.id ? { borderColor: g.color, color: g.color } : undefined}
              onClick={() => setSelectedGenre(g)}
            >
              {g.icon} {g.name}
            </button>
          ))}
        </div>
      )}

      {/* ── ADVANCED FILTERS PANEL ── */}
      <div className="filters-card">
        <button
          type="button"
          className="filters-toggle"
          onClick={() => setFiltersOpen((v) => !v)}
          aria-expanded={filtersOpen}
        >
          <span>
            🎛️ Advanced Filters
            {activeFilterCount > 0 && <span className="filters-count-badge">{activeFilterCount}</span>}
          </span>
          <span className={`filters-toggle-icon ${filtersOpen ? "open" : ""}`}>▾</span>
        </button>

        <div className={`filters-body ${filtersOpen ? "open" : ""}`}>
          <FilterGroup
            label="Release Year"
            icon="📅"
            options={YEAR_PRESETS}
            activeId={yearPreset}
            onSelect={setYearPreset}
          />
          <FilterGroup label="Language" icon="🌐" options={LANGUAGES} activeId={language} onSelect={setLanguage} />
          <FilterGroup label="Rating" icon="⭐" options={RATINGS} activeId={rating} onSelect={setRating} />
          <FilterGroup label="Runtime" icon="⏱️" options={RUNTIMES} activeId={runtime} onSelect={setRuntime} />
          <FilterGroup
            label="Mood"
            icon="🎭"
            options={MOODS}
            activeId={mood}
            onSelect={setMood}
            renderLabel={(opt) => `${opt.icon} ${opt.label}`}
          />
        </div>
      </div>

      <div className="tool-actions">
        <button className="btn btn-primary" onClick={fetchMovie} disabled={loading}>
          🎲 {movie ? "Generate Again" : generateLabel}
        </button>
        {movie && (
          <button className="btn btn-secondary" onClick={fetchMovie} disabled={loading}>
            🔁 Generate Again
          </button>
        )}
      </div>

      {loading && <Spinner label={`Finding a great ${lastGenreName.toLowerCase()} movie...`} />}
      {error && !loading && <ErrorMessage message={error} />}

      {movie && !loading && !error && (
        <>
          <div className="movie-card">
            <div className="movie-poster-wrap">
              {movie.posterPath ? (
                <img src={movie.posterPath} alt={`${movie.title} movie poster`} />
              ) : (
                <div className="movie-poster-fallback">No poster available</div>
              )}
            </div>
            <div className="movie-info">
              <h2 className="movie-title">
                {movie.title} <span style={{ color: "var(--text-faint)", fontSize: "0.65em" }}>({movie.year})</span>
              </h2>
              <div className="movie-meta-row">
                <StarRating value={movie.voteAverage} />
                <span className="dot">•</span>
                <span>{movie.year}</span>
                {movie.runtime && (
                  <>
                    <span className="dot">•</span>
                    <span>{movie.runtime} min</span>
                  </>
                )}
                {movie.language && LANGUAGE_LABELS[movie.language] && (
                  <>
                    <span className="dot">•</span>
                    <span>{LANGUAGE_LABELS[movie.language]}</span>
                  </>
                )}
              </div>
              <div className="genre-pills">
                {(movie.genreNames || []).map((g) => (
                  <span key={g} className="genre-pill">
                    {g}
                  </span>
                ))}
              </div>
              <p className="movie-overview">
                {movie.overview || "No description available for this title yet."}
              </p>
              <div className="movie-actions">
                <a className="btn btn-gold btn-sm" href={imdbHref} target="_blank" rel="noopener noreferrer">
                  ⭐ View on IMDb
                </a>
                <a className="btn btn-secondary btn-sm" href={trailerHref} target="_blank" rel="noopener noreferrer">
                  ▶️ Watch Trailer
                </a>
                <button className="btn btn-outline btn-sm" onClick={toggleWatchlist}>
                  {saved ? "✓ In Watchlist" : "+ Add to Watchlist"}
                </button>
              </div>
            </div>
          </div>

          {similar.length > 0 && (
            <div className="similar-section">
              <h2>Similar Movies You Might Like</h2>
              <div className="similar-grid">
                {similar.map((m) => (
                  <SimilarCard key={m.id} movie={m} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
