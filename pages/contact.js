// pages/contact.js
import { useState } from "react";
import Layout from "../components/Layout";
import Seo, { breadcrumbSchema, webPageSchema, faqSchema } from "../components/Seo";

const FAQS = [
  {
    q: "How quickly will I get a response?",
    a: "We aim to respond to all messages within a few business days, though response times can vary depending on volume.",
  },
  {
    q: "Can I request a new genre generator?",
    a: "Absolutely — genre suggestions are some of the most useful feedback we receive, and several of our existing generator pages exist because people asked for them.",
  },
  {
    q: "I found incorrect movie data — who do I report it to?",
    a: "Movie data is sourced directly from TMDB. If something looks incorrect, it's worth checking the title on TMDB itself, but feel free to let us know too and we'll look into it.",
  },
  {
    q: "Do you offer business or partnership inquiries?",
    a: "Yes, use the contact form below and select the appropriate subject, or mention it directly in your message, and we'll follow up.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const title = "Contact Us — Random Movie Generator";
  const description =
    "Get in touch with the Random Movie Generator team. We'd love to hear your feedback, suggestions, or questions.";
  const path = "/contact";

  const schemas = [
    webPageSchema({ title, description, path }),
    breadcrumbSchema([
      { label: "Home", href: "/" },
      { label: "Contact", href: path },
    ]),
    faqSchema(FAQS),
  ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || "Random Movie Generator — Contact Form");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:hello@randommoviegenerator.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <Layout breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}>
      <Seo
        title={title}
        description={description}
        keywords="contact random movie generator, random movie generator feedback, random movie generator support"
        path={path}
        schemas={schemas}
      />

      <div className="static-page">
        <h1>Contact Us</h1>
        <p>
          Got feedback, a feature request, a bug report, or just want to say hi? We&rsquo;d genuinely love
          to hear from you. Fill out the form below, or reach us directly using the details in the contact
          card — either way, a real person reads every message.
        </p>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us what's on your mind..."
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              ✉️ Send Message
            </button>
            {submitted && (
              <p style={{ fontSize: "13.5px", color: "var(--gold)", marginTop: "0.5rem" }}>
                Your email client should now be open with your message pre-filled — just hit send there to
                complete it.
              </p>
            )}
          </form>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <div className="contact-card">
              <h3>📧 Email</h3>
              <p>hello@randommoviegenerator.com</p>
            </div>
            <div className="contact-card">
              <h3>💡 Feature Requests</h3>
              <p>Want a new genre or filter? Tell us — many of our pages exist because users asked.</p>
            </div>
            <div className="contact-card">
              <h3>🐞 Bug Reports</h3>
              <p>Found something broken? Let us know the page and what happened, and we'll dig in.</p>
            </div>
            <div className="contact-card">
              <h3>⏱️ Response Time</h3>
              <p>We typically reply within a few business days.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
