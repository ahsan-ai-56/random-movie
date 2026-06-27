// pages/random-comedy-movie-generator.js
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
    q: "What kind of comedies show up in this generator?",
    a: "We pull from TMDB's Comedy genre tag (genre ID 35), which spans romantic comedies, slapstick, dark comedy, parody, and comedic dramas — basically any film built primarily around making you laugh.",
  },
  {
    q: "Can I get a comedy that's also a romance or an animated film?",
    a: "Yes. Lots of comedies carry overlapping tags — romantic comedies, animated comedies, and comedic thrillers all show up here, and the genre badges on each result show every category the film belongs to.",
  },
  {
    q: "Will I get only recent comedies, or classics too?",
    a: "Both. The pool draws from comedies across different eras, filtered only by having enough audience votes to ensure reliable data, so you'll see a mix of newer hits and well-loved older titles.",
  },
  {
    q: "What if the movie I get isn't actually funny to me?",
    a: "Comedy is famously subjective. If a pick doesn't land for you, just hit Generate Again — the randomization means your next pick could be a completely different style of humor.",
  },
  {
    q: "Can I save a comedy to watch later instead of right now?",
    a: "Yes. Click Add to Watchlist on any result and it's saved locally in your browser, ready for you on the Watchlist page whenever you're in the mood.",
  },
];

export default function ComedyMoviePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const title = "Random Comedy Movie Generator — Find a Funny Film to Watch Right Now";
  const description =
    "Can't decide what comedy to watch? Our Random Comedy Movie Generator picks a hilarious film for you instantly with ratings, trailers and IMDb links.";
  const path = "/random-comedy-movie-generator";

  const schemas = [
    webPageSchema({ title, description, path }),
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Random Comedy Movie Generator", href: path },
    ]),
    faqSchema(FAQS),
    softwareApplicationSchema({ name: "Random Comedy Movie Generator", description, path }),
  ];

  return (
    <Layout breadcrumb={[{ label: "Home", href: "/" }, { label: "Comedy Movie Generator" }]}>
      <Seo
        title={title}
        description={description}
        keywords="random comedy movie generator, funny movie generator, comedy movie picker, what comedy should i watch"
        path={path}
        schemas={schemas}
      />

      <div className="page-hero">
        <span className="genre-chip">😂 Comedy</span>
        <h1>Random Comedy Movie Generator</h1>
        <p className="lede">
          Need a laugh? Generate a random comedy instantly and get a film, its rating, trailer, and IMDb
          link in less time than it takes to argue about what to watch.
        </p>
      </div>

      <MovieTool genreId={35} genreName="Comedy" />

      <section className="content-section">
        <h2 className="section-heading" style={{ fontSize: "2rem" }}>
          Stop Scrolling Through Comedies — Just Generate One
        </h2>
        <div className="content-body">
          <p>
            Comedy is, statistically, one of the most-watched genres on every streaming platform — and also
            one of the hardest to browse. Unlike a thriller or horror movie, where the tone is fairly
            predictable, comedy ranges from gentle, wholesome humor to dark, cringe-heavy satire, which means
            two people searching for &ldquo;a funny movie&rdquo; might mean completely different things. The{" "}
            <strong>Random Comedy Movie Generator</strong> sidesteps the endless scroll entirely: one click
            pulls a real comedy from TMDB&rsquo;s catalog, complete with its poster, audience rating, runtime,
            and a direct trailer link, so you can judge in seconds whether it&rsquo;s your kind of funny.
          </p>

          <h2>Why Comedy Is Uniquely Hard to Browse For</h2>
          <p>
            Most streaming apps group every comedy into one giant bucket regardless of style, tone, or era.
            That means a search for comedy might surface a slapstick family film right next to a biting
            political satire, with no easy way to tell which is which until you&rsquo;ve already clicked in
            and watched the first few minutes. Add in the fact that humor is deeply personal — what makes
            one person howl with laughter can leave another person stone-faced — and it&rsquo;s no surprise
            that comedy night often turns into a half-hour negotiation before anyone presses play.
          </p>

          <h2>How the Generator Selects Comedies</h2>
          <p>
            Every result comes directly from TMDB&rsquo;s Comedy genre tag (genre ID 35), filtered to titles
            with enough audience votes that the data — poster, plot summary, rating — is reliably complete.
            Within that pool, the pick is fully randomized, which means you might land on a beloved
            mainstream rom-com one moment and a cult-favorite dark comedy the next. That unpredictability is
            the point: it&rsquo;s closer to channel-surfing than algorithmic recommendation, and it often
            surfaces films you wouldn&rsquo;t have searched for on your own.
          </p>

          <h2>What You'll See With Every Comedy Pick</h2>
          <ul>
            <li><strong>Poster and title</strong> for instant recognition.</li>
            <li><strong>Release year and runtime</strong> so you know what you&rsquo;re committing to.</li>
            <li><strong>Star rating</strong> built from real aggregated audience scores.</li>
            <li><strong>Genre badges</strong> showing if it&rsquo;s also tagged Romance, Family, or Drama — useful context for comedies that blend tones.</li>
            <li><strong>A short plot overview</strong> so you can gauge the premise and humor style.</li>
            <li><strong>Trailer and IMDb links</strong> to preview the tone before committing.</li>
          </ul>

          <h2>Perfect for Group Movie Nights</h2>
          <p>
            Comedy is one of the most commonly chosen genres for group movie nights precisely because
            it&rsquo;s low-commitment and widely appealing — but agreeing on which specific comedy can still
            eat up your whole evening. Letting the generator make the call removes the back-and-forth
            entirely: hit generate, see what comes up, and either commit or roll again until something
            clicks for the room.
          </p>

          <h2>Build a Comedy Watchlist Over Time</h2>
          <p>
            Every time you land on something promising but aren&rsquo;t ready to watch immediately, hit{" "}
            <strong>Add to Watchlist</strong>. It&rsquo;s saved locally in your browser, no account needed,
            and waiting for you on the <strong>Watchlist</strong> page next time you&rsquo;re in the mood for
            something light.
          </p>

          <h2>The Many Shades of Comedy</h2>
          <p>
            Comedy as a genre has splintered into dozens of recognizable substyles over the decades — the
            screwball comedies of the 1930s and &rsquo;40s, the gross-out comedies of the &rsquo;90s and
            2000s, the mockumentary style popularized by shows and films alike, and the increasingly common
            blend of comedy with drama sometimes called &ldquo;dramedy.&rdquo; Romantic comedies form their
            own enormous subcategory, often overlapping heavily with the Romance genre tag. This sheer
            variety is part of why a single &ldquo;comedy&rdquo; search on a streaming platform can feel so
            unfocused, and why a randomized approach — paired with the plot summary and genre badges shown
            on every result here — tends to surface the actual tone of a film faster than a thumbnail ever
            could.
          </p>

          <h2>When a Comedy Pick Doesn't Land</h2>
          <p>
            Because humor is so personal, it&rsquo;s worth normalizing the idea that not every random comedy
            pick will make you laugh — and that&rsquo;s fine. Rather than treating a miss as a failed
            recommendation, treat it as useful information: if a particular style of humor doesn&rsquo;t
            land, the plot overview and genre badges on the next pick will usually give you enough signal to
            decide quickly whether to commit or roll again. Most people find that within two or three
            generations, something clicks.
          </p>

          <h2>Comedy as a Social Genre</h2>
          <p>
            More than almost any other genre, comedy tends to be watched socially — with roommates, family,
            or on a first date where a serious drama might feel like too much too soon. That social context
            is part of why removing the friction of choosing matters so much here: a group deciding on a
            comedy together benefits enormously from having one concrete option in front of them to react to,
            rather than five abstract options to debate. Generate one, see how the room reacts to the poster
            and premise, and either commit together or roll again.
          </p>

          <h2>Comedy Doesn't Need a Special Occasion</h2>
          <p>
            Unlike genres that often get reserved for a deliberate mood — horror for a spooky night,
            documentary for a curious one — comedy tends to work as a default for almost any ordinary
            evening. That makes it a great genre to keep in your back pocket specifically for nights when
            you don't have a strong preference either way and just want something easy, low-stakes, and
            reliably entertaining without much risk of regretting the choice afterward.
          </p>

          <h2>A Few Words on Comedy and Rewatchability</h2>
          <p>
            Comedies are also, statistically, among the most frequently rewatched films across almost every
            audience — a good joke often lands just as well the third or fourth time, in a way that a
            thriller's twist or a horror movie's jump scare generally doesn't. If a randomly generated comedy
            turns out to be something you've already seen, it's worth treating that as a perfectly reasonable
            outcome rather than a wasted generation; comfort rewatches are one of the most common and
            satisfying ways people actually use this genre.
          </p>
        </div>
      </section>

      <div className="cta-banner">
        <h2>Ready to Laugh?</h2>
        <p>Generate a random comedy now and find out what's funny tonight.</p>
      </div>

      <section className="faq-section">
        <div className="eyebrow">FAQs</div>
        <h2 className="section-heading">Comedy Movie Generator — Common Questions</h2>
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
