// pages/watchlist.js
import { useEffect, useState } from "react";
import Link from "next/link";
import Layout, { GENRES, getWatchlist, removeFromWatchlist } from "../components/Layout";
import Seo, { breadcrumbSchema, webPageSchema } from "../components/Seo";

export default function Watchlist() {
  const [list, setList] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setList(getWatchlist());
    setMounted(true);
    const handler = () => setList(getWatchlist());
    window.addEventListener("rmg_watchlist_updated", handler);
    return () => window.removeEventListener("rmg_watchlist_updated", handler);
  }, []);

  const handleRemove = (id) => {
    removeFromWatchlist(id);
    setList(getWatchlist());
  };

  const title = "My Watchlist — Random Movie Generator";
  const description =
    "View and manage the movies you've saved from Random Movie Generator. Your watchlist is stored locally in your browser — free, private, and always up to date.";
  const path = "/watchlist";

  const schemas = [
    webPageSchema({ title, description, path }),
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Watchlist", href: path },
    ]),
  ];

  return (
    <Layout breadcrumb={[{ label: "Home", href: "/" }, { label: "Watchlist" }]}>
      <Seo
        title={title}
        description={description}
        keywords="movie watchlist, saved movies, random movie generator watchlist"
        path={path}
        schemas={schemas}
      />

      <div className="page-hero">
        <span className="genre-chip">📋 Your List</span>
        <h1>My Watchlist</h1>
        <p className="lede">
          Every movie you&rsquo;ve saved while generating, all in one place. Stored locally in your
          browser — no account needed.
        </p>
      </div>

      <div className="watchlist-header">
        <span className="watchlist-count">
          {mounted ? `${list.length} movie${list.length === 1 ? "" : "s"} saved` : "Loading..."}
        </span>
        {list.length > 0 && (
          <Link href="/random-action-movie-generator" className="btn btn-secondary btn-sm">
            🎲 Generate More Movies
          </Link>
        )}
      </div>

      {mounted && list.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">🎬</div>
          <h2>Your watchlist is empty</h2>
          <p>
            Generate a random movie from any genre and click &ldquo;Add to Watchlist&rdquo; to save it here
            for later.
          </p>
          <Link href="/" className="btn btn-primary">
            Browse Genres
          </Link>
        </div>
      )}

      {mounted && list.length > 0 && (
        <div className="watchlist-grid">
          {list.map((m) => (
            <div key={m.id} className="watchlist-card">
              <div className="watchlist-poster">
                {m.posterPath ? (
                  <img src={m.posterPath} alt={`${m.title} poster`} loading="lazy" />
                ) : (
                  <div className="movie-poster-fallback">No image</div>
                )}
              </div>
              <div className="watchlist-card-body">
                <h4>{m.title}</h4>
                <div className="wc-meta">
                  <span>{m.year}</span>
                  {typeof m.voteAverage === "number" && (
                    <>
                      <span>•</span>
                      <span>⭐ {m.voteAverage}/10</span>
                    </>
                  )}
                </div>
                {m.genreNames && m.genreNames.length > 0 && (
                  <div className="genre-pills">
                    {m.genreNames.slice(0, 2).map((g) => (
                      <span key={g} className="genre-pill">
                        {g}
                      </span>
                    ))}
                  </div>
                )}
                <button
                  className="btn btn-outline btn-sm btn-block watchlist-remove"
                  onClick={() => handleRemove(m.id)}
                >
                  ✕ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <section className="content-section">
        <h2 className="section-heading" style={{ fontSize: "1.8rem" }}>
          How Your Watchlist Works
        </h2>
        <div className="content-body">
          <p>
            Your watchlist is stored entirely in your browser&rsquo;s local storage — there&rsquo;s no
            account, no login, and no server-side database tracking what you save. That means it&rsquo;s
            completely private to your device and persists between visits as long as you don&rsquo;t clear
            your browser&rsquo;s site data. If you switch browsers or devices, your watchlist won&rsquo;t
            follow you automatically, since nothing is synced to an account — it lives only where you saved
            it.
          </p>
          <p>
            To add a movie, generate one from any of our{" "}
            <Link href="/">eight genre generators</Link> and click <strong>Add to Watchlist</strong> on the
            result. To remove a movie, just click <strong>Remove</strong> on its card here. There&rsquo;s no
            limit to how many films you can save.
          </p>

          <h2>Why We Built It This Way</h2>
          <p>
            We considered building a traditional account system early on, where your watchlist would sync
            across every device you use. We ultimately decided against it, at least for now, because it
            would mean asking you to create a password and trust us with an account just to save a short
            list of movie titles — a fairly heavy ask for what should be a lightweight, frictionless tool.
            Local storage gives you full ownership of your data without any of that overhead: nothing about
            your watchlist is ever transmitted to our servers, logged, or visible to us in any way.
          </p>

          <h2>Tips for Getting the Most Out of Your Watchlist</h2>
          <ul>
            <li>
              <strong>Use it as a pre-vetted shortlist for movie night.</strong> Spend a few minutes earlier
              in the week generating across a few genres and saving anything promising, so movie night
              itself starts with options instead of a blank slate.
            </li>
            <li>
              <strong>Don&rsquo;t worry about over-saving.</strong> There&rsquo;s no limit to how many
              titles you can keep here, so save liberally and prune later rather than being overly selective
              up front.
            </li>
            <li>
              <strong>Remove titles after watching them.</strong> Keeping the list current makes it more
              useful as an actual shortlist rather than a growing archive of half-remembered recommendations.
            </li>
            <li>
              <strong>Remember it&rsquo;s device-specific.</strong> If you plan to watch on a different
              device than the one you used to browse, it&rsquo;s worth jotting down the title separately, or
              generating it again from the device you&rsquo;ll actually be watching on.
            </li>
          </ul>
        </div>
      </section>

      <div className="cta-banner">
        <h2>Need More to Add?</h2>
        <p>Jump into any genre and keep building your list.</p>
        <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap", justifyContent: "center" }}>
          {GENRES.slice(0, 4).map((g) => (
            <Link key={g.id} href={`/${g.slug}`} className="btn btn-secondary btn-sm">
              {g.icon} {g.name}
            </Link>
          ))}
        </div>
      </div>

      <section className="content-section">
        <h2 className="section-heading" style={{ fontSize: "1.6rem" }}>
          Frequently Asked Questions About the Watchlist
        </h2>
        <div className="content-body">
          <h3>Will my watchlist still be here if I close the browser?</h3>
          <p>
            Yes. Local storage persists between browser sessions, so closing the tab or even restarting your
            computer won't clear your saved movies. The only things that will clear it are manually removing
            items, clearing your browser's site data for this domain, or using a private/incognito window,
            which doesn't retain local storage after the session ends.
          </p>
          <h3>Can I export my watchlist or share it with someone else?</h3>
          <p>
            There isn't currently a built-in export or sharing feature, since the watchlist is intentionally
            kept simple and local to your device. If you want to share a recommendation with someone, the
            easiest approach is to generate it together or send them the movie title directly.
          </p>
          <h3>Why does my watchlist look empty on a different device?</h3>
          <p>
            This is expected behavior, not a bug. Because your watchlist lives in local browser storage
            rather than a server-side account, it's tied to the specific browser and device you used to save
            each title. Generating and saving from a different device starts a separate, independent
            watchlist there.
          </p>
          <h3>What happens if I clear my browser's cache or data?</h3>
          <p>
            Clearing your browser's site data, cookies, or local storage for this site will remove your
            saved watchlist along with your theme preference, since both are stored using the same
            mechanism. If you're planning to clear your browser data and want to keep your list, it's worth
            jotting down the titles elsewhere first, since there's currently no export feature to back it up
            automatically.
          </p>
          <h3>Is there a limit to how many movies I can save?</h3>
          <p>
            There's no hard limit built into the tool itself. In practice, browser local storage has a
            generous capacity that comfortably accommodates hundreds of saved titles, far more than most
            people would realistically accumulate before watching or removing some of them.
          </p>
        </div>
      </section>
    </Layout>
  );
}
