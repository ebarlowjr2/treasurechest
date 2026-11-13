import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BookingForm from "../booking-form";
import { Footer, Header, SectionLabel } from "../site-chrome";
import { ServiceIcon, SIGNATURE_SERVICES } from "../signature-services";

export const metadata: Metadata = {
  title: "Catering & Mobile Bar | Treasure Chest",
  description:
    "Mobile bar service, charcuterie bar and cigar table for weddings, parties and corporate events.",
};

const occasions = [
  "Weddings & receptions",
  "Corporate events & happy hours",
  "Birthdays & milestone parties",
  "Holiday parties",
  "Tailgates & outdoor events",
  "Groomsmen & bachelor nights",
];

const packages = [
  {
    name: "The Pour",
    items: ["Bar Service"],
    text: "Just the bar. Great for receptions and happy hours.",
  },
  {
    name: "The Spread",
    items: ["Bar Service", "Charcuterie Bar"],
    text: "Drinks and a grazing table guests keep coming back to.",
    featured: true,
  },
  {
    name: "The Full Chest",
    items: ["Bar Service", "Charcuterie Bar", "Cigar Table"],
    text: "The complete lounge experience for a night to remember.",
  },
];

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "As early as you can, especially for weekends and wedding season. Send a request and we'll confirm availability.",
  },
  {
    q: "Can I book the charcuterie bar or cigar table without the bar?",
    a: "Yes. Every service can be booked on its own or combined with the others.",
  },
  {
    q: "Who supplies the alcohol?",
    a: "Tell us about your event in the booking form and we'll go over the options for your venue and guest count.",
  },
  {
    q: "Are there age requirements?",
    a: "Alcohol and cigar service is for guests 21 and over. We check ID as needed.",
  },
];

export default function CateringPage() {
  return (
    <>
      <Header active="/catering" />
      <main>
        <section className="page-hero">
          <Image
            src="/images/trailer-left.jpg"
            fill
            priority
            sizes="100vw"
            alt=""
          />
          <div className="hero-shade" />
          <div className="container page-hero-content">
            <p className="eyebrow">Catering &amp; Mobile Bar</p>
            <h1>
              Bar service, charcuterie and cigars, <em>brought to you.</em>
            </h1>
            <p className="hero-lede">
              Pick one service or combine all three. We set up, serve your
              guests and clean up, so you can enjoy your own event.
            </p>
            <div className="button-row">
              <Link className="button" href="#booking">
                Get a Quote
              </Link>
              <Link className="button button-outline" href="#packages">
                View Packages
              </Link>
            </div>
          </div>
        </section>

        <nav className="service-jump" aria-label="Catering services">
          <div className="container">
            {SIGNATURE_SERVICES.map((svc) => (
              <a key={svc.id} href={`#${svc.id}`}>
                <ServiceIcon id={svc.id} />
                {svc.name}
              </a>
            ))}
          </div>
        </nav>

        {SIGNATURE_SERVICES.map((svc, i) => (
          <section
            className={"section service-detail" + (i % 2 ? " is-alt" : "")}
            id={svc.id}
            key={svc.id}
          >
            <div className="container service-detail-grid">
              <div className="service-detail-art" aria-hidden="true">
                <ServiceIcon id={svc.id} />
                <span>{svc.name}</span>
              </div>
              <div className="service-detail-copy">
                <SectionLabel>{svc.tagline}</SectionLabel>
                <h2>{svc.name}</h2>
                <p>{svc.description}</p>
                <ul className="check-list">
                  {svc.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {svc.ageNote && <p className="age-note">{svc.ageNote}</p>}
                <Link className="button button-dark" href="#booking">
                  Add {svc.name} to my event
                </Link>
              </div>
            </div>
          </section>
        ))}

        <section className="section packages" id="packages">
          <div className="container">
            <div className="section-heading">
              <SectionLabel>Packages</SectionLabel>
              <h2>Mix and match your setup</h2>
              <p>
                Start from a popular combination or build your own. Every quote
                is tailored to your guest count and event length.
              </p>
            </div>
            <div className="package-grid">
              {packages.map((pkg) => (
                <article
                  key={pkg.name}
                  className={"package-card" + (pkg.featured ? " is-featured" : "")}
                >
                  {pkg.featured && <span className="package-flag">Most popular</span>}
                  <h3>{pkg.name}</h3>
                  <p>{pkg.text}</p>
                  <ul className="check-list">
                    {pkg.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link
                    className={"button" + (pkg.featured ? "" : " button-dark")}
                    href="#booking"
                  >
                    Request a quote
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section occasions">
          <div className="container occasions-grid">
            <div>
              <SectionLabel>Perfect For</SectionLabel>
              <h2>Any occasion that deserves a toast</h2>
            </div>
            <ul className="occasion-list">
              {occasions.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section faq">
          <div className="container faq-wrap">
            <div className="section-heading">
              <SectionLabel>Questions</SectionLabel>
              <h2>Good to know</h2>
            </div>
            {faqs.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="booking" id="booking">
          <div className="container booking-layout">
            <div className="booking-intro">
              <SectionLabel>Get a Quote</SectionLabel>
              <h2>Tell us about your event</h2>
              <p>
                Choose the services you want, share your date and location, and
                we&apos;ll follow up with availability and a custom quote.
              </p>
            </div>
            <BookingForm defaultExperience="catering" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
