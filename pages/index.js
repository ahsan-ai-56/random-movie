// pages/index.js
import { useState } from "react";
import Link from "next/link";
import Layout, { GENRES } from "../components/Layout";
import Seo, { breadcrumbSchema, faqSchema, webPageSchema, softwareApplicationSchema } from "../components/Seo";

const FAQS = [
  {
    q: "Is Random Movie Generator really free to use?",
    a: "Yes. Every tool on this site is completely free, with no sign-up, subscription, or hidden fees. Generate as many random movies as you like, across any genre, at no cost.",
  },
  {
    q: "Where does the movie data come from?",
    a: "All movie data — posters, ratings, runtimes, overviews, and genres — comes from The Movie Database (TMDB), a large, actively maintained, community-driven film database with real-time information on hundreds of thousands of titles.",
  },
  {
    q: "Can I save movies to watch later?",
    a: "Yes. Click \"Add to Watchlist\" on any movie result and it will be saved to your personal Watchlist page, stored locally in your browser so it's there next time you visit.",
  },
  {
    q: "Does the generator pick truly random movies, or just popular ones?",
    a: "We bias toward movies with a reasonable number of votes so you don't land on obscure, undocumented titles with missing posters or data — but within that pool, the pick is genuinely random every time you click Generate.",
  },
  {
    q: "Can I find a trailer and IMDb page for each movie?",
    a: "Yes. Every result includes a direct YouTube trailer link (or a YouTube search fallback if no trailer is indexed) and a link to the movie's IMDb page so you can check reviews before you commit to watching.",
  },
  {
    q: "How many genres can I generate movies from?",
    a: "Eight genres: Action, Comedy, Horror, Romance, Sci-Fi, Thriller, Animated, and Documentary. Each genre has its own dedicated generator page optimized for that mood.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const title = "Random Movie Generator — Discover Your Next Favorite Film Instantly";
  const description =
    "Random Movie Generator helps you discover great films instantly. Choose a genre and generate a random movie with poster, rating, trailer, and IMDb link — free and instant.";

  const schemas = [
    webPageSchema({ title, description, path: "/" }),
    breadcrumbSchema([{ label: "Home", href: "/" }]),
    faqSchema(FAQS),
    softwareApplicationSchema({
      name: "Random Movie Generator",
      description,
      path: "/",
    }),
  ];

  return (
    <Layout>
      <Seo
        title={title}
        description={description}
        keywords="random movie generator, movie picker, what movie should i watch, random film generator, movie roulette, pick a random movie"
        path="/"
        schemas={schemas}
      />

      {/* HERO */}
      <section className="hero">
        <div className="hero-backdrop" aria-hidden="true" />
        <div className="hero-fade" aria-hidden="true" />
        <div className="hero-content">
          <h1>
            Can&rsquo;t Decide What to Watch?
            <br />
            <span className="hl">Let the Reel Decide.</span>
          </h1>
          <p className="lede">
            Random Movie Generator instantly picks a film for you — pick a genre, hit generate, and get a
            real movie with its poster, rating, trailer, and IMDb link in under a second. No sign-up, no
            endless scrolling, just a decision.
          </p>
          <div className="hero-cta-row">
            <Link href="/random-action-movie-generator" className="btn btn-primary">
              🎲 Generate a Random Movie
            </Link>
            <Link href="/watchlist" className="btn btn-secondary">
              📋 View My Watchlist
            </Link>
          </div>
        </div>
      </section>

      {/* GENRE GRID */}
      <section className="genre-grid-section" id="genres">
        <div className="eyebrow">Pick Your Mood</div>
        <h2 className="section-heading">Choose a Genre to Get Started</h2>
        <p className="section-sub">
          Every genre has its own dedicated generator, tuned to pull movies that actually match the mood
          you&rsquo;re in — not just whatever&rsquo;s trending.
        </p>
        <div className="genre-grid">
          {GENRES.map((g) => (
            <Link key={g.id} href={`/${g.slug}`} className="genre-card">
              <div className="genre-icon" style={{ background: `${g.color}22`, color: g.color }}>
                {g.icon}
              </div>
              <h3>{g.name}</h3>
              <p>Random {g.name.toLowerCase()} movie, instantly</p>
              <span className="arrow">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <div className="how-inner">
          <div className="eyebrow">Simple By Design</div>
          <h2 className="section-heading">How Random Movie Generator Works</h2>
          <div className="how-grid">
            <div className="how-step">
              <div className="step-num">1</div>
              <h3>Pick a Genre</h3>
              <p>Choose from Action, Comedy, Horror, Romance, Sci-Fi, Thriller, Animated, or Documentary.</p>
            </div>
            <div className="how-step">
              <div className="step-num">2</div>
              <h3>Hit Generate</h3>
              <p>We pull a real movie from TMDB&rsquo;s database with poster, rating, runtime, and genre tags.</p>
            </div>
            <div className="how-step">
              <div className="step-num">3</div>
              <h3>Watch or Save</h3>
              <p>Jump straight to the trailer or IMDb page, or save it to your Watchlist for later.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION — 1000+ words */}
      <section className="content-section">
        <div className="eyebrow">About the Tool</div>
        <h1 className="section-heading" style={{ fontSize: "2.2rem" }}>
          The Easiest Way to Decide What Movie to Watch Tonight
        </h1>
        <div className="content-body">
          <p>
            We&rsquo;ve all been there: you sit down with a free evening, open a streaming app, and somehow
            spend forty-five minutes scrolling through thumbnails without picking anything. This phenomenon
            even has a name — decision fatigue — and when it comes to choosing a film, it&rsquo;s one of the
            most common ways a relaxing night gets quietly ruined before it even starts. <strong>Random
            Movie Generator</strong> exists to solve exactly this problem. Instead of browsing endless
            catalogs, you choose a genre, click a single button, and get one real movie recommendation,
            complete with its poster, IMDb-style rating, runtime, plot summary, and a direct link to the
            trailer. No accounts, no paywalls, no recommendation algorithm trying to upsell you a
            subscription — just a fast, honest way to land on something to watch.
          </p>

          <h2>Why a Random Movie Generator Actually Works Better Than Browsing</h2>
          <p>
            Most streaming platforms are built to maximize how long you browse, not how quickly you decide.
            Their recommendation engines are designed to keep you scrolling, surfacing dozens of similar
            options so you keep comparing instead of committing. A random generator flips that incentive
            entirely. By deliberately removing the element of choice paralysis — giving you exactly one
            option per click — it mirrors how people actually pick movies in real life: a friend says
            &ldquo;let&rsquo;s watch a horror movie,&rdquo; someone names one, and you&rsquo;re watching it
            within minutes. That&rsquo;s the experience we&rsquo;ve tried to recreate here, just with the
            entire TMDB catalog standing in for your friend&rsquo;s suggestion.
          </p>

          <h2>Real Data From The Movie Database (TMDB)</h2>
          <p>
            Every movie that appears on this site is pulled live from{" "}
            <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer">
              The Movie Database (TMDB)
            </a>
            , one of the largest and most actively maintained open film databases on the internet. That
            means the posters are official artwork, the ratings reflect real audience scores aggregated from
            thousands of votes, and the plot summaries are accurate and up to date — not placeholder text or
            outdated cached data. We also pull each film&rsquo;s runtime, release year, and genre tags
            directly from TMDB&rsquo;s metadata, and cross-reference IMDb and YouTube to surface a direct
            link to the film&rsquo;s trailer and its IMDb page, so you can quickly sanity-check a
            recommendation before committing your evening to it.
          </p>

          <h2>One Generator, Eight Genres, Endless Combinations</h2>
          <p>
            Rather than a single generic &ldquo;random movie&rdquo; button, Random Movie Generator is split
            into eight dedicated genre generators: <strong>Action</strong>, <strong>Comedy</strong>,{" "}
            <strong>Horror</strong>, <strong>Romance</strong>, <strong>Sci-Fi</strong>,{" "}
            <strong>Thriller</strong>, <strong>Animated</strong>, and <strong>Documentary</strong>. Each one
            has its own page, its own optimized pool of films, and its own set of frequently asked questions
            tailored to that genre&rsquo;s quirks — because what makes a great horror recommendation is very
            different from what makes a great documentary recommendation. This also means you can bookmark
            the exact generator that matches your mood: bookmark the horror generator for late-night scares,
            the comedy generator for a lighter Friday, or the documentary generator for when you want to
            actually learn something while you unwind.
          </p>

          <h2>What You Get With Every Recommendation</h2>
          <ul>
            <li>
              <strong>Official poster artwork</strong> sourced directly from TMDB&rsquo;s media library.
            </li>
            <li>
              <strong>Title, release year, and runtime</strong> so you know exactly what you&rsquo;re
              committing to.
            </li>
            <li>
              <strong>A star rating</strong> built from real aggregated audience votes, displayed as a
              simple, scannable five-star system.
            </li>
            <li>
              <strong>Genre badge pills</strong> showing every category the film falls under, not just the
              one you searched.
            </li>
            <li>
              <strong>A short plot overview</strong> so you can judge the premise before you press play.
            </li>
            <li>
              <strong>A direct trailer link</strong> pulled from TMDB&rsquo;s video index, falling back to a
              YouTube search if no trailer is catalogued for that title.
            </li>
            <li>
              <strong>A one-click IMDb link</strong> so you can quickly check broader critical reception.
            </li>
            <li>
              <strong>An &ldquo;Add to Watchlist&rdquo; button</strong> that saves the film locally in your
              browser, no account required.
            </li>
            <li>
              <strong>Four similar movie suggestions</strong> beneath every result, in case the first pick
              isn&rsquo;t quite right but you like the general direction.
            </li>
          </ul>

          <h2>Built for Indecisive Movie Nights, Solo or With Friends</h2>
          <p>
            This tool was designed with two very common scenarios in mind. The first is the solo scenario:
            you&rsquo;re tired, you don&rsquo;t want to think too hard, and you just want something decent
            queued up within thirty seconds. The second is the group scenario: nobody in the room can agree
            on what to watch, so instead of arguing, someone pulls up Random Movie Generator, picks the
            genre everyone vaguely agrees on, and lets the tool make the final call. In both cases, removing
            the burden of choice — rather than adding more options — is what actually gets people watching
            something instead of arguing about what to watch.
          </p>

          <h2>Your Watchlist, Saved Right in Your Browser</h2>
          <p>
            Found something interesting but not in the mood to watch it right now? Click{" "}
            <strong>Add to Watchlist</strong> and it&rsquo;s saved instantly. Your watchlist lives in your
            browser&rsquo;s local storage, which means it&rsquo;s private to your device, requires no
            account creation, and persists between visits as long as you don&rsquo;t clear your browser
            data. Visit the <Link href="/watchlist">Watchlist page</Link> any time to see everything
            you&rsquo;ve saved, remove titles you&rsquo;ve already watched, and pick up exactly where you
            left off.
          </p>

          <h2>Completely Free, No Catch</h2>
          <p>
            There&rsquo;s no premium tier, no ad-gated &ldquo;unlock more genres&rdquo; mechanic, and no
            email wall before you can see a result. Random Movie Generator is, and will remain, a free tool.
            We believe deciding what to watch shouldn&rsquo;t be harder — or more expensive — than actually
            watching the movie.
          </p>
        </div>
      </section>

      {/* CTA BANNER */}
      <div className="cta-banner">
        <h2>Stop Scrolling. Start Watching.</h2>
        <p>Pick a genre below and get a real movie recommendation in under a second.</p>
        <Link href="/random-comedy-movie-generator" className="btn btn-primary">
          🎬 Try the Generator Now
        </Link>
      </div>

      {/* FAQ */}
      <section className="faq-section">
        <div className="eyebrow">Frequently Asked Questions</div>
        <h2 className="section-heading">Everything You Want to Know</h2>
        <p className="section-sub">Quick answers about how Random Movie Generator works.</p>
        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <div key={i} className={`faq-item ${openFaq === i ? "open" : ""}`}>
              <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <h3>{faq.q}</h3>
                <div className="faq-icon">+</div>
              </div>
              <div className="faq-a">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
