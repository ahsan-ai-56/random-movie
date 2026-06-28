// pages/about.js
import Link from "next/link";
import Layout from "../components/Layout";
import Seo, { breadcrumbSchema, webPageSchema, faqSchema } from "../components/Seo";

const FAQS = [
  {
    q: "Who built Random Movie Generator?",
    a: "Random Movie Generator is an independent project built by a small team of film fans who wanted a faster way to decide what to watch, without relying on algorithm-driven recommendation feeds.",
  },
  {
    q: "Is Random Movie Generator affiliated with TMDB, IMDb, or Netflix?",
    a: "No. We use TMDB's public API to source movie data, but we are not affiliated with, endorsed by, or officially connected to TMDB, IMDb, Netflix, or any streaming service.",
  },
  {
    q: "Do you plan to add more genres or features?",
    a: "Yes — we're continually looking at ways to expand the tool, including additional genre generators, improved filtering, and richer watchlist features, based on feedback from people using the site.",
  },
  {
    q: "How can I suggest a feature or report a bug?",
    a: "Visit our Contact page and send us a message. We read every submission and use it to prioritize what to build or fix next.",
  },
];

export default function About() {
  const title = "About Us — Random Movie Generator";
  const description =
    "Learn about Random Movie Generator — a free tool to help you discover great films across every genre instantly with ratings, trailers and IMDb links.";
  const path = "/about";

  const schemas = [
    webPageSchema({ title, description, path }),
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "About", href: path },
    ]),
    faqSchema(FAQS),
  ];

  return (
    <Layout breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}>
      <Seo
        title={title}
        description={description}
        keywords="about random movie generator, movie generator team, who made random movie generator"
        path={path}
        schemas={schemas}
      />

      <div className="static-page">
        <h1>About Random Movie Generator</h1>

        <p>
          Random Movie Generator started from a problem almost everyone has felt at some point: you sit down
          with a free evening, open a streaming app, and spend the next thirty or forty minutes scrolling
          through endless rows of thumbnails without actually deciding on anything. By the time you finally
          pick something, half the evening&rsquo;s relaxation value has already evaporated into decision
          fatigue. We built this site to solve that exact problem — quickly, honestly, and without trying to
          upsell you anything along the way.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our goal is simple: help people decide what to watch in seconds, not minutes. We believe the best
          way to do that isn&rsquo;t a smarter recommendation algorithm that tries to predict your taste with
          uncanny precision — it&rsquo;s removing the decision entirely and replacing it with a single,
          well-informed random pick. You choose the genre that matches your mood, we generate one real movie
          with everything you need to evaluate it (poster, rating, runtime, plot summary, trailer, and an
          IMDb link), and you decide whether to commit or roll again. No infinite scroll, no algorithmic
          rabbit holes, no account walls.
        </p>

        <h2>What Makes This Different From a Streaming App's Browse Page</h2>
        <p>
          Streaming platforms are generally optimized to maximize how long you browse, because more browsing
          time tends to correlate with more engagement metrics that matter to their business. That&rsquo;s a
          reasonable business goal for them, but it works directly against what most people actually want on
          a given night, which is simply <em>to start watching something</em>. Random Movie Generator has no
          such incentive. We&rsquo;re not trying to keep you on the site longer than necessary — if you
          generate one movie, love it, and immediately go watch it elsewhere, that&rsquo;s exactly the
          outcome we&rsquo;re aiming for.
        </p>

        <h2>Where Our Movie Data Comes From</h2>
        <p>
          Every poster, rating, runtime, and plot summary you see on this site is sourced from{" "}
          <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer">
            The Movie Database (TMDB)
          </a>
          , a large, actively maintained, community-driven film database. We query TMDB&rsquo;s API
          server-side, meaning your browser never directly talks to TMDB and our API credentials are never
          exposed to the public. We also cross-reference TMDB&rsquo;s video and external ID endpoints to
          surface direct trailer links and IMDb pages for each result, so you can quickly fact-check a
          recommendation before committing your evening to it. This product uses the TMDB API but is not
          endorsed or certified by TMDB.
        </p>

        <h2>Why We Built Eight Separate Genre Generators</h2>
        <p>
          Early versions of this idea used a single, generic &ldquo;random movie&rdquo; button covering
          every genre at once. It worked, but it wasn&rsquo;t very useful — if you were specifically in the
          mood for horror, getting a romantic comedy on your first click wasn&rsquo;t helpful, it was just
          noise. Splitting the tool into eight dedicated generators —{" "}
          <Link href="/random-action-movie-generator">Action</Link>,{" "}
          <Link href="/random-comedy-movie-generator">Comedy</Link>,{" "}
          <Link href="/random-horror-movie-generator">Horror</Link>,{" "}
          <Link href="/random-romance-movie-generator">Romance</Link>,{" "}
          <Link href="/random-sci-fi-movie-generator">Sci-Fi</Link>,{" "}
          <Link href="/random-thriller-movie-generator">Thriller</Link>,{" "}
          <Link href="/random-animated-movie-generator">Animated</Link>, and{" "}
          <Link href="/random-documentary-generator">Documentary</Link> — let each one focus on a
          well-defined pool of films and its own set of genre-specific guidance, while still keeping the
          one-click simplicity that makes the whole idea work in the first place.
        </p>

        <h2>Privacy by Design</h2>
        <p>
          We don&rsquo;t require an account to use any part of this site. Your watchlist is stored entirely
          in your browser&rsquo;s local storage, not on a server, which means we never see or store the list
          of movies you&rsquo;ve saved. Read our full{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> for the complete details on how we handle data.
        </p>

        <h2>Always Free</h2>
        <p>
          There&rsquo;s no premium tier, no paywall on specific genres, and no ad-gated unlock mechanic.
          Random Movie Generator is, and will remain, completely free to use. Deciding what to watch
          shouldn&rsquo;t cost more effort — or more money — than actually watching the movie.
        </p>

        <h2>Get in Touch</h2>
        <p>
          Have feedback, found a bug, or want to suggest a new genre or feature? Visit our{" "}
          <Link href="/contact">Contact page</Link> — we read every message and genuinely use that feedback
          to shape what we build next.
        </p>

        <h2>How We Think About Adding New Features</h2>
        <p>
          Every feature on this site exists because it solved a specific, concrete problem rather than
          because it sounded impressive on a roadmap. The Watchlist exists because people kept generating
          interesting movies they weren&rsquo;t ready to watch immediately and had no way to save them
          without creating an account. The Blog exists because some questions — like why decision fatigue
          happens, or how the underlying data pipeline actually works — deserved a more thorough answer than
          a quick FAQ entry could provide. When we consider new features going forward, we ask the same
          question every time: does this make deciding what to watch faster and easier, or does it just add
          complexity for its own sake? Features that fail that test don&rsquo;t make the cut.
        </p>

        <h2>A Note on Why We Don't Use Accounts</h2>
        <p>
          It would be technically straightforward to add user accounts, sync watchlists across devices, and
          build a more traditional product around login flows and personalized recommendations. We&rsquo;ve
          deliberately avoided that path so far. Accounts introduce friction at exactly the moment
          we&rsquo;re trying to remove it — the whole premise of this tool is that you should be able to
          land on the site and get a real movie recommendation within seconds, not after creating a
          password. Storing your watchlist locally in your browser is a trade-off: it means your list
          doesn&rsquo;t follow you across devices, but it also means there&rsquo;s nothing to sign up for,
          nothing to remember, and nothing of yours sitting on our servers waiting to be breached or sold.
        </p>

        <h2>Who This Tool Is For</h2>
        <p>
          We built Random Movie Generator with a few specific people in mind: the person who opens a
          streaming app with no idea what they want and closes it twenty minutes later having watched
          nothing; the couple who can never agree on a genre, let alone a specific film; the friend group
          that spends more time debating what to watch than actually watching anything; and the solo viewer
          who just wants something decent queued up fast so they can get back to relaxing. If any of that
          sounds familiar, this tool was built for exactly that moment.
        </p>
      </div>
    </Layout>
  );
}
