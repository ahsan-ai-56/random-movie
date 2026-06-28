// pages/blog/index.js
import Link from "next/link";
import Layout from "../../components/Layout";
import Seo, { breadcrumbSchema, webPageSchema } from "../../components/Seo";
import { BLOG_POSTS } from "../../lib/blogPosts";

export default function BlogIndex() {
  const title = "Blog — Random Movie Generator";
  const description =
    "Articles on movie-picking psychology, genre guides, and movie night ideas from the Random Movie Generator team.";
  const path = "/blog";

  const schemas = [
    webPageSchema({ title, description, path }),
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Blog", href: path },
    ]),
  ];

  return (
    <Layout breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog" }]}>
      <Seo
        title={title}
        description={description}
        keywords="random movie generator blog, movie picking tips, movie night ideas, what to watch articles"
        path={path}
        schemas={schemas}
      />

      <div className="page-hero">
        <span className="genre-chip">📝 Blog</span>
        <h1>The Random Movie Generator Blog</h1>
        <p className="lede">
          Thoughts on movie-picking psychology, genre deep dives, and movie night ideas — for whenever
          you want more than just a random pick.
        </p>
      </div>

      <div className="blog-grid">
        {BLOG_POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
            <div className="blog-card-img" style={{ background: `${post.color}1a` }}>
              {post.icon}
            </div>
            <div className="blog-card-body">
              <span className="blog-card-tag">{post.tag}</span>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <div className="blog-card-meta">
                <span>{post.readTime}</span>
                <span>•</span>
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
              </div>
              <span className="blog-read-more">Read article →</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="cta-banner">
        <h2>Ready to Put It Into Practice?</h2>
        <p>Skip the reading and just generate a random movie right now.</p>
        <Link href="/" className="btn btn-primary">
          🎲 Try the Generator
        </Link>
      </div>
    </Layout>
  );
}
