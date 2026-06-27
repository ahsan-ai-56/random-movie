// pages/blog/how-tmdb-powers-random-movie-generator.js
import Link from "next/link";
import Layout from "../../components/Layout";
import Seo, { breadcrumbSchema, webPageSchema } from "../../components/Seo";
import { getPostBySlug, getRelatedPosts } from "../../lib/blogPosts";

const SLUG = "how-tmdb-powers-random-movie-generator";

export default function Article() {
  const post = getPostBySlug(SLUG);
  const related = getRelatedPosts(SLUG);

  const title = `${post.title} — Random Movie Generator Blog`;
  const description = post.description;
  const path = `/blog/${SLUG}`;

  const schemas = [
    webPageSchema({ title, description, path }),
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: post.title, href: path },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      author: { "@type": "Organization", name: "Random Movie Generator" },
    },
  ];

  return (
    <Layout breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]}>
      <Seo
        title={title}
        description={description}
        keywords="TMDB API, how random movie generator works, TMDB movie database, movie data API"
        path={path}
        schemas={schemas}
      />

      <article>
        <div className="article-hero">
          <span className="eyebrow">{post.tag}</span>
          <h1>{post.title}</h1>
          <div className="article-meta">
            <span>{post.readTime}</span>
            <span>•</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
          </div>
        </div>

        <div className="article-body">
          <p>
            Every time you click &ldquo;Generate&rdquo; on Random Movie Generator, a small chain of events
            happens behind the scenes that most users never think about — and honestly, they shouldn&rsquo;t
            have to. But for anyone curious about how a free tool can reliably hand you a real movie, with
            an accurate poster, rating, and trailer, in under a second, here&rsquo;s exactly how it works.
          </p>

          <h2>The Movie Database (TMDB): Our Data Backbone</h2>
          <p>
            Every piece of movie information on this site — titles, posters, release dates, runtimes, plot
            summaries, genre tags, and audience ratings — comes from{" "}
            <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer">
              The Movie Database (TMDB)
            </a>
            , a large, actively maintained, community-driven film and TV database that&rsquo;s been running
            since 2008. Unlike scraping data from random websites or relying on static datasets that go
            stale, TMDB is a living database with regular contributions, meaning new releases, updated
            ratings, and corrected metadata flow into our generator automatically without us having to
            manually maintain anything.
          </p>

          <h2>Step One: You Pick a Genre</h2>
          <p>
            Each of our eight genre pages — <Link href="/random-action-movie-generator">Action</Link>,{" "}
            <Link href="/random-comedy-movie-generator">Comedy</Link>,{" "}
            <Link href="/random-horror-movie-generator">Horror</Link>,{" "}
            <Link href="/random-romance-movie-generator">Romance</Link>,{" "}
            <Link href="/random-sci-fi-movie-generator">Sci-Fi</Link>,{" "}
            <Link href="/random-thriller-movie-generator">Thriller</Link>,{" "}
            <Link href="/random-animated-movie-generator">Animated</Link>, and{" "}
            <Link href="/random-documentary-generator">Documentary</Link> — maps directly to a specific
            genre ID in TMDB&rsquo;s system. Action is genre 28, Comedy is 35, Horror is 27, and so on.
            When you click generate, that genre ID is what actually gets sent to our backend.
          </p>

          <h2>Step Two: Our Server Talks to TMDB, Not Your Browser</h2>
          <p>
            This is the part that matters most for both security and reliability. Your browser never
            contacts TMDB directly. Instead, your click sends a request to our own server-side API route,
            which holds our TMDB API key as a private environment variable. Our server then queries
            TMDB&rsquo;s &ldquo;discover&rdquo; endpoint on your behalf, asking for popular movies within
            the selected genre that have a meaningful number of audience votes — that vote-count filter is
            important, since it keeps the pool focused on titles with complete, reliable data rather than
            obscure entries with missing posters or empty summaries.
          </p>

          <h2>Step Three: True Randomization, Not Just &ldquo;Trending Now&rdquo;</h2>
          <p>
            A common shortcut would be to just show you whatever&rsquo;s currently most popular in a genre —
            but that gets repetitive fast and isn&rsquo;t really &ldquo;random&rdquo; in any meaningful
            sense. Instead, our server picks a random page from TMDB&rsquo;s paginated results (TMDB returns
            results in pages of about 20 movies each) and then picks a random movie from within that page.
            This two-layer randomization — random page, then random movie within that page — gives a much
            wider and more genuinely unpredictable spread of results than just always grabbing from the
            first page of &ldquo;most popular.&rdquo;
          </p>

          <h2>Step Four: Filling In the Details</h2>
          <p>
            Once a movie is selected, we make a follow-up request to TMDB for that specific film&rsquo;s
            full details — this is where runtime and complete genre names come from, since the initial
            discovery request only returns a lighter summary. In parallel, we also independently query
            TMDB&rsquo;s video endpoint to find an official YouTube trailer, and TMDB&rsquo;s external IDs
            endpoint to find the film&rsquo;s IMDb ID, which we use to build a direct link to its IMDb page.
            These three requests — details, trailer, and IMDb ID — happen simultaneously rather than one
            after another, which is part of why the whole process feels close to instant.
          </p>

          <h2>What Happens When a Trailer Isn't Available</h2>
          <p>
            Not every title in TMDB&rsquo;s database has an official trailer indexed, particularly for
            older or more obscure films. When that happens, instead of showing a broken link or no trailer
            option at all, we fall back to generating a YouTube search URL for &ldquo;[Movie Title]
            trailer.&rdquo; It&rsquo;s not as precise as a direct official trailer link, but it ensures
            you&rsquo;re never left with a dead end.
          </p>

          <h2>Similar Movies: A Second, Independent Request</h2>
          <p>
            Below every result, you&rsquo;ll see four similar movie suggestions. These come from yet another
            TMDB endpoint — specifically, the &ldquo;similar movies&rdquo; recommendation data TMDB maintains
            for each individual title, based on shared genres, cast, crew, and keywords. We simply take the
            top few results from that endpoint and display them as smaller cards, giving you a quick way to
            keep exploring if the main pick wasn&rsquo;t quite right but the general direction was.
          </p>

          <h2>Why We Built It This Way</h2>
          <p>
            We could have taken a shortcut and shipped our TMDB API key directly to the browser, letting
            your browser talk to TMDB itself. It would have been simpler to build, but it would have exposed
            our credentials publicly and put us at risk of hitting rate limits or having our key abused by
            unrelated traffic. Routing everything through our own server-side API keeps the key private,
            lets us apply sensible filtering (like the minimum vote count) consistently, and gives us a
            single place to handle errors gracefully if TMDB itself is ever slow or temporarily unavailable.
          </p>

          <h2>The Result: A Fast, Honest, Real-Data Experience</h2>
          <p>
            None of this complexity is visible to you as a user — and that&rsquo;s intentional. From your
            side, you click one button and get a real movie almost instantly. But knowing that every poster,
            rating, and trailer link is pulled live from an actively maintained, real-world film database —
            rather than static or fabricated placeholder data — is part of why the tool stays useful and
            accurate over time without us having to constantly update it by hand.
          </p>
          <p>
            Curious to see it in action? Head to the <Link href="/">homepage</Link> and pick a genre.
          </p>
        </div>

        <div className="article-related">
          <div className="article-divider" />
          <h3>Related Articles</h3>
          <div className="article-related-list">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`}>
                <span>{p.title}</span>
                <span>→</span>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </Layout>
  );
}
