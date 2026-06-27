// pages/random-thriller-movie-generator.js
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
    q: "What's the difference between thriller and horror in this generator?",
    a: "Thriller (genre ID 53) and Horror (genre ID 27) are separate TMDB tags. Thrillers focus on suspense, tension, and high-stakes plotting — like crime dramas, psychological mysteries, and conspiracy thrillers — while horror leans more on fear and dread. Some films carry both tags.",
  },
  {
    q: "Will I get crime thrillers and psychological thrillers both?",
    a: "Yes. The Thriller tag on TMDB is broad, covering crime thrillers, legal thrillers, psychological thrillers, and political conspiracy films, so the pool includes a wide tonal range within the suspense genre.",
  },
  {
    q: "Can a thriller pick also be an action movie?",
    a: "Often, yes. Thriller frequently overlaps with Action, Crime, and Mystery, and the genre badges on each result will show you every category a given film falls under.",
  },
  {
    q: "Is this good for finding slow-burn suspense films?",
    a: "Yes — the random pool includes both fast-paced thrillers and slower, tension-building suspense films, so a few re-rolls will usually surface something matching the pace you're after.",
  },
  {
    q: "Can I save a thriller to watch on a different night?",
    a: "Yes. Click Add to Watchlist on any result to save it locally in your browser for whenever you're ready.",
  },
];

export default function ThrillerMoviePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const title = "Random Thriller Movie Generator — Find Edge-of-Your-Seat Films Instantly";
  const description =
    "Discover gripping films with our Random Thriller Movie Generator. Get random thriller movies with posters, ratings, trailers and IMDb links — free and instant.";
  const path = "/random-thriller-movie-generator";

  const schemas = [
    webPageSchema({ title, description, path }),
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Random Thriller Movie Generator", href: path },
    ]),
    faqSchema(FAQS),
    softwareApplicationSchema({ name: "Random Thriller Movie Generator", description, path }),
  ];

  return (
    <Layout breadcrumb={[{ label: "Home", href: "/" }, { label: "Thriller Movie Generator" }]}>
      <Seo
        title={title}
        description={description}
        keywords="random thriller movie generator, suspense movie generator, thriller movie picker, what thriller should i watch"
        path={path}
        schemas={schemas}
      />

      <div className="page-hero">
        <span className="genre-chip">🔪 Thriller</span>
        <h1>Random Thriller Movie Generator</h1>
        <p className="lede">
          Tension, twists, and high stakes — generate a random thriller instantly and get pulled in from the
          first scene.
        </p>
      </div>

      <MovieTool genreId={53} genreName="Thriller" />

      <section className="content-section">
        <h2 className="section-heading" style={{ fontSize: "2rem" }}>
          Find a Gripping Thriller Without the Decision Fatigue
        </h2>
        <div className="content-body">
          <p>
            Thrillers live and die on tension — the slow tightening of a plot, the reveal you didn&rsquo;t
            see coming, the sense that something is always slightly wrong. That makes the genre incredibly
            satisfying to watch but oddly difficult to browse for, since a poster and a one-line description
            rarely convey whether a thriller is a tightly plotted crime drama or a slow-burn psychological
            mystery. The <strong>Random Thriller Movie Generator</strong> gets around this by handing you a
            full plot summary, rating, and trailer link instantly, so you can judge the actual premise rather
            than guessing from marketing art.
          </p>

          <h2>Why &ldquo;Thriller&rdquo; Covers So Much Ground</h2>
          <p>
            Unlike horror, which is fairly recognizable by tone, &ldquo;thriller&rdquo; is more of a
            structural label than a tonal one — it describes how a story builds tension rather than what
            kind of tension it builds. That means the genre includes legal dramas, heist films, psychological
            character studies, conspiracy thrillers, and crime procedurals, all under one umbrella.
            Browsing a generic &ldquo;thriller&rdquo; category on a streaming platform often surfaces a
            chaotic mix of these subgenres with little differentiation.
          </p>

          <h2>How We Select Thriller Movies</h2>
          <p>
            Every pick is pulled from TMDB&rsquo;s Thriller genre tag (genre ID 53), filtered to titles with
            enough audience votes that the rating and summary data are reliable. The selection itself is
            fully random within that pool, meaning your next click could surface a tightly wound legal
            thriller or a globe-spanning conspiracy plot with equal likelihood.
          </p>

          <h2>What Each Result Includes</h2>
          <ul>
            <li><strong>Poster and title</strong> for instant recognition.</li>
            <li><strong>Release year and runtime</strong> for planning your evening.</li>
            <li><strong>Star rating</strong> from real audience votes.</li>
            <li><strong>Genre badges</strong> showing overlaps with Crime, Mystery, or Action.</li>
            <li><strong>A plot overview</strong> to gauge the premise and stakes.</li>
            <li><strong>Trailer and IMDb links</strong> to preview tension and tone.</li>
          </ul>

          <h2>Great for When You Want to Be Kept Guessing</h2>
          <p>
            If your goal for the night is simply &ldquo;keep me guessing,&rdquo; a randomized thriller pick
            is often more satisfying than browsing — you go in with less foreknowledge of the plot, which
            preserves more of the twist for when it actually happens. Pair the generator with the IMDb link
            for a quick gut-check, then commit.
          </p>

          <h2>Save Tense Picks for Later</h2>
          <p>
            If a thriller catches your interest but the timing&rsquo;s not right, click{" "}
            <strong>Add to Watchlist</strong> to save it locally in your browser, ready whenever you want a
            night of suspense.
          </p>

          <h2>The Building Blocks of a Good Thriller</h2>
          <p>
            What separates a thriller from a drama with high stakes is usually a deliberate withholding of
            information — the audience, like the characters, doesn&rsquo;t know quite enough to feel safe.
            This can come from an unreliable narrator, a ticking clock, a conspiracy that seems to reach
            further than expected, or a protagonist who may not be telling the whole truth. Because
            TMDB&rsquo;s Thriller tag spans legal dramas, heist films, psychological character studies, and
            crime procedurals alike, every one of these mechanisms shows up somewhere in the pool, which is
            part of why two random picks in a row can feel so different from each other despite sharing the
            same genre tag.
          </p>

          <h2>Avoiding Spoilers Without Trying</h2>
          <p>
            One underrated benefit of generating a thriller at random rather than browsing is how little
            foreknowledge you go in with. Streaming platform browse pages often surface thumbnails,
            taglines, and sometimes even key plot beats through marketing imagery, which can unintentionally
            spoil a twist before you&rsquo;ve even started watching. A randomized pick, evaluated only
            through a brief plot overview rather than a trailer you may have already half-watched elsewhere,
            tends to preserve more of the experience the filmmakers intended.
          </p>

          <h2>Thrillers for Solo Nights vs. Group Viewing</h2>
          <p>
            Tense, twist-driven thrillers tend to work exceptionally well as solo viewing, where there&rsquo;s
            no one to discuss theories with mid-movie and the tension can build uninterrupted. In a group
            setting, thrillers can be just as rewarding, but expect — and maybe even encourage — pausing to
            debate theories partway through. Either way, the generator&rsquo;s job is the same: hand you a
            real option fast enough that you spend your evening actually watching the story unfold, not
            scrolling past twenty different conspiracy thrillers trying to guess which one is good.
          </p>

          <h2>The Overlap Between Thriller and Other Genres</h2>
          <p>
            Few genres overlap as heavily with others as thriller does. A crime thriller might also be
            tagged Action if it leans into physical set pieces, or Mystery if the plot centers on a puzzle
            to be solved rather than a threat to escape. A political thriller might share a Drama tag, and
            a supernatural thriller might brush up against Horror. This constant overlap is part of why the
            genre badges shown alongside every result are worth a quick glance — they tell you not just that
            a film is a thriller, but what kind of thriller experience to actually expect.
          </p>

          <h2>Building a Thriller Marathon</h2>
          <p>
            If one tense movie isn't enough, the thriller generator works particularly well for a themed
            marathon night. Because the genre spans such different mechanisms for building suspense, lining
            up two or three generated picks back to back — a crime thriller followed by a psychological one,
            for instance — gives a marathon real variety instead of three films that all build tension in
            exactly the same way.
          </p>

          <h2>A Genre Built on Payoff</h2>
          <p>
            Thrillers live or die on their final act — a satisfying reveal can redeem a slower first half,
            while a weak ending can sour an otherwise tense build-up. Because a brief plot overview can only
            tell you so much about how well a film actually delivers on its setup, treating a randomly
            generated thriller as a genuine gamble — checking the rating as a rough proxy for how well it
            stuck the landing — is part of the fun rather than a flaw in the approach.
          </p>
        </div>
      </section>

      <div className="cta-banner">
        <h2>Ready for the Edge of Your Seat?</h2>
        <p>Generate a random thriller now and find out where the story goes.</p>
      </div>

      <section className="faq-section">
        <div className="eyebrow">FAQs</div>
        <h2 className="section-heading">Thriller Movie Generator — Common Questions</h2>
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
