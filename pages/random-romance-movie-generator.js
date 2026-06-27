// pages/random-romance-movie-generator.js
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
    q: "What films show up in the romance generator?",
    a: "We pull from TMDB's Romance genre tag (genre ID 10749), which includes romantic dramas, romantic comedies, period romances, and love-story-driven films across every era.",
  },
  {
    q: "Will I get romantic comedies or just serious romantic dramas?",
    a: "Both. Romance is a broad tag on TMDB, so the pool includes lighthearted rom-coms alongside more dramatic love stories — the genre badges on each result will show you exactly which other categories a film falls under.",
  },
  {
    q: "Can I find a romance movie for date night specifically?",
    a: "Yes — that's one of the most common uses of this generator. Hit generate, check the poster, rating, and overview together, and you'll usually know within seconds whether it fits the mood you're going for.",
  },
  {
    q: "Does the generator include LGBTQ+ romance films?",
    a: "The pool is pulled directly from TMDB's full Romance genre tag, which includes romance films across the full spectrum of relationships represented in mainstream and independent cinema.",
  },
  {
    q: "Can I save a romance movie to watch later?",
    a: "Yes. Click Add to Watchlist on any result to save it locally in your browser — perfect for planning an upcoming date night or just keeping a running list of films to get to eventually.",
  },
];

export default function RomanceMoviePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const title = "Random Romance Movie Generator — Find a Romantic Film Instantly";
  const description =
    "Discover your next romantic movie with our free Random Romance Movie Generator. Get random romance films with posters, ratings, trailers and IMDb links.";
  const path = "/random-romance-movie-generator";

  const schemas = [
    webPageSchema({ title, description, path }),
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Random Romance Movie Generator", href: path },
    ]),
    faqSchema(FAQS),
    softwareApplicationSchema({ name: "Random Romance Movie Generator", description, path }),
  ];

  return (
    <Layout breadcrumb={[{ label: "Home", href: "/" }, { label: "Romance Movie Generator" }]}>
      <Seo
        title={title}
        description={description}
        keywords="random romance movie generator, romantic movie generator, romance movie picker, date night movie generator"
        path={path}
        schemas={schemas}
      />

      <div className="page-hero">
        <span className="genre-chip">❤️ Romance</span>
        <h1>Random Romance Movie Generator</h1>
        <p className="lede">
          Set the mood without the search. Generate a random romance movie instantly, complete with poster,
          rating, trailer, and IMDb link.
        </p>
      </div>

      <MovieTool genreId={10749} genreName="Romance" />

      <section className="content-section">
        <h2 className="section-heading" style={{ fontSize: "2rem" }}>
          Find the Right Romance Movie Without the Back-and-Forth
        </h2>
        <div className="content-body">
          <p>
            Few things derail a planned date night faster than spending the first thirty minutes scrolling
            through a streaming app trying to agree on a movie. Romance, more than almost any other genre,
            tends to spark disagreement — one person wants a lighthearted rom-com, the other wants a slower,
            more dramatic love story, and neither wants to be the one who picks something the other person
            doesn&rsquo;t like. The <strong>Random Romance Movie Generator</strong> sidesteps the whole
            negotiation: one click hands you a real romance film, complete with its poster, rating, runtime,
            and plot summary, so you can decide together in seconds instead of arguing for half an hour.
          </p>

          <h2>Why Romance Movies Are Hard to Agree On</h2>
          <p>
            The romance genre is enormous and tonally diverse — it spans giddy romantic comedies, slow-burn
            period dramas, tear-jerking tragedies, and everything in between. That diversity is great for
            variety but terrible for quick decision-making, especially when two people are trying to land on
            something they&rsquo;ll both enjoy. Most streaming platforms don&rsquo;t make this any easier,
            grouping wildly different tones under one &ldquo;Romance&rdquo; category with little context
            beyond a thumbnail and a one-line description.
          </p>

          <h2>How the Generator Selects Romance Films</h2>
          <p>
            Every result is pulled from TMDB&rsquo;s Romance genre tag (genre ID 10749), filtered to titles
            with enough audience votes that the data — poster, summary, rating — is reliable. Within that
            pool, selection is fully random, meaning you might get a sweeping period romance one click and a
            breezy modern rom-com the next. Because many romance films also carry a second genre tag like
            Comedy or Drama, the genre badges shown with each result give you immediate context on the
            overall tone before you commit.
          </p>

          <h2>What Each Romance Pick Includes</h2>
          <ul>
            <li><strong>Poster and title</strong> for instant context.</li>
            <li><strong>Release year and runtime</strong> so you can judge how it fits your evening.</li>
            <li><strong>Star rating</strong> built from real audience votes.</li>
            <li><strong>Genre badges</strong> showing if it leans more Comedy, Drama, or otherwise — useful for gauging tone.</li>
            <li><strong>A plot overview</strong> to quickly judge the premise.</li>
            <li><strong>Trailer and IMDb links</strong> so both people can preview it before agreeing.</li>
          </ul>

          <h2>Ideal for Date Nights and Solo Comfort-Watching Alike</h2>
          <p>
            While this generator is a natural fit for couples trying to agree on a date-night movie, it
            works just as well for solo viewers who simply want a comforting love story without the decision
            fatigue. Either way, the goal is the same: remove the friction of choosing so you can spend more
            time actually watching the movie.
          </p>

          <h2>Plan Ahead With Your Watchlist</h2>
          <p>
            Found a romance film that looks perfect for an upcoming date night but isn&rsquo;t quite right
            for tonight? Click <strong>Add to Watchlist</strong> to save it locally in your browser. It will
            be ready and waiting on your <strong>Watchlist</strong> page whenever the timing&rsquo;s right.
          </p>

          <h2>Romance Across Decades and Styles</h2>
          <p>
            The romance genre has evolved through distinct eras — the grand, sweeping period romances of
            classic Hollywood, the witty screwball romantic comedies of the mid-20th century, the more
            emotionally raw romantic dramas that became prominent from the 1990s onward, and the modern
            wave of feel-good romantic comedies that streaming platforms have increasingly invested in.
            Because TMDB&rsquo;s Romance tag spans all of these eras, a randomized pick might surface a
            decades-old classic just as easily as something released in the last year, which is part of
            what makes this generator a genuine discovery tool rather than just a tie-breaker.
          </p>

          <h2>Reading the Room Before You Generate</h2>
          <p>
            Because romance covers everything from light, breezy rom-coms to heavier, more emotionally
            demanding dramas, it&rsquo;s worth taking a moment before generating to think about what kind of
            emotional experience you&rsquo;re actually looking for tonight. If you want something
            comforting and low-stakes, you&rsquo;ll likely want to re-roll past anything that reads as a
            heavier drama in its plot summary. If you&rsquo;re in the mood to be moved, a more dramatic pick
            might be exactly right. The overview shown with every result is usually enough to make that call
            quickly.
          </p>

          <h2>Why Couples Specifically Benefit From Randomizing</h2>
          <p>
            Romance is unusual among genres in how often it&rsquo;s chosen jointly rather than individually
            — which means the usual decision fatigue problem is doubled, since two people now have to agree
            rather than just one. Generating a single random pick and reacting to it together tends to
            short-circuit a lot of the back-and-forth that comes from each person independently scrolling
            through a streaming app's romance category and silently judging the other's taste. It turns
            picking the movie into a shared, low-stakes activity rather than a negotiation.
          </p>

          <h2>Beyond the Couple's Date Night</h2>
          <p>
            While date nights are the most common use case, this generator works just as well for a solo
            comfort-watch evening, a group of friends in the mood for something emotionally engaging rather
            than purely entertaining, or anyone simply curious to revisit a genre they don't browse for
            often. The randomized pool spans enough variety in tone and era that it rewards repeat use far
            beyond just date-night decision-making.
          </p>

          <h2>Romance Pairs Well With Intention</h2>
          <p>
            More than most genres, romance tends to land better when the viewing environment matches the
            tone — a quiet room, minimal distractions, maybe something to eat or drink that feels a little
            more deliberate than usual. Taking a moment to set that environment before generating, rather
            than treating it as background viewing, tends to make even a randomly chosen romance film feel
            like a more complete experience.
          </p>
        </div>
      </section>

      <div className="cta-banner">
        <h2>Set the Mood</h2>
        <p>Generate a random romance movie now and skip the back-and-forth.</p>
      </div>

      <section className="faq-section">
        <div className="eyebrow">FAQs</div>
        <h2 className="section-heading">Romance Movie Generator — Common Questions</h2>
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
