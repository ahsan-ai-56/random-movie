// components/Layout.js
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const GENRES = [
  { id: 28, name: "Action", slug: "random-action-movie-generator", color: "#e50914", icon: "💥" },
  { id: 35, name: "Comedy", slug: "random-comedy-movie-generator", color: "#f5c518", icon: "😂" },
  { id: 27, name: "Horror", slug: "random-horror-movie-generator", color: "#8b0000", icon: "🎃" },
  { id: 10749, name: "Romance", slug: "random-romance-movie-generator", color: "#ff5d8f", icon: "❤️" },
  { id: 878, name: "Sci-Fi", slug: "random-sci-fi-movie-generator", color: "#00c2ff", icon: "🚀" },
  { id: 53, name: "Thriller", slug: "random-thriller-movie-generator", color: "#7a4dff", icon: "🔪" },
  { id: 16, name: "Animated", slug: "random-animated-movie-generator", color: "#ffa726", icon: "🎨" },
  { id: 99, name: "Documentary", slug: "random-documentary-generator", color: "#4caf50", icon: "🎥" },
];

const NAV_PRIMARY = [
  { href: "/", label: "Home" },
  { href: "/random-movie-generator", label: "Random Movie Generator" },
  { href: "/watchlist", label: "Watchlist" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function getWatchlist() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(window.localStorage.getItem("rmg_watchlist") || "[]");
  } catch {
    return [];
  }
}

export function saveWatchlist(list) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("rmg_watchlist", JSON.stringify(list));
  window.dispatchEvent(new Event("rmg_watchlist_updated"));
}

export function isInWatchlist(movieId) {
  return getWatchlist().some((m) => m.id === movieId);
}

export function addToWatchlist(movie) {
  const list = getWatchlist();
  if (!list.some((m) => m.id === movie.id)) {
    saveWatchlist([...list, movie]);
  }
}

export function removeFromWatchlist(movieId) {
  saveWatchlist(getWatchlist().filter((m) => m.id !== movieId));
}

export default function Layout({ children, breadcrumb }) {
  const router = useRouter();
  const [theme, setTheme] = useState("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [watchlistCount, setWatchlistCount] = useState(0);

  useEffect(() => {
    const saved = window.localStorage.getItem("rmg_theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
    const updateCount = () => setWatchlistCount(getWatchlist().length);
    updateCount();
    window.addEventListener("rmg_watchlist_updated", updateCount);
    window.addEventListener("storage", updateCount);
    return () => {
      window.removeEventListener("rmg_watchlist_updated", updateCount);
      window.removeEventListener("storage", updateCount);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("rmg_theme", next);
  }, [theme]);

  useEffect(() => {
    setMobileOpen(false);
  }, [router.pathname]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="nav-logo">
            <span className="logo-mark">🎬</span>
            Random<span className="accent">Movie</span>
          </Link>

          <div className="nav-links">
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>
              Home
            </Link>
            <Link
              href="/random-movie-generator"
              className={router.pathname === "/random-movie-generator" ? "active" : ""}
            >
              Random Movie Generator
            </Link>
            <div className="nav-dropdown">
              <button className="nav-dropdown-trigger">
                Genres
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className="nav-dropdown-menu">
                {GENRES.map((g) => (
                  <Link key={g.id} href={`/${g.slug}`}>
                    <span className="genre-dot" style={{ background: g.color }} />
                    {g.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/blog" className={router.pathname.startsWith("/blog") ? "active" : ""}>
              Blog
            </Link>
            <Link href="/about" className={router.pathname === "/about" ? "active" : ""}>
              About
            </Link>
            <Link href="/contact" className={router.pathname === "/contact" ? "active" : ""}>
              Contact
            </Link>
          </div>

          <div className="nav-actions">
            <button className="nav-icon-btn theme-toggle" onClick={toggleTheme} aria-label="Toggle dark / light mode">
              <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
              <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            </button>
            <Link href="/watchlist" className="nav-icon-btn" aria-label="View watchlist">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
              </svg>
              {watchlistCount > 0 && <span className="watchlist-badge">{watchlistCount}</span>}
            </Link>
            <button
              className={`nav-hamburger ${mobileOpen ? "open" : ""}`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-menu-inner">
          {NAV_PRIMARY.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <span className="mm-section-label">Genres</span>
          {GENRES.map((g) => (
            <Link key={g.id} href={`/${g.slug}`}>
              {g.icon} {g.name}
            </Link>
          ))}
          <span className="mm-section-label">Legal</span>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>

      {breadcrumb && breadcrumb.length > 0 && (
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            {breadcrumb.map((item, i) => (
              <li key={item.href || item.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {i > 0 && <span className="sep">/</span>}
                {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
      )}

      <main>{children}</main>

      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <Link href="/" className="nav-logo">
                <span className="logo-mark">🎬</span>
                Random<span className="accent">Movie</span>
              </Link>
              <p>
                Free random movie generator powered by real TMDB data. Pick a genre, hit generate,
                and discover your next favorite film in seconds — no sign-up required.
              </p>
            </div>
            <div className="footer-col">
              <h5>Genres</h5>
              {GENRES.slice(0, 4).map((g) => (
                <Link key={g.id} href={`/${g.slug}`}>
                  {g.name}
                </Link>
              ))}
            </div>
            <div className="footer-col">
              <h5>More Genres</h5>
              {GENRES.slice(4).map((g) => (
                <Link key={g.id} href={`/${g.slug}`}>
                  {g.name}
                </Link>
              ))}
              <Link href="/random-movie-generator">Random Movie Generator</Link>
              <Link href="/watchlist">Watchlist</Link>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <Link href="/blog">Blog</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/disclaimer">Disclaimer</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; {new Date().getFullYear()} Random Movie Generator. All rights reserved.</span>
            <div className="footer-legal-links">
              <Link href="/disclaimer">Disclaimer</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span>Movie data provided by TMDB. Not affiliated with TMDB, IMDb, or any streaming service.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
