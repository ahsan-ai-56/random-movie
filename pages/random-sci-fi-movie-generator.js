// pages/random-sci-fi-movie-generator.js
import { useState } from "react";
import Layout from "../components/Layout";
import MovieTool from "../components/MovieTool";
import Seo, {
  breadcrumbSchema,
  faqSchema,
  webPageSchema,
  softwareApplicationSchema,
} from "../components/Seo";

const FAQS = [
  {
    q: "What's included in the sci-fi generator pool?",
    a: "We use TMDB's Science Fiction genre tag (genre ID 878), covering space operas, dystopian futures, time travel stories, alien invasion films, and hard science fiction dramas.",
  },
  {
    q: "Will I get classic sci-fi or only modern films?",
    a: "Both. The pool spans decades of science fiction, filtered only by having enough audience votes to ensure reliable poster and rating data, so you'll see a mix of genre-defining classics and recent releases.",
  },
  {
    q: "Can I get a sci-fi movie that's also action or horror?",
    a: "Yes. Science fiction frequently overlaps with Action, Horror, Thriller, and Adventure — the genre badges shown with each result reveal every category a film is tagged with.",
  },
  {
    q: "Is this generator good for finding underrated sci-fi films?",
    a: "Yes — because picks are genuinely randomized within a large pool rather than sorted by what's currently trending, you'll regularly surface well-regarded sci-fi titles that don't always appear at the top of a streaming app's recommendations.",
  },
  {
    q: "Can I save a sci-fi pick to watch later?",
    a: "Yes. Click Add to Watchlist on any result to save it locally in your browser, ready for you whenever you're in the mood to dive into something futuristic.",
  },
];

export default function SciFiMoviePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const title = "Random Sci-Fi Movie Generator — Discover Science Fiction Films Instantly";
  const description =
    "Explore the universe of science fiction with our Random Sci-Fi Movie Generator. Get random sci-fi movies with posters, ratings, trailers and IMDb links.";
  const path = "/random-sci-fi-movie-generator";

  const schemas = [
    webPageSchema({ title, description, path }),
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Random Sci-Fi Movie Generator", href: path },
    ]),
    faqSchema(FAQS),
    softwareApplicationSchema({ name: "Random Sci-Fi Movie Generator", description, path }),
  ];

  return (
    <Layout breadcrumb={[{ label: "Home", href: "/" }, { label: "Sci-Fi Movie Generator" }]}>
      <Seo
        title={title}
        description={description}
        keywords="random sci-fi movie generator, science fiction movie generator, sci-fi movie picker, what sci-fi movie should i watch"
        path={path}
        schemas={schemas}
      />

      <div className="page-hero">
        <span className="genre-chip">🚀 Sci-Fi</span>
        <h1>Random Sci-Fi Movie Generator</h1>
        <p className="lede">
          Distant galaxies, dystopian futures, and mind-bending time travel — generate a random sci-fi movie
          instantly and let the universe decide.
        </p>
      </div>

      <MovieTool genreId={878} genreName="Sci-Fi" />

      <section className="content-section">
        <h2 className="section-heading" style={{ fontSize: "2rem" }}>
          Explore Science Fiction Without the Endless Search
        </h2>
        <div className="content-body">
          <p>
            Science fiction is one of cinema&rsquo;s most expansive genres — a single label that covers
            everything from quiet, contemplative space dramas to bombastic alien invasion blockbusters. That
            range makes browsing for &ldquo;a sci-fi movie&rdquo; surprisingly inefficient, since the genre
            tag alone tells you almost nothing about tone, scale, or pacing. The{" "}
            <strong>Random Sci-Fi Movie Generator</strong> solves this by handing you a specific, real film
            instantly — poster, rating, runtime, and plot summary included — so you can judge the actual
            premise rather than guessing from a thumbnail.
          </p>

          <h2>Why Sci-Fi Is Such a Broad Genre to Browse</h2>
          <p>
            Science fiction as a label spans hard science dramas grounded in real physics, pulpy space
            operas with laser battles, quiet dystopian character studies, and time-bending puzzle-box
            thrillers. Few other genres carry this much internal variety. Streaming platforms typically lump
            all of it together, which means searching &ldquo;sci-fi&rdquo; can surface a meditative arthouse
            film right next to a loud summer blockbuster, with no easy way to tell which is which without
            clicking in.
          </p>

          <h2>How the Generator Picks Sci-Fi Movies</h2>
          <p>
            Every result comes from TMDB&rsquo;s Science Fiction genre tag (genre ID 878), filtered to
            titles with enough audience votes that the underlying data is reliable. The pick within that
            pool is fully randomized — not weighted toward the newest or most mainstream releases — so
            you&rsquo;ll regularly encounter acclaimed but lesser-known sci-fi titles alongside genre-
            defining classics and recent hits.
          </p>

          <h2>What You Get With Every Sci-Fi Pick</h2>
          <ul>
            <li><strong>Poster and title</strong> for instant recognition.</li>
            <li><strong>Release year and runtime</strong> to judge scope and pacing.</li>
            <li><strong>Star rating</strong> from real aggregated audience scores.</li>
            <li><strong>Genre badges</strong> showing crossover tags like Action, Adventure, or Thriller.</li>
            <li><strong>A plot overview</strong> so you understand the premise before diving in.</li>
            <li><strong>Trailer and IMDb links</strong> to preview tone and scale.</li>
          </ul>

          <h2>A Great Way to Rediscover the Genre</h2>
          <p>
            Because the selection pool spans decades of science fiction, this generator is a genuinely
            useful discovery tool — not just a way to kill decision fatigue, but a way to stumble onto
            well-regarded films you might never have searched for directly. If you&rsquo;re a long-time
            sci-fi fan who feels like you&rsquo;ve &ldquo;seen everything,&rdquo; a few rounds of random
            generation often turns up something you missed.
          </p>

          <h2>Save Promising Picks for Later</h2>
          <p>
            If a result looks intriguing but you&rsquo;re not ready to commit tonight, click{" "}
            <strong>Add to Watchlist</strong> to save it locally in your browser. It will be there on your{" "}
            <strong>Watchlist</strong> page next time you&rsquo;re in the mood for something set in the
            future, or in space, or both.
          </p>

          <h2>From Pulp Serials to Prestige Television's Cinematic Cousins</h2>
          <p>
            Science fiction cinema traces back to early pulp serials and B-movies built around rockets,
            ray guns, and invading aliens, long before the genre earned mainstream critical respect. The
            late 1960s and 1970s brought a wave of more philosophically ambitious science fiction, exploring
            themes of identity, technology, and societal collapse with the same seriousness as any drama.
            Since then, the genre has continued to split between large-scale blockbuster spectacle and
            smaller, idea-driven films that use speculative premises to explore very human questions. A
            randomized pick from TMDB&rsquo;s Science Fiction tag can land anywhere on that spectrum, from a
            sprawling space epic to a quiet, single-location thought experiment.
          </p>

          <h2>Why Sci-Fi Rewards a Slightly More Patient Viewer</h2>
          <p>
            Compared to action or comedy, science fiction more often asks you to sit with an unfamiliar
            premise for the first ten or fifteen minutes before the story&rsquo;s rules become clear. That
            can make a poor match feel more frustrating than in faster, more immediately legible genres —
            which is exactly why the plot overview shown with every result matters so much here. Reading it
            before committing, rather than judging purely by the poster, will usually tell you within a
            sentence or two whether the premise sounds appealing or like the wrong kind of sci-fi for
            tonight.
          </p>

          <h2>Using the Generator to Branch Out</h2>
          <p>
            If you tend to gravitate toward one specific corner of science fiction — space opera, say, or
            time travel stories — this generator is a particularly good way to deliberately encounter the
            parts of the genre you might otherwise skip. Because the pool isn&rsquo;t filtered by subgenre,
            a few rounds of generation will often surface something stylistically far from your usual taste,
            which is either an easy pass or a genuinely pleasant surprise.
          </p>

          <h2>Sci-Fi's Long History of Predicting and Reflecting the Present</h2>
          <p>
            Part of what makes science fiction endlessly rewatchable as a genre is how often it ends up
            functioning as a commentary on the era it was made in, even when set in an imagined future or
            distant galaxy. Cold War anxieties, fears about automation and artificial intelligence, questions
            about surveillance and privacy, and concerns about climate and resource scarcity have all moved
            through science fiction cinema in different decades, sometimes years before those topics became
            mainstream conversation. Watching a randomly generated sci-fi film with that lens — asking what
            real-world anxiety the story might be processing — often adds an extra layer of interest beyond
            the plot itself.
          </p>

          <h2>When to Trust the Rating, and When to Trust the Premise</h2>
          <p>
            Science fiction is a genre where audience ratings can be a slightly noisy signal, since
            ambitious, idea-driven films sometimes score lower than crowd-pleasing blockbusters simply
            because they ask more of the viewer. If a generated pick has a modest rating but a premise that
            genuinely intrigues you, it's often worth giving it a chance anyway — some of the genre's most
            interesting films are also its most divisive.
          </p>
        </div>
      </section>

      <div className="cta-banner">
        <h2>Ready to Launch?</h2>
        <p>Generate a random sci-fi movie now and explore something new.</p>
      </div>

      <section className="faq-section">
        <div className="eyebrow">FAQs</div>
        <h2 className="section-heading">Sci-Fi Movie Generator — Common Questions</h2>
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
