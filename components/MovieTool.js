// components/MovieTool.js
import { useState, useCallback, useEffect } from "react";
import { addToWatchlist, removeFromWatchlist, isInWatchlist } from "./Layout";

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

export default function MovieTool({ genreId, genreName }) {
  const [movie, setMovie] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);
  const [imdbId, setImdbId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (movie) setSaved(isInWatchlist(movie.id));
  }, [movie]);

  const fetchMovie = useCallback(async () => {
    setLoading(true);
    setError(null);
    setMovie(null);
    setSimilar([]);
    setTrailerKey(null);
    setImdbId(null);

    try {
      const res = await fetch(`/api/movie?type=random&genreId=${genreId}`);
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
  }, [genreId]);

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

  return (
    <div className="tool-wrap">
      <div className="tool-actions">
        <button className="btn btn-primary" onClick={fetchMovie} disabled={loading}>
          🎲 {movie ? "Generate Again" : `Generate Random ${genreName} Movie`}
        </button>
        {movie && (
          <button className="btn btn-secondary" onClick={fetchMovie} disabled={loading}>
            🔁 Generate Again
          </button>
        )}
      </div>

      {loading && <Spinner label={`Finding a great ${genreName.toLowerCase()} movie...`} />}
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
              <h2>Similar {genreName} Movies You Might Like</h2>
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
