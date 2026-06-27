// pages/blog/why-you-cant-decide-what-movie-to-watch.js
import Link from "next/link";
import Layout from "../../components/Layout";
import Seo, { breadcrumbSchema, webPageSchema } from "../../components/Seo";
import { getPostBySlug, getRelatedPosts } from "../../lib/blogPosts";

const SLUG = "why-you-cant-decide-what-movie-to-watch";

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
        keywords="decision fatigue movies, choice paralysis streaming, why cant i decide what to watch, movie picking psychology"
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
            You sit down on the couch, remote in hand, with absolutely nothing else to do. You open a
            streaming app. Forty minutes later, you&rsquo;re still scrolling, no closer to a decision than
            when you started, and the evening you set aside to relax has quietly turned into a low-grade
            chore. If this sounds familiar, you&rsquo;re not alone — and more importantly, it&rsquo;s not a
            personal failing. It&rsquo;s a well-documented psychological phenomenon, and understanding why it
            happens is the first step to actually fixing it.
          </p>

          <h2>The Problem Has a Name: Decision Fatigue</h2>
          <p>
            Psychologists call this <strong>decision fatigue</strong> — the idea that the quality and speed
            of our decisions deteriorate the more decisions we&rsquo;re asked to make in a row. Every choice
            you make throughout a day, from what to eat for breakfast to which email to answer first, draws
            from the same limited mental reserve. By the time you sit down in the evening, that reserve is
            often nearly empty, which is exactly the moment a streaming app hands you a fresh decision with
            dozens, sometimes hundreds, of options. It&rsquo;s a uniquely bad combination: low mental energy
            meeting an enormous, low-structure choice.
          </p>

          <h2>Why More Choices Make It Worse, Not Better</h2>
          <p>
            There&rsquo;s a related concept called the <strong>paradox of choice</strong>, popularized by
            psychologist Barry Schwartz, which describes how having more options often makes people less
            satisfied with whatever they eventually choose, and less likely to choose quickly in the first
            place. This runs counter to how streaming platforms are designed — more content, more rows, more
            personalized recommendations — under the assumption that more options inherently means a better
            experience. In practice, it frequently produces the opposite effect: more scrolling, more
            second-guessing, and a lingering sense that whatever you eventually pick might not be the
            &ldquo;best&rdquo; option, even after you&rsquo;ve started watching it.
          </p>

          <h2>Streaming Platforms Are Built to Maximize Browsing, Not Minimize It</h2>
          <p>
            It&rsquo;s worth being honest about an underlying incentive problem here. Most major streaming
            platforms measure success partly through engagement metrics like time spent on the platform.
            That means a recommendation engine that keeps you comparing five similar-looking thrillers for
            twenty minutes is, by some internal metrics, performing well — even though it&rsquo;s actively
            working against your actual goal of starting to watch something. This isn&rsquo;t a conspiracy
            theory; it&rsquo;s simply how attention-based business models tend to shape product design. The
            practical takeaway is that the tools most people use to pick a movie aren&rsquo;t actually
            optimized to help them pick quickly.
          </p>

          <h2>Why Randomization Works Better Than It Sounds</h2>
          <p>
            On the surface, letting a random number generator pick your movie sounds like giving up control
            over a decision that matters to you. In practice, it works remarkably well, for a few specific
            reasons:
          </p>
          <ul>
            <li>
              <strong>It removes the comparison step entirely.</strong> Decision fatigue isn&rsquo;t really
              about choosing — it&rsquo;s about comparing. A randomized pick skips comparison altogether by
              presenting exactly one option at a time.
            </li>
            <li>
              <strong>It mirrors how people actually pick movies socially.</strong> When a friend says
              &ldquo;let&rsquo;s watch a comedy&rdquo; and someone just names one, the group usually goes
              with it. A random generator recreates that same low-friction social dynamic, just without
              needing a second person in the room.
            </li>
            <li>
              <strong>It still gives you a veto.</strong> A good random movie generator — including this
              one — shows you the poster, rating, runtime, and plot summary up front. You&rsquo;re not
              committing blindly; you&rsquo;re simply skipping the part where you compare twenty options
              before landing on one.
            </li>
            <li>
              <strong>It reframes &ldquo;good enough&rdquo; as the goal, not &ldquo;perfect.&rdquo;</strong>{" "}
              Schwartz&rsquo;s research on choice paralysis found that people who deliberately aim for{" "}
              &ldquo;good enough&rdquo; rather than &ldquo;the absolute best&rdquo; report higher satisfaction
              overall. Random selection structurally enforces this mindset.
            </li>
          </ul>

          <h2>A Practical Framework for Faster Movie Decisions</h2>
          <p>
            If you want to break the scrolling habit without necessarily using a generator every single
            time, a few practical habits help:
          </p>
          <ul>
            <li>
              <strong>Decide the genre before you open the app.</strong> Most of the wasted time comes from
              switching between genres mid-browse. Commit to a mood first.
            </li>
            <li>
              <strong>Set a hard time limit.</strong> Give yourself two minutes to choose. If you
              haven&rsquo;t picked something by then, default to a random pick within your chosen genre.
            </li>
            <li>
              <strong>Don&rsquo;t re-open the browse screen once you&rsquo;ve started watching.</strong>{" "}
              Five minutes in, ask if it&rsquo;s working for you. If not, switch — but commit to evaluating
              from inside the movie, not from the browse screen.
            </li>
            <li>
              <strong>Use a tool that removes comparison entirely</strong> when you notice you&rsquo;re
              already fatigued. This is exactly the scenario a random movie generator is built for.
            </li>
          </ul>

          <h2>Where This Leaves Us</h2>
          <p>
            None of this means algorithmic recommendations are inherently bad, or that browsing is always
            the wrong approach. Sometimes you genuinely want to explore and compare. But on the nights when
            you simply want to watch <em>something</em> without spending half your evening deciding what
            that something is, structurally removing the comparison step — by generating one random,
            well-described option and deciding to commit or re-roll — tends to outperform browsing on both
            speed and, somewhat counterintuitively, satisfaction.
          </p>
          <p>
            That&rsquo;s the entire idea behind{" "}
            <Link href="/">Random Movie Generator</Link>: pick a genre, get one real movie with everything
            you need to evaluate it in a glance, and either watch it or roll again. No infinite scroll
            required.
          </p>

          <blockquote>
            The goal isn&rsquo;t to find the objectively best movie available tonight — it&rsquo;s to find a
            genuinely good one fast enough that you actually get to enjoy watching it.
          </blockquote>
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
