# 🎬 Random Movie Generator

A free Next.js web app that instantly generates a random movie recommendation by genre — complete with
poster, rating, runtime, trailer, and IMDb link — powered by real data from [TMDB](https://www.themoviedb.org).

## Features

- 🎲 8 dedicated genre generators: Action, Comedy, Horror, Romance, Sci-Fi, Thriller, Animated, Documentary
- 🎥 Real movie data: poster, title, year, runtime, rating, genre tags, overview
- ▶️ Direct trailer links (YouTube) with automatic search fallback
- ⭐ Direct IMDb links for every result
- 📋 Watchlist with localStorage persistence — no account required
- 🌗 Dark / light theme toggle, saved in localStorage
- 📝 Blog with long-form articles on movie-picking psychology, genre guides, and movie night ideas
- 🔍 Full SEO: unique titles/descriptions/keywords, canonical URLs, Open Graph, Twitter Cards
- 🗂️ JSON-LD structured data: WebPage, BreadcrumbList, FAQPage, SoftwareApplication, Article
- 📱 Fully responsive, mobile hamburger menu, accessible focus states

## Tech Stack

- **Next.js 14** (Pages Router)
- **React 18**
- **TMDB API v3** for movie data (server-side only — API key never exposed to the browser)
- **localStorage** for watchlist + theme persistence (no database, no backend)

## Project Structure

```
📁 Root
├── 📄 package.json
├── 📄 next.config.js
├── 📄 .env.local.example
├── 📄 README.md
│
├── 📁 components/
│   ├── Layout.js          (Navbar + dropdown + watchlist badge + footer + breadcrumb)
│   ├── MovieTool.js        (Reusable movie generator — used on all 8 genre pages)
│   └── Seo.js              (Shared <Head> SEO + JSON-LD schema helpers)
│
├── 📁 lib/
│   └── blogPosts.js        (Shared blog post metadata)
│
├── 📁 pages/
│   ├── _app.js
│   ├── index.js                              (Home)
│   ├── about.js
│   ├── contact.js
│   ├── disclaimer.js
│   ├── privacy-policy.js
│   ├── random-action-movie-generator.js
│   ├── random-comedy-movie-generator.js
│   ├── random-horror-movie-generator.js
│   ├── random-romance-movie-generator.js
│   ├── random-sci-fi-movie-generator.js
│   ├── random-thriller-movie-generator.js
│   ├── random-animated-movie-generator.js
│   ├── random-documentary-generator.js
│   ├── watchlist.js
│   ├── 📁 blog/
│   │   ├── index.js
│   │   ├── why-you-cant-decide-what-movie-to-watch.js
│   │   ├── best-random-movie-generator-genres-ranked.js
│   │   ├── how-tmdb-powers-random-movie-generator.js
│   │   └── movie-night-ideas-for-couples-friends-and-solo-viewers.js
│   └── 📁 api/
│       └── movie.js         (Server-side TMDB proxy)
│
└── 📁 styles/
    └── globals.css
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Get a free TMDB API key

1. Create an account at [themoviedb.org](https://www.themoviedb.org)
2. Go to **Settings → API** and request a free v3 API key
3. Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

4. Paste your key into `.env.local`:

```
TMDB_API_KEY=your_real_key_here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 3. Run the dev server

```bash
npm run dev
```

Visit `http://localhost:3000`.

### 4. Build for production

```bash
npm run build
npm run start
```

## API Routes

All TMDB calls are proxied server-side through `/pages/api/movie.js` so your API key is never exposed to
the browser.

| Query | Description |
|---|---|
| `?type=random&genreId=28` | Returns one random movie for the given TMDB genre ID |
| `?type=similar&movieId=123` | Returns 4 movies similar to the given movie ID |
| `?type=trailer&movieId=123` | Returns a YouTube trailer key for the given movie ID |
| `?type=imdb&movieId=123` | Returns the IMDb ID for the given movie, for building an IMDb link |

### TMDB Genre ID Reference

| Genre | ID | Page |
|---|---|---|
| Action | 28 | `/random-action-movie-generator` |
| Comedy | 35 | `/random-comedy-movie-generator` |
| Horror | 27 | `/random-horror-movie-generator` |
| Romance | 10749 | `/random-romance-movie-generator` |
| Sci-Fi | 878 | `/random-sci-fi-movie-generator` |
| Thriller | 53 | `/random-thriller-movie-generator` |
| Animation | 16 | `/random-animated-movie-generator` |
| Documentary | 99 | `/random-documentary-generator` |

## Deployment

This app is ready to deploy on [Vercel](https://vercel.com) (recommended for Next.js) or any Node.js
hosting provider that supports Next.js. Remember to set `TMDB_API_KEY` and `NEXT_PUBLIC_SITE_URL` as
environment variables in your hosting provider's dashboard — **never commit your real `.env.local` file**.

## Disclaimer

This product uses the TMDB API but is not endorsed or certified by TMDB. Random Movie Generator is not
affiliated with TMDB, IMDb, Netflix, or any streaming service. See `/disclaimer` for full details.

## License

MIT
