// pages/privacy-policy.js
import Link from "next/link";
import Layout from "../components/Layout";
import Seo, { breadcrumbSchema, webPageSchema } from "../components/Seo";

export default function PrivacyPolicy() {
  const title = "Privacy Policy — Random Movie Generator";
  const description =
    "Read our privacy policy to understand how Random Movie Generator collects and uses data. We respect your privacy and do not sell your information.";
  const path = "/privacy-policy";

  const schemas = [
    webPageSchema({ title, description, path }),
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Privacy Policy", href: path },
    ]),
  ];

  return (
    <Layout breadcrumb={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}>
      <Seo
        title={title}
        description={description}
        keywords="random movie generator privacy policy, movie generator data privacy, watchlist privacy"
        path={path}
        schemas={schemas}
      />

      <div className="static-page">
        <h1>Privacy Policy</h1>
        <p>
          <em>Last updated: {new Date().getFullYear()}</em>
        </p>

        <p>
          This Privacy Policy explains how Random Movie Generator (&ldquo;the Site,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) handles information when you use our
          website. We&rsquo;ve tried to write this in plain language rather than dense legal text, because
          we think privacy policies should actually be readable. By using this site, you agree to the
          practices described below.
        </p>

        <h2>The Short Version</h2>
        <p>
          We don&rsquo;t require an account. We don&rsquo;t ask for your name, email, or payment
          information to use the movie generator. Your watchlist is stored entirely in your own browser, not
          on our servers. We don&rsquo;t sell your data, because we don&rsquo;t collect the kind of personal
          data that would be valuable to sell in the first place. If that&rsquo;s all you needed to know,
          you&rsquo;re good to go — but if you want the full details, read on.
        </p>

        <h2>Information We Do Not Collect</h2>
        <p>
          We do not require registration to use any genre generator, the watchlist feature, or any other
          part of the site. As a result, we do not collect or store names, email addresses, passwords, or
          payment details through normal use of the movie generator tools. The only place we ask for
          personal information is our <Link href="/contact">Contact page</Link>, and only if you choose to
          submit it voluntarily.
        </p>

        <h2>Your Watchlist Lives in Your Browser, Not on Our Servers</h2>
        <p>
          When you click &ldquo;Add to Watchlist&rdquo; on a movie result, that movie&rsquo;s basic
          information (title, poster, year, rating, and genre tags) is saved using your browser&rsquo;s{" "}
          <strong>local storage</strong> — a standard web browser feature that stores small amounts of data
          directly on your device. This data is never transmitted to our servers, never logged, and never
          visible to us in any way. It stays on your device until you remove individual items from your
          watchlist or clear your browser&rsquo;s site data manually. If you switch devices or browsers,
          your watchlist will not transfer automatically, because there is no central account or database
          backing it — it genuinely only exists on the device where you saved it.
        </p>

        <h2>Theme Preference</h2>
        <p>
          If you toggle between dark and light mode, that preference is also saved in your browser&rsquo;s
          local storage, purely so the site remembers your choice on your next visit. Like your watchlist,
          this preference is local to your device and not transmitted to us.
        </p>

        <h2>Information We Receive From the Contact Form</h2>
        <p>
          If you choose to use our <Link href="/contact">Contact page</Link>, the form is designed to open
          your own email client with a pre-filled message addressed to us. In that case, any information you
          choose to include (your name, email address, and message) is sent via your own email provider, the
          same way as if you&rsquo;d written us a normal email. We only see what you choose to send, and we
          use it solely to respond to your inquiry, fix bugs you report, or consider feature requests. We do
          not add contact form submissions to a marketing list or share them with third parties.
        </p>

        <h2>Third-Party Data Source: TMDB</h2>
        <p>
          All movie data shown on this site — posters, ratings, summaries, runtimes, and genre tags — is
          retrieved from{" "}
          <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer">
            The Movie Database (TMDB)
          </a>{" "}
          through a server-side API request. These requests are made by our server, not your browser, which
          means TMDB does not receive any information about you personally as a result of using our movie
          generator — it only receives a generic request for a movie in a given genre. We recommend reviewing{" "}
          <a href="https://www.themoviedb.org/privacy-policy" target="_blank" rel="noopener noreferrer">
            TMDB&rsquo;s own privacy policy
          </a>{" "}
          if you want details on how they separately handle data on their platform.
        </p>

        <h2>Cookies and Tracking</h2>
        <p>
          We do not use tracking cookies, third-party advertising pixels, or cross-site tracking technology
          to build a profile of your browsing behavior. Local storage usage for your watchlist and theme
          preference, as described above, is functional rather than a tracking mechanism — it doesn&rsquo;t
          identify you personally and isn&rsquo;t shared with any third party.
        </p>

        <h2>Analytics</h2>
        <p>
          We may use basic, privacy-respecting analytics to understand aggregate site usage (for example,
          which genre generators are most popular), purely to help us improve the site. Any such analytics
          data is aggregated and not used to build individual user profiles or to identify you personally.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          This site is not directed at children under the age of 13, and we do not knowingly collect
          personal information from children. Since most of the site requires no personal information to
          use at all, this risk is inherently limited, but if you believe a child has provided us personal
          information through the contact form, please reach out and we will address it promptly.
        </p>

        <h2>Data Security</h2>
        <p>
          Because we collect minimal personal data by design, our exposure to data security risk is limited.
          Where we do interact with data — such as our server-side TMDB API requests — API credentials are
          stored as server-side environment variables and are never exposed to the public or to your
          browser.
        </p>

        <h2>Your Rights and Choices</h2>
        <p>
          Since your watchlist and theme preference are stored locally rather than on our servers, you have
          full and immediate control over that data at all times — simply remove items from your watchlist,
          or clear your browser&rsquo;s local storage entirely, to delete it. There is no account to delete
          and no server-side record to request removal of, because none exists for ordinary use of the site.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy occasionally to reflect changes in our practices or for legal or
          regulatory reasons. We&rsquo;ll update the &ldquo;Last updated&rdquo; date at the top of this page
          whenever we do. Continued use of the site after changes are posted constitutes acceptance of the
          revised policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how we handle data, please reach out via
          our <Link href="/contact">Contact page</Link>. You may also want to review our{" "}
          <Link href="/disclaimer">Disclaimer</Link> for additional context on our data sources and use of
          third-party links.
        </p>
      </div>
    </Layout>
  );
}
