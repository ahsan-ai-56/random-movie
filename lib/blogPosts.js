// lib/blogPosts.js
// Shared metadata for all blog articles — used by the blog index page
// and by each article page for related-post linking and schema data.

export const BLOG_POSTS = [
  {
    slug: "why-you-cant-decide-what-movie-to-watch",
    tag: "Psychology",
    icon: "🧠",
    color: "#e50914",
    title: "Why You Can't Decide What Movie to Watch (And How to Fix It)",
    description:
      "The psychology behind decision fatigue and choice paralysis when picking a movie — and why a random generator solves it better than browsing.",
    date: "2026-01-12",
    readTime: "7 min read",
  },
  {
    slug: "best-random-movie-generator-genres-ranked",
    tag: "Guide",
    icon: "🎬",
    color: "#f5c518",
    title: "We Ranked Every Genre on Random Movie Generator — Here's What We Found",
    description:
      "A breakdown of all eight genre generators — Action, Comedy, Horror, Romance, Sci-Fi, Thriller, Animated, and Documentary — and when to use each one.",
    date: "2026-01-20",
    readTime: "8 min read",
  },
  {
    slug: "how-tmdb-powers-random-movie-generator",
    tag: "Behind the Scenes",
    icon: "⚙️",
    color: "#00c2ff",
    title: "How TMDB Powers Random Movie Generator (And Why That Matters)",
    description:
      "A look under the hood at how we use The Movie Database API to deliver real, accurate movie data — posters, ratings, trailers, and IMDb links — with every random pick.",
    date: "2026-02-02",
    readTime: "7 min read",
  },
  {
    slug: "movie-night-ideas-for-couples-friends-and-solo-viewers",
    tag: "Lifestyle",
    icon: "🍿",
    color: "#ff5d8f",
    title: "Movie Night Ideas for Couples, Friends, and Solo Viewers",
    description:
      "Practical movie night formats — from couples' date nights to friend group marathons to solo comfort-watching — and how to use a random generator to make each one easier.",
    date: "2026-02-15",
    readTime: "8 min read",
  },
];

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug, count = 3) {
  return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, count);
}
