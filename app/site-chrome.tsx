import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "./site-config";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Catering & Bar", href: "/catering" },
  { label: "Events", href: "/#events" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label">
      <i />
      <span>{children}</span>
    </div>
  );
}

export function Header({ active = "/" }: { active?: string }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Treasure Chest home">
          <Image
            className="brand-logo"
            src="/logo.svg"
            width={64}
            height={58}
            priority
            alt="Treasure Chest"
          />
          <span className="brand-name">
            Treasure Chest
            <small>Alabama Mobile Bar &amp; Catering</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={item.href === active ? "is-active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="button button-small header-cta" href="/#booking">
          Book Your Event
        </Link>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <nav>
            {NAV.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="button button-small" href="/#booking">
              Book Your Event
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link className="brand footer-brand" href="/">
            <Image src="/logo.svg" width={92} height={83} alt="Treasure Chest" />
          </Link>
          <p>
            A mobile bar, charcuterie spread and cigar lounge that pulls up to
            your party, wedding or company event, then handles the rest.
          </p>
          <p className="service-area">
            Proudly serving{" "}
            {BUSINESS.serviceCities.length
              ? `${BUSINESS.serviceCities.join(", ")} and all of ${BUSINESS.state}`
              : `events across ${BUSINESS.state}`}
            .
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h3>Services</h3>
            <Link href="/catering#bar">Bar Service</Link>
            <Link href="/catering#charcuterie">Charcuterie Bar</Link>
            <Link href="/catering#cigar">Cigar Table</Link>
            <Link href="/#booking">Date Night &amp; Day Pods</Link>
          </div>
          <div>
            <h3>Explore</h3>
            <Link href="/">Home</Link>
            <Link href="/catering">Catering &amp; Bar</Link>
            <Link href="/#events">Events</Link>
            <Link href="/#reviews">Reviews</Link>
          </div>
          <div>
            <h3>Get in touch</h3>
            <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
            {BUSINESS.phone && (
              <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phone}</a>
            )}
            <Link href="/#booking">Request a booking</Link>
          </div>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} Treasure Chest · Please enjoy responsibly.
        Alcohol and tobacco service is for guests 21+.
      </div>
    </footer>
  );
}
