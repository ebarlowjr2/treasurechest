import Image from "next/image";

const services = [
  { title: "Food Truck Takeover", image: "/images/service-food-truck.jpg" },
  { title: "Outdoor Event", image: "/images/service-outdoor.jpg" },
  { title: "Wedding /Formal Events", image: "/images/service-wedding.jpg" },
  { title: "Parties for all Ages", image: "/images/service-parties.jpeg" },
];

const posts = [
  {
    title: "Boosting social media for enhancing business",
    image: "/images/blog-1.jpg",
  },
  {
    title: "Building effective plans for marketing strategy",
    image: "/images/blog-2.jpg",
  },
  {
    title: "Boosting social media for enhancing business",
    image: "/images/blog-3.jpg",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="10.5" r="3.5" />
      <path d="M8 25v-4c0-2 1.5-3.5 3.5-3.5h9c2 0 3.5 1.5 3.5 3.5v4" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="12.5" cy="25" r="2" />
      <circle cx="23.5" cy="25" r="2" />
      <path d="M6 7h3l2.5 13h13l2-9H10" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{children}</span>
      <i />
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#" aria-label="Treasure Chest home">
          <Image src="/images/logo.png" width={26} height={26} alt="" />
          <span>Treasure Chest</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {["Home", "About Us", "Portfolio", "Blog", "Contact"].map((item) => (
            <a key={item} href="#">
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#" aria-label="Login">
            <AccountIcon />
          </a>
          <a href="#" aria-label="Cart">
            <CartIcon />
          </a>
          <a className="button button-small" href="#booking">
            Get Started
          </a>
        </div>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <nav>
            {["Home", "About Us", "Portfolio", "Blog", "Contact"].map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

function Footer() {
  const columns = [
    ["Products", "Products List", "Plans & Pricing", "Services", "Partners"],
    ["Company", "About Us", "News", "Contact Us", "Meet Our Team"],
    ["Resources", "Gallery", "Blog Articles", "Brand Assets", "Brand Guidelines"],
    ["Support", "Knowledge Base", "Contact Support", "Privacy Policy", "TOS"],
  ];

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <a className="brand footer-brand" href="#">
            <Image src="/images/logo.png" width={36} height={36} alt="" />
            <span>Treasure Chest</span>
          </a>
          <p>
            Nisl libero ullamcorper id ipsum viverra mauris non pellentesque
            placerat lorem lacinia sagittis non pretium.
          </p>
          <div className="socials" aria-label="Social media">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Twitter">t</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>

        <div className="footer-links">
          {columns.map(([title, ...links]) => (
            <div key={title}>
              <h3>{title}</h3>
              {links.map((link) => (
                <a key={link} href="#">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="copyright">
        Copyright © 2024 · <span>Treasure Chest</span> · All rights reserved
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <Image
            src="/images/hero.jpg"
            fill
            priority
            sizes="100vw"
            alt="The Treasure Chest mobile event trailer"
          />
          <div className="hero-shade" />
          <div className="container hero-content">
            <SectionLabel>TRUST AND CLIENT FOCUS</SectionLabel>
            <h1>Unlock Endless Flavor and Fun at The Treasure Chest!</h1>
            <p>
              Your Mobile Hub for Custom Culinary Experiences and Unforgettable
              Entertainment.
            </p>
            <div className="button-row">
              <a className="button" href="#booking">
                Book Us
              </a>
              <a className="button button-outline" href="#footer">
                CONTACT US
              </a>
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
                  alt="Treasure Chest trailer setup"
                />
              </div>
              <div className="year-card">
                <strong>365</strong>
                <span>Days of fun!</span>
              </div>
              <div className="photo-right">
                <Image
                  src="/images/trailer-right.jpg"
                  fill
                  sizes="(max-width: 760px) 48vw, 300px"
                  alt="Inside the Treasure Chest trailer"
                />
              </div>
            </div>

            <div className="intro-copy">
              <SectionLabel>INTRODUCTION</SectionLabel>
              <h2>Introduction About Our Treasure Chest</h2>
              <p>
                Aliquam praesent class metus iusto odio fugiat adipiscing etiam
                tortor sint, ratione sapiente et, penatibus placeat, error
                inventore.
              </p>
              <div className="mission-grid">
                <div>
                  <div className="mission-title">
                    <Image src="/images/mission.jpg" width={46} height={46} alt="" />
                    <h3>Our Mission</h3>
                  </div>
                  <p>
                    Diverse fun not tied to one theme or menu. Endless flavor
                    and fun for all ages.
                  </p>
                </div>
                <div>
                  <div className="mission-title">
                    <Image src="/images/vision.jpg" width={46} height={46} alt="" />
                    <h3>Our Vision</h3>
                  </div>
                  <p>To be the missing link to food trucks and the people.</p>
                </div>
              </div>
              <a className="button" href="#">
                MORE ABOUT US
              </a>
            </div>
          </div>
        </section>

        <section className="section services">
          <div className="container">
            <div className="section-heading">
              <SectionLabel>SERVICES LIST</SectionLabel>
              <h2>Where can we bring the Treasure Next ?</h2>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-image">
                    <Image
                      src={service.image}
                      fill
                      sizes="(max-width: 760px) 100vw, 25vw"
                      alt=""
                    />
                  </div>
                  <span>OUR SERVICES</span>
                  <h3>{service.title}</h3>
                </article>
              ))}
            </div>
            <h2 className="booking-prompt">Book us for your event!</h2>
          </div>
        </section>

        <section className="booking" id="booking">
          <div className="container booking-card">
            <div>
              <SectionLabel>BOOK A TIME</SectionLabel>
              <h2>Treasure Chest Pull Up</h2>
              <p>
                Choose your date and event details to bring flavor, games, and
                fun to your next gathering.
              </p>
            </div>
            <a className="button" href="mailto:info@treasurechest-al.com">
              REQUEST A BOOKING <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="section testimonials">
          <div className="container">
            <div className="section-heading">
              <SectionLabel>OUR TESTIMONIAL</SectionLabel>
              <h2>What our customers say…</h2>
            </div>
            <div className="testimonial-grid">
              <article className="testimonial-card">
                <Image src="/images/quote.png" width={50} height={50} alt="" />
                <p>
                  The Treasure Chest pulled up to my kids soccer game and
                  unloaded even more games and fun for the kids!
                </p>
                <div className="customer">
                  <Image
                    src="/images/customer-nat.jpg"
                    width={50}
                    height={50}
                    alt=""
                  />
                  <div>
                    <h3>Nat Reynoldes</h3>
                    <span>CUSTOMER</span>
                  </div>
                </div>
              </article>
              <article className="testimonial-card">
                <Image src="/images/quote.png" width={50} height={50} alt="" />
                <p>
                  We used the Treasure Chest for a work event as a bar. The
                  drinks didn&apos;t miss! Would highly recommend.
                </p>
                <div className="customer">
                  <Image
                    src="/images/customer-adam.jpg"
                    width={50}
                    height={50}
                    alt=""
                  />
                  <div>
                    <h3>Adam Henry</h3>
                    <span>CUSTOMER</span>
                  </div>
                </div>
              </article>
            </div>
            <a className="button centered-button" href="#">
              VIEW MORE REVIEWS
            </a>
          </div>
        </section>

        <section className="section blog">
          <div className="container">
            <div className="section-heading">
              <SectionLabel>OUR BLOG</SectionLabel>
              <h2>Our Latest Posts</h2>
            </div>
            <div className="post-grid">
              {posts.map((post, index) => (
                <article className="post-card" key={`${post.title}-${index}`}>
                  <div className="post-image">
                    <Image
                      src={post.image}
                      fill
                      sizes="(max-width: 760px) 100vw, 33vw"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3>{post.title}</h3>
                    <p>
                      Ullam facilis. Integer, praesentium integer eu, iaculis
                      nonummy adipisicing risus…
                    </p>
                    <a href="#">Read more</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
