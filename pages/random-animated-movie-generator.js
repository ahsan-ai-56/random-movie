// pages/random-animated-movie-generator.js
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
    q: "Is this generator only for kids' movies?",
    a: "No. We use TMDB's Animation genre tag (genre ID 16), which includes family-friendly animated films as well as animated dramas, anime films, and adult-oriented animated movies — animation as a medium, not a specific age rating.",
  },
  {
    q: "Will I get anime movies in this generator?",
    a: "Yes, anime films tagged as Animation on TMDB are part of the pool, alongside Western animated features from major and independent studios.",
  },
  {
    q: "Can an animated movie also be tagged as comedy or family?",
    a: "Yes. Most animated films carry a second tag like Family, Comedy, Adventure, or Fantasy, and the genre badges on each result show every category a title belongs to.",
  },
  {
    q: "Is this a good way to find animated movies for family movie night?",
    a: "Yes, though since the pool includes animated films of all tones, it's worth checking the overview and genre badges first if you specifically need something appropriate for young children.",
  },
  {
    q: "Can I save an animated pick for later?",
    a: "Yes. Click Add to Watchlist on any result to save it locally in your browser for next time.",
  },
];

export default function AnimatedMoviePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const title = "Random Animated Movie Generator — Discover Cartoons & Animated Films Instantly";
  const description =
    "Find your next animated film with our free Random Animated Movie Generator. Get random animated movies with posters, ratings, trailers and IMDb links. ";
  const path = "/random-animated-movie-generator";

  const schemas = [
    webPageSchema({ title, description, path }),
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Random Animated Movie Generator", href: path },
    ]),
    faqSchema(FAQS),
    softwareApplicationSchema({ name: "Random Animated Movie Generator", description, path }),
  ];

  return (
    <Layout breadcrumb={[{ label: "Home", href: "/" }, { label: "Animated Movie Generator" }]}>
      <Seo
        title={title}
        description={description}
        keywords="random animated movie generator, random cartoon generator, animated movie picker, what animated movie should i watch"
        path={path}
        schemas={schemas}
      />

      <div className="page-hero">
        <span className="genre-chip">🎨 Animated</span>
        <h1>Random Animated Movie Generator</h1>
        <p className="lede">
          From beloved studio classics to acclaimed anime — generate a random animated movie instantly and
          discover something new for the whole family, or just yourself.
        </p>
      </div>

      <MovieTool genreId={16} genreName="Animated" />

      <section className="content-section">
        <h2 className="section-heading" style={{ fontSize: "2rem" }}>
          Discover Animated Films Beyond the Usual Suggestions
        </h2>
        <div className="content-body">
          <p>
            Animation is often treated as a single, narrow category — &ldquo;movies for kids&rdquo; — when
            in reality it&rsquo;s one of the most diverse mediums in film, spanning whimsical family
            adventures, sophisticated anime dramas, stop-motion craftsmanship, and animated films made
            explicitly for adult audiences. The <strong>Random Animated Movie Generator</strong> treats
            animation as the broad medium it actually is, pulling from TMDB&rsquo;s full Animation tag and
            handing you a real film instantly, with its poster, rating, runtime, and plot summary, so you
            can judge tone and audience fit before committing.
          </p>

          <h2>Animation Is a Medium, Not Just a Genre for Kids</h2>
          <p>
            Some of the most acclaimed films of the last few decades happen to be animated — atmospheric
            anime dramas, beautifully crafted stop-motion features, and visually inventive adult animated
            films that have nothing to do with a children&rsquo;s audience. Yet most streaming platforms
            still file all animation under a kids-and-family umbrella, making it harder to stumble onto the
            more mature or artistically ambitious side of the medium. This generator pulls from the full
            tag, so the result might be a beloved family classic or a critically acclaimed adult animated
            drama — the plot overview and genre badges will tell you which.
          </p>

          <h2>How We Select Animated Movies</h2>
          <p>
            Every pick comes directly from TMDB&rsquo;s Animation genre tag (genre ID 16), filtered to titles
            with enough audience votes for reliable poster and summary data. Within that pool, selection is
            fully randomized, so you&rsquo;ll see a healthy mix of mainstream studio releases, beloved anime
            features, and animated films from smaller studios around the world.
          </p>

          <h2>What's Included With Every Pick</h2>
          <ul>
            <li><strong>Poster and title</strong> for instant recognition.</li>
            <li><strong>Release year and runtime</strong> to plan your watch.</li>
            <li><strong>Star rating</strong> from real audience votes.</li>
            <li><strong>Genre badges</strong> showing if it's also Family, Comedy, Fantasy, or Drama — useful for gauging audience fit.</li>
            <li><strong>A plot overview</strong> so you can judge the premise and tone quickly.</li>
            <li><strong>Trailer and IMDb links</strong> to preview the animation style before watching.</li>
          </ul>

          <h2>Great for Family Movie Night — With a Quick Check First</h2>
          <p>
            Because the Animation pool spans every audience rating, we&rsquo;d recommend a quick glance at
            the plot overview and genre badges before queuing something up for young kids specifically. For
            everyone else — solo viewers, animation enthusiasts, or families with older kids — the generator
            is a fast, fun way to surface something new across the full range of animated cinema.
          </p>

          <h2>Save Your Favorites</h2>
          <p>
            If a pick looks great but the timing&rsquo;s not right, click <strong>Add to Watchlist</strong>{" "}
            to save it locally in your browser, ready for movie night whenever you are.
          </p>

          <h2>Animation Techniques Worth Knowing About</h2>
          <p>
            The Animation tag on TMDB covers films made through wildly different production techniques —
            traditional hand-drawn cel animation, modern 3D computer animation, stop-motion films built frame
            by frame with physical puppets and sets, and increasingly, hybrid styles that blend hand-drawn
            aesthetics with digital tools. Anime, largely produced in Japan with its own distinct visual and
            storytelling conventions, makes up a significant portion of the pool as well. Each technique
            tends to carry its own pacing and visual rhythm, which is part of why two randomly generated
            animated films can feel like they belong to entirely different mediums despite sharing a genre
            tag.
          </p>

          <h2>Animation for Adults Is More Common Than You Might Think</h2>
          <p>
            While animation is still culturally associated with children&rsquo;s content in a lot of
            marketing, a substantial and growing portion of acclaimed animated film is made explicitly for
            adult audiences — exploring war, grief, political upheaval, and complex relationships with the
            same seriousness as any live-action drama. If a randomly generated pick comes back with a more
            mature plot summary than expected, that&rsquo;s the medium working as intended, not a mistake in
            the generator.
          </p>

          <h2>A Quick Pre-Screening Habit for Family Viewing</h2>
          <p>
            If you're specifically queuing something up for young children, a simple habit helps: read the
            plot overview and check the genre badges before pressing play, rather than assuming
            &ldquo;animated&rdquo; alone guarantees age-appropriateness. This takes only a few seconds and
            ensures the spontaneity of the random generator doesn&rsquo;t come at the cost of an awkward
            surprise five minutes into family movie night.
          </p>

          <h2>Animation's Reputation Is Changing</h2>
          <p>
            Critical and award-show recognition for animated film has grown substantially over the past
            couple of decades, with animated features increasingly recognized alongside live-action films
            rather than confined to a separate, lesser category. That shift reflects something this
            generator embraces by design: animation is a medium capable of telling any kind of story, in any
            tone, for any audience, and treating it that way — rather than as a single narrow genre for
            children — opens up a much richer pool of films to discover.
          </p>

          <h2>Why Animated Films Reward Repeat Viewing</h2>
          <p>
            Many animated films, particularly those aimed at a broad family audience, are deliberately
            layered to work on multiple levels — simpler jokes and visuals for younger viewers, sharper
            references and emotional depth for older ones. That makes the genre a particularly good fit for
            repeat viewing, and a randomly generated pick you watch once with the family might be worth
            generating again, deliberately this time, for a second watch with a different audience in mind.
          </p>

          <h2>An Easy Genre for Discovering International Cinema</h2>
          <p>
            Animation is also one of the more accessible entry points into international filmmaking, since
            visual storytelling often translates across language and culture more smoothly than
            dialogue-heavy live-action film. A randomly generated animated pick has a reasonable chance of
            introducing you to a studio, country, or visual tradition you hadn't encountered before — another
            reason this generator tends to function as much as a discovery tool as a decision-making
            shortcut.
          </p>
        </div>
      </section>

      <div className="cta-banner">
        <h2>Ready for Something Animated?</h2>
        <p>Generate a random animated movie now and see what comes up.</p>
      </div>

      <section className="faq-section">
        <div className="eyebrow">FAQs</div>
        <h2 className="section-heading">Animated Movie Generator — Common Questions</h2>
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
