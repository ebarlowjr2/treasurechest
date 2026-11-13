import Image from "next/image";
import Link from "next/link";
import BookingForm from "./booking-form";
import { Footer, Header, SectionLabel } from "./site-chrome";
import { ServiceIcon, SIGNATURE_SERVICES } from "./signature-services";
import { businessJsonLd, jsonLd } from "./site-config";

const events = [
  { title: "Weddings & Formal Events", image: "/images/service-wedding.jpg" },
  { title: "Private Parties", image: "/images/service-parties.jpeg" },
  { title: "Outdoor & Community Events", image: "/images/service-outdoor.jpg" },
  { title: "Food Truck Takeovers", image: "/images/service-food-truck.jpg" },
];

const steps = [
  {
    title: "Tell us about your event",
    text: "Send a request with your date, location and guest count.",
  },
  {
    title: "Build your package",
    text: "Mix and match bar service, charcuterie and the cigar table.",
  },
  {
    title: "We pull up and pour",
    text: "We set up, serve your guests and pack out. You enjoy the night.",
  },
];

const testimonials = [
  {
    quote:
      "We used the Treasure Chest for a work event as a bar. The drinks didn't miss! Would highly recommend.",
    name: "Adam Henry",
    image: "/images/customer-adam.jpg",
  },
  {
    quote:
      "The Treasure Chest pulled up to my kids' soccer game and unloaded even more games and fun for the kids!",
    name: "Nat Reynoldes",
    image: "/images/customer-nat.jpg",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(businessJsonLd())}
      />
      <Header active="/" />
      <main>
        <section className="hero">
          <Image
            src="/images/hero.jpg"
            fill
            priority
            sizes="100vw"
            alt="The Treasure Chest mobile bar trailer set up for an event in Alabama"
          />
          <div className="hero-shade" />
          <div className="container hero-content">
            <p className="eyebrow">Alabama Mobile Bar · Charcuterie · Cigar Lounge</p>
            <h1>
              The party starts when the <em>Treasure Chest</em> opens.
            </h1>
            <p className="hero-lede">
              Craft cocktails, curated charcuterie and a laid-back cigar table,
              served from our trailer at weddings, parties and company events
              across Alabama.
            </p>
            <div className="button-row">
              <Link className="button" href="#booking">
                Book Your Event
              </Link>
              <Link className="button button-outline" href="/catering">
                Explore Catering &amp; Bar
              </Link>
            </div>
            <ul className="hero-badges">
              <li>Weddings</li>
              <li>Corporate</li>
              <li>Private parties</li>
              <li>Outdoor events</li>
            </ul>
          </div>
        </section>

        <section className="section signature">
          <div className="container">
            <div className="section-heading">
              <SectionLabel>Signature Services</SectionLabel>
              <h2>Pour, graze, and unwind</h2>
              <p>
                Book one, or pair all three for an easy lounge experience your
                guests will talk about.
              </p>
            </div>
            <div className="signature-grid">
              {SIGNATURE_SERVICES.map((svc) => (
                <Link
                  className="signature-card"
                  key={svc.id}
                  href={`/catering#${svc.id}`}
                >
                  <span className="signature-icon">
                    <ServiceIcon id={svc.id} />
                  </span>
                  <span className="signature-tag">{svc.tagline}</span>
                  <h3>{svc.name}</h3>
                  <p>{svc.description}</p>
                  <span className="text-link">See what&apos;s included →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section intro">
          <div className="container intro-grid">
            <div className="photo-collage">
              <div className="photo-left">
                <Image
                  src="/images/trailer-left.jpg"
                  fill
                  sizes="(max-width: 760px) 46vw, 280px"
                  alt="The bar shelves inside the Treasure Chest trailer"
                />
              </div>
              <div className="year-card">
                <strong>365</strong>
                <span>days a year, ready to roll</span>
              </div>
              <div className="photo-right">
                <Image
                  src="/images/trailer-right.jpg"
                  fill
                  sizes="(max-width: 760px) 48vw, 300px"
                  alt="The Treasure Chest trailer set up outdoors"
                />
              </div>
            </div>

            <div className="intro-copy">
              <SectionLabel>About Us</SectionLabel>
              <h2>Alabama&apos;s hospitality trailer, with something for everyone</h2>
              <p>
                Treasure Chest is a custom Alabama trailer built to bring the
                bar, the food and the fun to you. We aren&apos;t tied to one theme or one
                menu. Each event is set up around your guests.
              </p>
              <div className="mission-grid">
                <div>
                  <h3>Our Mission</h3>
                  <p>
                    Endless flavor and fun for all ages, never tied to one theme
                    or menu.
                  </p>
                </div>
                <div>
                  <h3>Our Vision</h3>
                  <p>To be the missing link between food trucks and the people.</p>
                </div>
              </div>
              <Link className="button button-dark" href="/catering">
                Our Catering &amp; Bar Services
              </Link>
            </div>
          </div>
        </section>

        <section className="section events" id="events">
          <div className="container">
            <div className="section-heading">
              <SectionLabel>Where We Pull Up</SectionLabel>
              <h2>Events we serve across Alabama</h2>
            </div>
            <div className="event-grid">
              {events.map((event) => (
                <article className="event-card" key={event.title}>
                  <Image
                    src={event.image}
                    fill
                    sizes="(max-width: 620px) 100vw, (max-width: 960px) 50vw, 25vw"
                    alt=""
                  />
                  <h3>{event.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section steps">
          <div className="container">
            <div className="section-heading">
              <SectionLabel>How It Works</SectionLabel>
              <h2>Three steps to an easy event</h2>
            </div>
            <ol className="step-grid">
              {steps.map((step, i) => (
                <li key={step.title}>
                  <span className="step-num">0{i + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section testimonials" id="reviews">
          <div className="container">
            <div className="section-heading">
              <SectionLabel>Reviews</SectionLabel>
              <h2>What our guests say</h2>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((t) => (
                <figure className="testimonial-card" key={t.name}>
                  <blockquote>“{t.quote}”</blockquote>
                  <figcaption className="customer">
                    <Image src={t.image} width={48} height={48} alt="" />
                    <div>
                      <strong>{t.name}</strong>
                      <span>Customer</span>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="booking" id="booking">
          <div className="container booking-layout">
            <div className="booking-intro">
              <SectionLabel>Book Us</SectionLabel>
              <h2>Let&apos;s plan your event</h2>
              <p>
                Book bar and catering for your event, or reserve a private Date
                Night or Day Pod. Tell us the date and where to pull up, and
                we&apos;ll confirm availability and a quote.
              </p>
              <ul className="check-list">
                <li>Mix and match bar, charcuterie and cigar table</li>
                <li>Small gatherings through large events</li>
                <li>We reply by email or phone to lock in your date</li>
              </ul>
            </div>
            <BookingForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
