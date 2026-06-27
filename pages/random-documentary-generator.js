// pages/random-documentary-generator.js
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
    q: "What topics can I expect from this generator?",
    a: "We use TMDB's Documentary genre tag (genre ID 99), which covers nature and wildlife documentaries, true crime, biographical documentaries, historical films, music documentaries, and science and tech deep dives.",
  },
  {
    q: "Will I get documentary films or documentary TV series?",
    a: "This generator pulls from TMDB's movie database specifically, so every result is a feature-length documentary film, not a TV series or limited series.",
  },
  {
    q: "Can a documentary also be tagged as history or music?",
    a: "Yes. Many documentaries carry a secondary tag like History, Music, or War depending on subject matter, and the genre badges on each result show every category a film belongs to.",
  },
  {
    q: "Is this a good way to find lesser-known documentaries?",
    a: "Yes — because the pick is genuinely random within a broad pool rather than sorted by what's trending, you'll often surface acclaimed documentaries that don't get much visibility on mainstream streaming homepages.",
  },
  {
    q: "Can I save a documentary to watch later?",
    a: "Yes. Click Add to Watchlist on any result to save it locally in your browser for whenever you're in the mood to learn something new.",
  },
];

export default function DocumentaryPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const title = "Random Documentary Generator — Discover Fascinating Documentaries Instantly";
  const description =
    "Explore real stories with our Random Documentary Generator. Discover random documentaries with posters, ratings, trailers and IMDb links — completely free.";
  const path = "/random-documentary-generator";

  const schemas = [
    webPageSchema({ title, description, path }),
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Random Documentary Generator", href: path },
    ]),
    faqSchema(FAQS),
    softwareApplicationSchema({ name: "Random Documentary Generator", description, path }),
  ];

  return (
    <Layout breadcrumb={[{ label: "Home", href: "/" }, { label: "Documentary Generator" }]}>
      <Seo
        title={title}
        description={description}
        keywords="random documentary generator, documentary movie generator, documentary picker, what documentary should i watch"
        path={path}
        schemas={schemas}
      />

      <div className="page-hero">
        <span className="genre-chip">🎥 Documentary</span>
        <h1>Random Documentary Generator</h1>
        <p className="lede">
          True stories, real history, and fascinating subjects — generate a random documentary instantly
          and discover something worth learning about tonight.
        </p>
      </div>

      <MovieTool genreId={99} genreName="Documentary" />

      <section className="content-section">
        <h2 className="section-heading" style={{ fontSize: "2rem" }}>
          Discover Documentaries Worth Your Time, Instantly
        </h2>
        <div className="content-body">
          <p>
            Documentaries have a unique browsing problem: the genre covers everything from sweeping nature
            cinematography to gritty true crime investigations to intimate music biographies, yet most
            streaming platforms bury them in a single, sparsely updated category. If you&rsquo;re in the
            mood to learn something but don&rsquo;t have a specific topic in mind, scrolling through a
            documentary section can feel more like research than relaxation. The{" "}
            <strong>Random Documentary Generator</strong> removes that friction — one click surfaces a real
            documentary film with its poster, audience rating, runtime, and plot summary, so you can decide
            in seconds whether tonight&rsquo;s subject is wildlife, history, true crime, or something else
            entirely.
          </p>

          <h2>Why Documentaries Deserve Their Own Generator</h2>
          <p>
            Unlike fictional genres, documentaries are defined by their subject matter rather than their
            tone, which means the category spans an enormous range of topics: space exploration, organized
            crime, endangered species, music history, political scandals, and deeply personal biographical
            portraits, to name just a few. That breadth makes documentaries one of the most rewarding genres
            to randomize, since you&rsquo;re not just picking a film — you&rsquo;re potentially picking an
            entire subject you knew nothing about an hour ago.
          </p>

          <h2>How We Select Documentaries</h2>
          <p>
            Every result is pulled from TMDB&rsquo;s Documentary genre tag (genre ID 99), filtered to titles
            with enough audience votes that the poster, rating, and summary data are reliable. Within that
            pool, the selection is fully randomized, meaning your next click could surface a celebrated
            nature documentary or a deep dive into a niche historical event with equal probability.
          </p>

          <h2>What's Included With Each Documentary Pick</h2>
          <ul>
            <li><strong>Poster and title</strong> for instant context.</li>
            <li><strong>Release year and runtime</strong> so you can plan your evening.</li>
            <li><strong>Star rating</strong> from real aggregated audience scores.</li>
            <li><strong>Genre badges</strong> showing crossover tags like History, Music, or War.</li>
            <li><strong>A plot overview</strong> summarizing the subject and angle of the documentary.</li>
            <li><strong>Trailer and IMDb links</strong> to preview the film before committing.</li>
          </ul>

          <h2>A Genuinely Useful Discovery Tool</h2>
          <p>
            Because documentary subjects are so varied, this generator works less like a tie-breaker and
            more like a genuine discovery engine. If you regularly find yourself wanting to learn something
            new but don&rsquo;t know where to start, a few rounds of random generation will usually surface
            a subject you didn&rsquo;t know you were interested in — that&rsquo;s part of what makes
            documentaries such a rewarding genre to randomize in the first place.
          </p>

          <h2>Save Interesting Topics for Later</h2>
          <p>
            If a documentary&rsquo;s subject catches your interest but you&rsquo;re not ready to dive in
            right now, click <strong>Add to Watchlist</strong> to save it locally in your browser. It will
            be waiting on your <strong>Watchlist</strong> page whenever you&rsquo;re ready to learn
            something new.
          </p>

          <h2>The Range of Documentary Storytelling Styles</h2>
          <p>
            Documentaries aren&rsquo;t a single storytelling style any more than fiction films are. Some
            rely on observational footage with little to no narration, letting events unfold without
            commentary. Others are built almost entirely around interviews, weaving together first-person
            testimony to reconstruct a story. Many use a traditional narrator to guide viewers through
            historical or scientific subject matter, while a growing number borrow techniques from thrillers
            — recreations, suspenseful editing, even score work — to tell true stories with a more
            cinematic, propulsive feel. A randomized pick from TMDB&rsquo;s Documentary tag can land on any
            of these approaches, which is part of what makes generating a few times in a row feel like
            flipping through different ways of telling the truth, not just different topics.
          </p>

          <h2>Why Documentaries Make Great Conversation Starters</h2>
          <p>
            Unlike most fictional genres, a documentary almost always leaves you with something concrete to
            talk about afterward — a historical event you didn&rsquo;t know much about, a scientific
            question you&rsquo;re now curious to research further, or a person whose story stuck with you.
            That makes the genre particularly well-suited to watching with another person or a small group:
            even if the film itself doesn&rsquo;t fully land for everyone, the subject matter usually
            sparks a conversation that a randomly chosen comedy or thriller rarely does in the same way.
          </p>

          <h2>Treating the Generator as a Reading List, Not Just a Watchlist</h2>
          <p>
            Because documentary subjects are so varied, it&rsquo;s worth treating a few generated results
            less like a queue of things to watch and more like a reading list of topics worth knowing about.
            If a subject grabs you but the specific film doesn&rsquo;t feel like the right fit tonight,
            saving it to your watchlist and coming back later — possibly after looking up a bit more about
            the subject first — often makes for a richer viewing experience than watching it cold.
          </p>

          <h2>Documentaries Don't Require a Specific Mood</h2>
          <p>
            Unlike horror or romance, which usually call for a particular emotional headspace, documentaries
            work in almost any mood as long as curiosity is somewhere in the mix. That makes this generator
            a good default for those evenings when you genuinely don't know what you want to watch but know
            you'd rather come away having learned something than having simply passed the time. A few rounds
            of generation, evaluated mostly by which subject sounds most interesting in the moment, usually
            gets you there fast.
          </p>

          <h2>Pairing Documentaries With Further Reading</h2>
          <p>
            One of the most rewarding ways to use this generator is as a starting point rather than an
            endpoint. A documentary that sparks real interest in a subject — a historical event, a scientific
            field, a person's life story — is often just the beginning. Following up with a book, an article,
            or even just a deeper search afterward turns a single random pick into the start of an ongoing
            interest, which is part of why documentary fans often describe the genre as more habit-forming
            than any other.
          </p>

          <h2>A Genre Without a Wasted Generation</h2>
          <p>
            Unlike fiction genres where a poor match can feel like a missed evening, even a documentary
            that doesn't fully grab you usually leaves you knowing at least one new fact you didn't have
            before. That low floor — the worst-case outcome is still mildly informative — makes the
            Documentary generator one of the lowest-risk ways to spend a generation, and a good one to reach
            for whenever you're not sure what else to pick.
          </p>
        </div>
      </section>

      <div className="cta-banner">
        <h2>Curious About Something New?</h2>
        <p>Generate a random documentary now and discover a story worth knowing.</p>
      </div>

      <section className="faq-section">
        <div className="eyebrow">FAQs</div>
        <h2 className="section-heading">Documentary Generator — Common Questions</h2>
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
