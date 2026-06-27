// pages/random-action-movie-generator.js
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
    q: "What counts as an action movie in this generator?",
    a: "We use TMDB's Action genre tag (genre ID 28), which covers everything from high-octane heist films and war movies to martial arts pictures and superhero blockbusters — basically any film built around physical conflict, stunts, or large-scale set pieces.",
  },
  {
    q: "Will I only get big Hollywood blockbusters?",
    a: "No. The pool includes well-reviewed action films of all budgets and eras — from major studio tentpoles to acclaimed international action cinema — filtered only by having enough audience votes to ensure the data (poster, rating, runtime) is reliably complete.",
  },
  {
    q: "Can I get the same action movie twice in a row?",
    a: "It's possible but unlikely. Each click pulls from a large, randomized pool of popular action titles, so repeats are rare — and if you do land on a repeat, just click Generate Again for a fresh pick.",
  },
  {
    q: "Does the generator include action-comedy or action-thriller hybrids?",
    a: "Yes. Many action movies carry multiple genre tags, so you'll sometimes see a film that's also tagged Comedy or Thriller — these crossover picks are part of what makes the action genre so broad and fun to randomize.",
  },
  {
    q: "How do I find similar action movies if I liked the result?",
    a: "Scroll down after generating — every result includes a row of four similar action movies pulled directly from TMDB's recommendation data for that specific film, so you can keep exploring in the same vein.",
  },
];

export default function ActionMoviePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const title = "Random Action Movie Generator — Get a Random Action Film Instantly";
  const description =
    "Use our free Random Action Movie Generator to discover a new action film instantly. Get posters, ratings, trailers, and IMDb links with one click.";
  const path = "/random-action-movie-generator";

  const schemas = [
    webPageSchema({ title, description, path }),
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Random Action Movie Generator", href: path },
    ]),
    faqSchema(FAQS),
    softwareApplicationSchema({ name: "Random Action Movie Generator", description, path }),
  ];

  return (
    <Layout breadcrumb={[{ label: "Home", href: "/" }, { label: "Action Movie Generator" }]}>
      <Seo
        title={title}
        description={description}
        keywords="random action movie generator, random action film, action movie picker, what action movie should i watch"
        path={path}
        schemas={schemas}
      />

      <div className="page-hero">
        <span className="genre-chip">💥 Action</span>
        <h1>Random Action Movie Generator</h1>
        <p className="lede">
          Explosions, car chases, hand-to-hand combat, and high-stakes heists — generate a random action
          movie instantly and get straight to the adrenaline.
        </p>
      </div>

      <MovieTool genreId={28} genreName="Action" />

      <section className="content-section">
        <h2 className="section-heading" style={{ fontSize: "2rem" }}>
          Find Your Next Favorite Action Movie in One Click
        </h2>
        <div className="content-body">
          <p>
            Action movies occupy a strange place in film culture: they&rsquo;re some of the most-watched
            films ever made, yet picking which one to watch on any given night is surprisingly difficult.
            The genre spans decades of car chases, martial arts choreography, explosive set pieces, and
            globe-trotting heists, which means &ldquo;I want to watch an action movie&rdquo; can mean a
            dozen completely different things depending on your mood. The <strong>Random Action Movie
            Generator</strong> cuts through that by pulling a genuinely random title from a curated, highly
            rated pool of action films sourced from TMDB, instantly handing you a poster, rating, runtime,
            and trailer — no scrolling required.
          </p>

          <h2>What Makes the Action Genre So Hard to Choose From</h2>
          <p>
            Unlike more tightly defined genres, &ldquo;action&rdquo; is really an umbrella term. It covers
            war epics, spy thrillers, martial arts showcases, superhero blockbusters, disaster movies, and
            straightforward shoot-&rsquo;em-ups. That breadth is exactly why browsing an action category on
            a streaming platform can take forever — you might be in the mood for a stylish John Wick-style
            shootout one night and a slower-burn military thriller the next, and most apps don&rsquo;t
            differentiate well between the two. Our generator embraces that breadth rather than fighting it:
            every click can land you somewhere completely different within the genre, which is part of the
            fun.
          </p>

          <h2>How We Pick Action Movies</h2>
          <p>
            Every result is pulled live from TMDB&rsquo;s Action genre tag (genre ID 28), filtered to titles
            with a meaningful number of audience votes so you&rsquo;re not handed an obscure title with a
            broken poster or an empty plot summary. Within that filtered pool, the selection is genuinely
            random — we don&rsquo;t weight toward the newest releases or the most mainstream blockbusters,
            so you&rsquo;ll see a healthy mix of recent hits and respected action films from past decades.
          </p>

          <h2>Everything You Need to Decide in Seconds</h2>
          <ul>
            <li><strong>Poster and title</strong> so you immediately recognize the film, or get curious about one you haven&rsquo;t seen.</li>
            <li><strong>Release year and runtime</strong> so you can judge whether tonight&rsquo;s schedule has room for a two-and-a-half-hour epic or a tighter 90-minute thriller.</li>
            <li><strong>Star rating</strong> built from real audience votes, shown as an easy five-star scale.</li>
            <li><strong>Genre tags</strong> showing every category the film falls under — many action movies double up as Thriller, Adventure, or Sci-Fi.</li>
            <li><strong>Plot overview</strong> so you know the premise before committing.</li>
            <li><strong>Trailer and IMDb links</strong> for a quick gut-check before you press play.</li>
          </ul>

          <h2>Great For Solo Nights and Group Movie Picks</h2>
          <p>
            Action movies are one of the most commonly agreed-upon genres in group settings — almost
            everyone can get on board with a good action film, even if their taste differs on the specifics.
            That makes this generator especially useful when a group can&rsquo;t agree on what to watch:
            instead of debating for twenty minutes, hit generate, see what comes up, and decide together
            whether to keep it or roll again.
          </p>

          <h2>Save Your Favorites to Watch Later</h2>
          <p>
            If a result looks great but you&rsquo;re not ready to watch it tonight, hit{" "}
            <strong>Add to Watchlist</strong>. It&rsquo;s saved locally in your browser and waiting for you
            on the <strong>Watchlist</strong> page whenever you&rsquo;re ready, with no account or sign-up
            required.
          </p>

          <h2>The History of Action Cinema, in Brief</h2>
          <p>
            Action as a recognizable film genre really took shape in the 1970s and &rsquo;80s, when stars
            like Bruce Lee, Sylvester Stallone, and Arnold Schwarzenegger turned physical spectacle into a
            box office draw of its own, separate from war films or westerns that had carried similar energy
            decades earlier. The &rsquo;90s brought a wave of high-concept blockbusters that paired massive
            budgets with increasingly elaborate stunt work, while the 2000s and 2010s saw the genre absorb
            superhero cinema almost entirely, turning comic book adaptations into some of the highest-grossing
            action films of all time. More recently, action cinema has leaned into practical stunt work and
            genre throwbacks alongside its CGI-heavy blockbusters, giving today&rsquo;s pool of films an
            unusually wide stylistic range — which is exactly the kind of variety a random generator is
            built to surface.
          </p>

          <h2>What to Do If You Don't Like the First Pick</h2>
          <p>
            Not every random pick will match your exact mood, and that&rsquo;s by design — the goal
            isn&rsquo;t to guess perfectly on the first try, it&rsquo;s to remove the burden of comparing
            dozens of options yourself. If the first movie doesn&rsquo;t feel right, simply click{" "}
            <strong>Generate Again</strong>. There&rsquo;s no limit to how many times you can re-roll, and
            because the pool spans so many different eras and substyles of action filmmaking, a second or
            third click often lands somewhere noticeably different in tone, scale, or pacing from the first.
          </p>

          <h2>Pairing Action Movies With the Right Setting</h2>
          <p>
            Action films tend to reward a slightly more engaged viewing setup than, say, a documentary you
            might half-watch while doing something else. If possible, dim the lights, turn up the volume a
            little more than usual for dialogue-driven genres, and treat the runtime shown on your generated
            result as a genuine planning tool — a two-hour-plus action epic deserves a different time slot
            than a tight 95-minute popcorn thriller. Because the genre pulls from such a wide range of scope
            and intensity, checking the runtime and overview together before committing tends to produce a
            better match than judging by the poster alone.
          </p>

          <h2>Action Movies as the Default Crowd-Pleaser</h2>
          <p>
            If you're ever hosting a movie night for people whose individual tastes you don't know well —
            new coworkers, extended family, a mixed group of friends from different social circles — action
            is statistically one of the safest genres to default to. It rarely requires niche cultural
            context to follow, it rewards a big screen and loud speakers regardless of release year, and the
            broad pool behind this generator spans enough different substyles that a re-roll or two will
            usually find something with broad appeal even for a group with genuinely varied preferences.
          </p>
        </div>
      </section>

      <div className="cta-banner">
        <h2>Ready for Something Explosive?</h2>
        <p>Generate a random action movie now and get straight to the good part.</p>
      </div>

      <section className="faq-section">
        <div className="eyebrow">FAQs</div>
        <h2 className="section-heading">Action Movie Generator — Common Questions</h2>
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
