// pages/random-horror-movie-generator.js
import { useState } from "react";
import Layout from "../components/Layout";
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
    q: "What counts as horror in this generator?",
    a: "We use TMDB's Horror genre tag (genre ID 27), covering slasher films, supernatural horror, psychological horror, found-footage movies, and horror-thriller hybrids.",
  },
  {
    q: "Will I get extremely graphic or disturbing films?",
    a: "The pool draws from broadly popular, well-rated horror titles on TMDB rather than obscure extreme-horror titles, so most results lean toward mainstream and critically recognized horror rather than the most graphic fringes of the genre.",
  },
  {
    q: "Can I get a horror-comedy or horror-thriller?",
    a: "Yes. Many horror films carry secondary genre tags — you'll occasionally see results also labeled Comedy, Mystery, or Thriller, reflecting horror's frequent genre-blending.",
  },
  {
    q: "Is this generator good for finding new horror movies I haven't seen?",
    a: "Yes — because the pick is genuinely random within a large pool, it regularly surfaces well-reviewed horror films that don't always show up at the top of a streaming platform's horror category.",
  },
  {
    q: "What if I want something less intense than what I get?",
    a: "Just click Generate Again. Horror covers a huge tonal range from slow-burn psychological dread to fast-paced slashers, so a re-roll can land you somewhere very different in intensity.",
  },
];

export default function HorrorMoviePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const title = "Random Horror Movie Generator — Discover Scary Movies Instantly";
  const description =
    "Find your next scary movie with our Random Horror Movie Generator. Get random horror films with posters, ratings, trailers and IMDb links — completely free.";
  const path = "/random-horror-movie-generator";

  const schemas = [
    webPageSchema({ title, description, path }),
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Random Horror Movie Generator", href: path },
    ]),
    faqSchema(FAQS),
    softwareApplicationSchema({ name: "Random Horror Movie Generator", description, path }),
  ];

  return (
    <Layout breadcrumb={[{ label: "Home", href: "/" }, { label: "Horror Movie Generator" }]}>
      <Seo
        title={title}
        description={description}
        keywords="random horror movie generator, scary movie generator, horror movie picker, what horror movie should i watch"
        path={path}
        schemas={schemas}
      />

      <CinematicBackground variant="horror" />

      <div className="tool-page-bg-wrap">
        <div className="page-hero">
          <span className="genre-chip">🎃 Horror</span>
          <h1>Random Horror Movie Generator</h1>
          <p className="lede">
            Dare to generate? Get a random horror movie instantly — poster, rating, trailer, and IMDb link
            included, no scrolling through jump-scare thumbnails required.
          </p>
        </div>

        <MovieTool genreId={27} genreName="Horror" />

        <section className="feature-showcase">
          <div className="eyebrow">Built for Horror Fans</div>
          <h2 className="section-heading">Filter Horror by the Scare You Actually Want</h2>
          <p className="section-sub">
            Combine genre with era, language, rating, runtime, and mood using the Advanced Filters above.
          </p>

          <div className="feature-row">
            <div className="feature-row-media">
              <img
                src="https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=700&q=80"
                alt="Dark eerie hallway representing dark and intense horror mood filtering"
                loading="lazy"
              />
            </div>
            <div className="feature-row-text">
              <span className="feature-row-tag">Mood: Dark &amp; Intense</span>
              <h3>For when you want genuine dread, not jump scares</h3>
              <p>
                Set Mood to <strong>Dark &amp; Intense</strong> to weight results toward heavier
                psychological horror and crime-adjacent thrillers rather than lighter horror-comedy hybrids.
              </p>
            </div>
          </div>

          <div className="feature-row feature-row--reverse">
            <div className="feature-row-media">
              <img
                src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=700&q=80"
                alt="International horror cinema poster wall representing the language filter"
                loading="lazy"
              />
            </div>
            <div className="feature-row-text">
              <span className="feature-row-tag">Language Filter</span>
              <h3>Japanese and Korean horror hit differently</h3>
              <p>
                Some of horror's most acclaimed films come from outside Hollywood. Set Language to Japanese
                or Korean to surface internationally celebrated horror you might otherwise miss entirely.
              </p>
            </div>
          </div>

          <div className="feature-row">
            <div className="feature-row-media">
              <img
                src="https://images.unsplash.com/photo-1487700160041-babef9c3cb55?w=700&q=80"
                alt="Vintage horror film clock representing runtime filtering for horror movies"
                loading="lazy"
              />
            </div>
            <div className="feature-row-text">
              <span className="feature-row-tag">Runtime Filter</span>
              <h3>A tight 85-minute slasher or a slow-burn two-hour dread</h3>
              <p>
                Horror runtimes vary wildly by subgenre. Set Runtime to <strong>Short</strong> for fast,
                efficient scares or <strong>Long</strong> for the kind of slow-building psychological horror
                that needs room to breathe.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
        <h2 className="section-heading" style={{ fontSize: "2rem" }}>
          Find Your Next Scare Without the Endless Scroll
        </h2>
        <div className="content-body">
          <p>
            Horror is one of the most polarizing genres to browse for — partly because the category covers
            an enormous range, from quiet, atmospheric dread to relentless slasher gore, and partly because
            streaming platforms tend to bury their best horror titles under a wall of low-budget filler. The{" "}
            <strong>Random Horror Movie Generator</strong> skips the browsing entirely. One click pulls a
            real horror film from TMDB&rsquo;s catalog — complete with poster, audience rating, runtime, and
            a trailer link — so you can decide in seconds whether tonight calls for a slow-burn psychological
            thriller or a fast-paced creature feature.
          </p>

          <h2>Why Horror Fans Struggle to Pick a Movie</h2>
          <p>
            Ask ten horror fans what makes a movie scary and you&rsquo;ll get ten different answers. Some
            want supernatural dread, others want visceral slasher violence, and others want the kind of
            slow psychological unraveling that lingers for days. Streaming platforms rarely distinguish
            between these subgenres in their browsing categories, which means searching &ldquo;horror&rdquo;
            often surfaces a chaotic mix of tones with no easy way to filter for the specific kind of scare
            you&rsquo;re after. Randomizing the choice removes that friction — instead of trying to guess
            which subgenre a thumbnail represents, you get the full plot summary and rating up front.
          </p>

          <h2>How We Choose Horror Movies</h2>
          <p>
            Every pick comes from TMDB&rsquo;s Horror genre tag (genre ID 27), filtered to titles with a
            healthy number of audience votes so the poster, summary, and rating data are reliably complete.
            This naturally biases toward more widely seen and reviewed horror films rather than the most
            obscure micro-budget entries, which means you&rsquo;re more likely to land on something with a
            genuine reputation — good or so-bad-it&rsquo;s-good — rather than an unknown title with zero
            context.
          </p>

          <h2>Everything You Get With Each Horror Pick</h2>
          <ul>
            <li><strong>Poster and title</strong> for instant recognition or curiosity.</li>
            <li><strong>Release year and runtime</strong> so you can plan your evening (and your nerves) accordingly.</li>
            <li><strong>Star rating</strong> from real aggregated audience scores.</li>
            <li><strong>Genre badges</strong> revealing if it&rsquo;s also tagged Thriller, Mystery, or even Comedy — horror crosses over often.</li>
            <li><strong>A plot overview</strong> so you know the premise before the lights go off.</li>
            <li><strong>Trailer and IMDb links</strong> to gauge intensity before committing.</li>
          </ul>

          <h2>Great for Late-Night Solo Watches or Horror Movie Marathons</h2>
          <p>
            Whether you&rsquo;re settling in alone for a late-night scare or running a horror marathon with
            friends, the generator works the same way: hit generate, evaluate the pick using the rating and
            summary, and either commit or roll again. It&rsquo;s a fast way to build out a marathon lineup
            without spending more time choosing movies than actually watching them.
          </p>

          <h2>Save the Ones That Look Promising</h2>
          <p>
            If a result looks genuinely unsettling but you&rsquo;re not ready for it tonight, click{" "}
            <strong>Add to Watchlist</strong> to save it locally in your browser. It&rsquo;ll be waiting for
            you on the <strong>Watchlist</strong> page the next time you&rsquo;re brave enough.
          </p>

          <h2>A Brief Tour of Horror's Many Subgenres</h2>
          <p>
            Horror has fragmented into more distinct subgenres than almost any other category in film.
            Slasher films built around a recurring masked killer dominated the late 1970s through the
            &rsquo;90s. Supernatural and haunted-house horror has remained a constant across every decade.
            Found-footage horror exploded in popularity in the 2000s, trading production polish for a sense
            of unsettling realism. More recently, &ldquo;elevated horror&rdquo; — slower, more
            character-driven films that use dread and grief as much as jump scares — has become one of the
            genre&rsquo;s most critically respected lanes. A randomized pick from TMDB&rsquo;s Horror tag can
            land anywhere across this spectrum, which is part of what makes generating a few times in a row
            such an interesting way to sample the breadth of the genre.
          </p>

          <h2>Setting the Right Mood Before You Generate</h2>
          <p>
            Horror is one of the few genres where the viewing environment meaningfully changes the
            experience. A film that feels only mildly tense in a bright living room with friends can feel
            considerably more effective alone, at night, with the lights off. Before generating, it&rsquo;s
            worth being honest with yourself about which experience you&rsquo;re actually looking for
            tonight — a fun, social scare with friends, or a genuinely unsettling solo watch — since that
            will shape how you react to whatever subgenre the generator happens to surface.
          </p>

          <h2>Re-Rolling Without Guilt</h2>
          <p>
            Because horror covers such an enormous tonal range, it&rsquo;s entirely normal to re-roll
            several times before landing on something that matches your specific appetite for fear that
            night. Use the plot overview and rating as your filter: a high vote count alongside a
            premise that sounds like exactly your kind of scary is generally a strong signal to commit,
            while a premise that sounds like the wrong flavor of horror for tonight is a perfectly good
            reason to click <strong>Generate Again</strong>.
          </p>

          <h2>A Reminder About Content Sensitivity</h2>
          <p>
            Because horror as a genre tag spans everything from family-friendly Halloween fare to intense,
            graphic psychological horror, the plot overview and rating shown with every result are worth
            reading carefully if you or anyone watching with you is sensitive to particular themes. The
            generator surfaces broadly popular, well-rated titles from TMDB&rsquo;s catalog, but it does not
            apply content warnings beyond what's visible in the overview itself, so a quick read before
            committing is always worthwhile.
          </p>

          <h2>Horror's Enduring Popularity</h2>
          <p>
            Despite — or perhaps because of — its intensity, horror remains one of the most consistently
            profitable and widely watched genres across generations of filmmaking. Part of the appeal seems
            to be controlled, voluntary fear: a safe way to experience adrenaline and tension from the
            comfort of your own home. That enduring appeal is exactly why this generator dedicates a full
            page to the genre rather than folding it into a single catch-all randomizer, and why re-rolling
            until you find the right flavor of scary is considered a feature, not a workaround.
          </p>
        </div>
      </section>

      <div className="cta-banner">
        <h2>Ready to Be Scared?</h2>
        <p>Generate a random horror movie now — if you dare.</p>
      </div>

      <section className="faq-section">
        <div className="eyebrow">FAQs</div>
        <h2 className="section-heading">Horror Movie Generator — Common Questions</h2>
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
      </div>
    </Layout>
  );
}
