// pages/random-movie-generator.js
import { useState } from "react";
import Link from "next/link";
import Layout, { GENRES } from "../components/Layout";
import MovieTool from "../components/MovieTool";
import CinematicBackground from "../components/CinematicBackground";
import Seo, {
  breadcrumbSchema,
  faqSchema,
  webPageSchema,
  softwareApplicationSchema,
} from "../components/Seo";

const FAQS = [
  {
    q: "How does the Random Movie Generator pick a movie?",
    a: "Click \"Generate a Random Movie\" and we pull a real, popular, well-rated title from TMDB. You can leave it on \"Surprise Me\" to get any genre at random, narrow it down with a genre pill, or fine-tune it further with the Advanced Filters panel — year, language, rating, runtime, and mood.",
  },
  {
    q: "Is this different from the genre-specific generator pages?",
    a: "This page is the all-in-one version — it covers every genre in one place with a quick filter, plus the full advanced filter set. If you already know you want Action, Horror, Comedy, or another specific genre, our dedicated genre pages add extra genre-specific tips, guides, and FAQs on top of the same filters.",
  },
  {
    q: "What does \"Surprise Me\" actually do?",
    a: "When no genre pill is selected, each click randomly picks from across our entire catalog — unless you've also set a Mood filter, in which case the mood implies a small set of matching genres so the surprise stays on-theme.",
  },
  {
    q: "What do the Year, Language, Rating, Runtime, and Mood filters actually do?",
    a: "Year narrows results to a release-date range (Classic, 90s, 2000s, 2010s, or New). Language filters by the film's original spoken language. Rating sets a minimum audience score. Runtime buckets results into Short, Normal, or Long. Mood layers in extra genre weighting — for example, Feel Good leans toward Comedy and Family titles.",
  },
  {
    q: "Can I combine multiple filters at once?",
    a: "Yes. All five advanced filters — Year, Language, Rating, Runtime, and Mood — work together, plus the genre pill if you've selected one. The more filters you stack, the narrower (and more specific) your random pool becomes.",
  },
  {
    q: "Can I switch genres or filters without losing my watchlist?",
    a: "Yes. Your watchlist is saved in your browser's local storage independently of any filter selection, so changing genres, mood, or any other filter never affects movies you've already saved.",
  },
  {
    q: "Is the Random Movie Generator free to use?",
    a: "Yes, completely free with no sign-up, no limits on how many times you can generate, and no account required.",
  },
  {
    q: "Where does the movie data come from?",
    a: "Every result — poster, rating, runtime, language, overview, trailer link, and IMDb link — comes from The Movie Database (TMDB), a large, actively maintained, real-world film database.",
  },
];

export default function RandomMovieGeneratorPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const title = "Random Movie Generator — Filter by Genre, Year, Language, Rating & Mood";
  const description =
    "The original Random Movie Generator. Filter by genre, release year, language, rating, runtime, and mood, then generate a real movie instantly — poster, trailer, and IMDb link included. Free.";
  const path = "/random-movie-generator";

  const schemas = [
    webPageSchema({ title, description, path }),
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Random Movie Generator", href: path },
    ]),
    faqSchema(FAQS),
    softwareApplicationSchema({ name: "Random Movie Generator", description, path }),
  ];

  return (
    <Layout breadcrumb={[{ label: "Home", href: "/" }, { label: "Random Movie Generator" }]}>
      <Seo
        title={title}
        description={description}
        keywords="random movie generator, random movie picker, surprise me movie, generate random movie, movie randomizer, movie filter by mood, what movie should i watch"
        path={path}
        schemas={schemas}
      />

      <CinematicBackground variant="hub" />

      <div className="tool-page-bg-wrap">
        <div className="page-hero">
          <span className="genre-chip">🎲 All Genres + Advanced Filters</span>
          <h1>Random Movie Generator</h1>
          <p className="lede">
            The original, all-in-one movie generator. Pick a genre, fine-tune with Year, Language, Rating,
            Runtime, and Mood, or leave it on <strong>Surprise Me</strong> and let the whole catalog decide.
          </p>
        </div>

        <MovieTool />

        <section className="feature-showcase">
          <div className="eyebrow">What Makes This Generator Different</div>
          <h2 className="section-heading">Six Filters. One Click. A Real Movie.</h2>
          <p className="section-sub">
            Most random movie tools give you a genre and nothing else. This one lets you actually shape the
            kind of surprise you get.
          </p>

          <div className="feature-row">
            <div className="feature-row-media">
              <img
                src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=700&q=80"
                alt="Film reels representing the wide catalog of movies available to generate from"
                loading="lazy"
              />
            </div>
            <div className="feature-row-text">
              <span className="feature-row-tag">01 — Genre + Surprise Me</span>
              <h3>Start as broad or as specific as you want</h3>
              <p>
                Tap a genre pill to lock onto Action, Comedy, Horror, Romance, Sci-Fi, Thriller, Animated, or
                Documentary — or leave it on <strong>Surprise Me</strong> and let every click pull from the
                full catalog. If you've set a Mood filter without picking a genre, Surprise Me automatically
                leans toward genres that match that mood.
              </p>
            </div>
          </div>

          <div className="feature-row feature-row--reverse">
            <div className="feature-row-media">
              <img
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=700&q=80"
                alt="Old film countdown numbers representing release year filtering"
                loading="lazy"
              />
            </div>
            <div className="feature-row-text">
              <span className="feature-row-tag">02 — Release Year Range</span>
              <h3>From golden-era classics to this year's releases</h3>
              <p>
                Choose <strong>Classic</strong> (before 1990) for old-school cinema, <strong>90s</strong>,{" "}
                <strong>2000s</strong>, or <strong>2010s</strong> for a specific decade's style, or{" "}
                <strong>New (2020+)</strong> when you only want recent releases. Leave it on Any Era to span
                every decade at once.
              </p>
            </div>
          </div>

          <div className="feature-row">
            <div className="feature-row-media">
              <img
                src="/movierandom.jpg"
                alt="World map and globe representing multi-language film filtering"
                loading="lazy"
              />
            </div>
            <div className="feature-row-text">
              <span className="feature-row-tag">03 — Language</span>
              <h3>English, Hindi, Spanish, French, Korean, Japanese, or Any</h3>
              <p>
                Filter results down to a film's original spoken language — useful for finding Bollywood
                hits, Korean cinema, French drama, or Japanese film specifically, instead of getting an
                English-language result by default.
              </p>
            </div>
          </div>

          <div className="feature-row feature-row--reverse">
            <div className="feature-row-media">
              <img
                src="/movierandom.jpg"
                alt="Gold star rating graphic representing the minimum rating filter"
                loading="lazy"
              />
            </div>
            <div className="feature-row-text">
              <span className="feature-row-tag">04 — Minimum Rating</span>
              <h3>Only see movies that actually scored well</h3>
              <p>
                Set a floor of <strong>6+ Good</strong>, <strong>7+ Very Good</strong>, or{" "}
                <strong>8+ Excellent</strong> based on real aggregated TMDB audience votes, so a random pick
                never means a poorly reviewed pick.
              </p>
            </div>
          </div>

          <div className="feature-row">
            <div className="feature-row-media">
              <img
                src="/moviegenerator.jpg"
                alt="Clock and stopwatch representing the runtime filter"
                loading="lazy"
              />
            </div>
            <div className="feature-row-text">
              <span className="feature-row-tag">05 — Runtime</span>
              <h3>Match the movie to the time you actually have</h3>
              <p>
                <strong>Short</strong> (under 90 minutes) for a quick watch, <strong>Normal</strong>{" "}
                (90–120 minutes) for a standard evening, or <strong>Long</strong> (120+ minutes) when you've
                got a full night ahead of you.
              </p>
            </div>
          </div>

          <div className="feature-row feature-row--reverse">
            <div className="feature-row-media">
              <img
                src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=700&q=80"
                alt="Theatrical masks representing mood-based movie filtering"
                loading="lazy"
              />
            </div>
            <div className="feature-row-text">
              <span className="feature-row-tag">06 — Mood</span>
              <h3>Feel Good, Dark &amp; Intense, Funny, Romantic, Mind-Bending, or Family Friendly</h3>
              <p>
                Mood is the filter that actually understands what you're in the mood for, not just what
                genre label a film carries. Each mood quietly maps to the genre combination most likely to
                deliver that feeling — Feel Good leans Comedy and Family, Mind-Bending leans Sci-Fi and
                Mystery, and so on.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2 className="section-heading" style={{ fontSize: "2rem" }}>
            One Generator, Every Genre, Zero Decision Fatigue
          </h2>
          <div className="content-body">
            <p>
              This is the main <strong>Random Movie Generator</strong> — the all-in-one version of the tool
              that started this whole site. Instead of committing to a single genre up front, you can leave
              the filter on <strong>Surprise Me</strong> and let a click pick from our entire catalog of
              Action, Comedy, Horror, Romance, Sci-Fi, Thriller, Animated, and Documentary films, layer in
              the Advanced Filters for year, language, rating, runtime, and mood, or tap any genre pill to
              narrow it down first. Either way, you get exactly one real movie per click — poster, audience
              rating, runtime, language, plot summary, trailer link, and IMDb link — with no scrolling, no
              account, and no catch.
            </p>

            <h2>Why Start Here Instead of a Specific Genre Page?</h2>
            <p>
              If you already know exactly what mood you're in, our dedicated genre pages — like{" "}
              <Link href="/random-action-movie-generator">Random Action Movie Generator</Link> or{" "}
              <Link href="/random-horror-movie-generator">Random Horror Movie Generator</Link> — carry the
              same full filter set plus extra genre-specific tips and FAQs. But if you genuinely don't know
              what you want to watch, or you want the option to bounce between genres and filters without
              navigating to a new page each time, this page is built exactly for that.
            </p>

            <h2>How Surprise Me Actually Works</h2>
            <p>
              When no genre pill is selected, every click randomly chooses from across the catalog, narrowed
              by whichever Year, Language, Rating, Runtime, and Mood filters you've set. This means two
              consecutive clicks on Surprise Me could hand you a comedy and then a documentary, or — if
              you've set Mood to Dark &amp; Intense — a thriller followed by a horror film, never straying
              from that emotional register even while the specific genre keeps changing.
            </p>

            <h2>What Every Result Includes</h2>
            <ul>
              <li><strong>Official poster artwork</strong> straight from TMDB's media library.</li>
              <li><strong>Title, release year, and runtime</strong> so you know what you're committing to.</li>
              <li><strong>A five-star rating</strong> built from real aggregated audience votes.</li>
              <li><strong>Original language</strong> displayed alongside the runtime and rating.</li>
              <li><strong>Genre badge pills</strong> showing every category the film actually falls under.</li>
              <li><strong>A plot overview</strong> so you can judge the premise before committing.</li>
              <li><strong>A trailer link</strong>, falling back to a YouTube search if no official trailer is indexed.</li>
              <li><strong>An IMDb link</strong> for a quick second opinion.</li>
              <li><strong>Add to Watchlist</strong>, saved locally in your browser with no account needed.</li>
              <li><strong>Four similar movie suggestions</strong> if the first pick isn't quite right.</li>
            </ul>

            <h2>Built for the Exact Moment You Don't Know What You Want</h2>
            <p>
              Most decision fatigue around movies doesn't come from too few options — it comes from too
              many, with no fast way to filter them down. This page is designed for the specific moment when
              you don't even know which genre you're in the mood for yet. Rather than forcing you to guess
              and commit to a genre page, Surprise Me combined with the Mood filter lets the randomness do
              that first step for you, while still respecting the emotional tone you're after.
            </p>

            <h2>Completely Free, Every Time</h2>
            <p>
              Just like every other tool on this site, the Random Movie Generator is free with no limits on
              how many times you can generate, no account required, and no ads gating any genre or filter.
              Click and adjust as many times as you need until something clicks.
            </p>
          </div>
        </section>

        <div className="cta-banner">
          <h2>Still Haven't Found Something?</h2>
          <p>Scroll up, adjust a filter, and roll again — it only takes a second.</p>
          <Link href="/watchlist" className="btn btn-secondary">
            📋 View My Watchlist
          </Link>
        </div>

        <section className="faq-section">
          <div className="eyebrow">FAQs</div>
          <h2 className="section-heading">Random Movie Generator — Common Questions</h2>
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

        <section className="genre-grid-section">
          <div className="eyebrow">Or Pick a Dedicated Genre Page</div>
          <h2 className="section-heading">Explore Each Genre in Depth</h2>
          <p className="section-sub">
            Every genre also has its own page with the same full filter set, plus extra genre-specific tips
            and FAQs.
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
      </div>
    </Layout>
  );
}
