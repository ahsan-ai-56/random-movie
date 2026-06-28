// pages/disclaimer.js
import Link from "next/link";
import Layout from "../components/Layout";
import Seo, { breadcrumbSchema, webPageSchema } from "../components/Seo";

export default function Disclaimer() {
  const title = "Disclaimer — Random Movie Generator";
  const description =
    "Read the disclaimer for Random Movie Generator. Movie data is sourced from TMDB. We are not affiliated with IMDb, Netflix, or any streaming service.";
  const path = "/disclaimer";

  const schemas = [
    webPageSchema({ title, description, path }),
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Disclaimer", href: path },
    ]),
  ];

  return (
    <Layout breadcrumb={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]}>
      <Seo
        title={title}
        description={description}
        keywords="random movie generator disclaimer, tmdb disclaimer, movie data disclaimer"
        path={path}
        schemas={schemas}
      />

      <div className="static-page">
        <h1>Disclaimer</h1>
        <p>
          <em>Last updated: {new Date().getFullYear()}</em>
        </p>

        <p>
          Please read this disclaimer carefully before using Random Movie Generator (&ldquo;the
          Site,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using any
          part of this website, you acknowledge that you have read, understood, and agree to the terms
          described below.
        </p>

        <h2>Data Source</h2>
        <p>
          All movie information displayed on this site — including but not limited to titles, posters,
          release dates, runtimes, plot summaries, genre classifications, and audience ratings — is sourced
          from{" "}
          <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer">
            The Movie Database (TMDB)
          </a>{" "}
          via its public API. We do not independently verify, edit, or fact-check this information beyond
          what TMDB provides, and we cannot guarantee its complete accuracy, completeness, or timeliness.
          Movie data, including ratings and availability information, can change after we display it, and
          we are not responsible for discrepancies between what is shown on this site and the actual current
          state of a film&rsquo;s data on TMDB or elsewhere.
        </p>

        <h2>No Affiliation With TMDB, IMDb, or Streaming Services</h2>
        <p>
          This product uses the TMDB API but is not endorsed or certified by TMDB. We are not affiliated
          with, sponsored by, or officially connected to The Movie Database, IMDb, Netflix, Amazon Prime
          Video, Disney+, Hulu, HBO Max, or any other streaming service, studio, or distributor referenced
          or implied anywhere on this site. All trademarks, logos, and brand names referenced are the
          property of their respective owners and are used here only for identification and informational
          purposes.
        </p>

        <h2>Trailer and IMDb Links</h2>
        <p>
          Where available, we provide direct links to YouTube trailers and IMDb pages for the movies our
          generator surfaces. These links point to third-party websites that we do not own, operate, or
          control. We are not responsible for the content, availability, accuracy, advertising, products, or
          services found on YouTube, IMDb, or any other linked third-party site. If a trailer link is
          unavailable for a specific title, we provide a fallback link to a YouTube search for that
          movie&rsquo;s trailer, which may return varying or unofficial results.
        </p>

        <h2>No Streaming or Hosting of Copyrighted Content</h2>
        <p>
          Random Movie Generator does not host, stream, distribute, or provide access to any copyrighted
          film or video content. We display metadata (posters, titles, summaries, and ratings) and link out
          to official trailers and third-party review sites. We do not provide a way to watch full movies on
          this site, and any suggestion otherwise is not our intent.
        </p>

        <h2>Recommendations Are Randomized, Not Curated</h2>
        <p>
          The core function of this site is to provide a <strong>randomized</strong> movie suggestion within
          a given genre, filtered only by a minimum threshold of audience votes on TMDB to ensure reasonably
          complete data. This is not a personally curated or editorially reviewed recommendation system, and
          we make no claims about the quality, suitability, or appropriateness of any specific film
          suggested by the tool for any particular individual or audience. Content ratings, themes, and
          intensity vary widely within every genre, and you should use the provided plot summary, genre
          tags, and external links (IMDb, trailer) to make your own informed decision before watching any
          recommended title, particularly when selecting content for children or sensitive viewers.
        </p>

        <h2>No Professional Advice</h2>
        <p>
          Nothing on this site constitutes professional advice of any kind, including but not limited to
          entertainment, legal, or content-rating advice. Genre classifications and audience ratings
          reflect aggregated third-party data and community sentiment, not an official content rating body
          such as the MPA, BBFC, or similar organizations. Always check an official content rating source if
          you need precise guidance on a film&rsquo;s suitability for a specific audience.
        </p>

        <h2>Availability and Accuracy of the Tool</h2>
        <p>
          We aim to keep Random Movie Generator available and functioning correctly at all times, but we do
          not guarantee uninterrupted access. The site depends on a third-party API (TMDB), and outages,
          rate limits, or changes on TMDB&rsquo;s end may temporarily affect the tool&rsquo;s functionality.
          We are not liable for any inconvenience caused by such third-party service interruptions.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Random Movie Generator and its operators shall not be
          liable for any direct, indirect, incidental, consequential, or special damages arising out of or
          in connection with your use of this site, including but not limited to reliance on any movie
          information, recommendation, or third-party link provided here.
        </p>

        <h2>Changes to This Disclaimer</h2>
        <p>
          We may update this disclaimer from time to time to reflect changes in our practices or for other
          operational, legal, or regulatory reasons. Continued use of the site after any changes constitutes
          acceptance of the revised disclaimer.
        </p>

        <h2>Questions?</h2>
        <p>
          If you have any questions about this disclaimer, please reach out via our{" "}
          <Link href="/contact">Contact page</Link>. You may also want to review our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> for details on how we handle your data.
        </p>

        <h2>A Note on Randomization and Personal Taste</h2>
        <p>
          We want to be transparent about the nature of a randomized recommendation tool. Unlike a curated
          &ldquo;best of&rdquo; list compiled by film critics, the suggestions generated by this site are
          pulled from a broad, popularity-and-vote-filtered pool within a chosen genre, then selected at
          random. This means you may occasionally receive a film that doesn&rsquo;t match your personal
          taste, that you&rsquo;ve already seen, or that doesn&rsquo;t feel like a strong fit for the
          specific mood you were hoping for. This is an expected and normal outcome of how the tool works,
          not a malfunction, and the &ldquo;Generate Again&rdquo; option exists specifically so you can
          continue rolling until you find something that does feel right.
        </p>

        <h2>Use at Your Own Discretion</h2>
        <p>
          By using Random Movie Generator, you acknowledge that all recommendations are provided on an
          &ldquo;as is&rdquo; basis without warranties of any kind, express or implied, regarding their
          accuracy, suitability, or quality. You remain solely responsible for deciding whether any
          recommended title is appropriate for you or anyone you are watching with.
        </p>
      </div>
    </Layout>
  );
}
