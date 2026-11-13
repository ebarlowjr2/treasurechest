// Central SEO / business details. Update these in one place.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://treasurechest-al.com"
).replace(/\/$/, "");

export const BUSINESS = {
  name: "Treasure Chest",
  legalName: "Treasure Chest Mobile Bar & Catering",
  email: "info@treasurechest-al.com",
  // Add a phone number here (e.g. "+1-205-555-0100") to include it in
  // search results and structured data.
  phone: "",
  state: "Alabama",
  stateCode: "AL",
  // Cities/counties you regularly serve. Each one is added to the structured
  // data (and the footer) so search engines can match local searches like
  // "mobile bar Birmingham". Leave empty to target Alabama as a whole.
  serviceCities: [] as string[],
  // Full URLs of your social profiles (Facebook, Instagram, etc.).
  socialProfiles: [] as string[],
};

export const DEFAULT_DESCRIPTION =
  "Alabama mobile bar and catering trailer. Bar service, charcuterie bar and cigar table for weddings, corporate events and private parties across Alabama.";

export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

export function businessJsonLd() {
  const areaServed = [
    { "@type": "State", name: BUSINESS.state },
    ...BUSINESS.serviceCities.map((city) => ({
      "@type": "City",
      name: `${city}, ${BUSINESS.stateCode}`,
    })),
  ];
  return {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    alternateName: BUSINESS.legalName,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: [`${SITE_URL}/images/hero.jpg`, `${SITE_URL}/images/trailer-left.jpg`],
    email: BUSINESS.email,
    ...(BUSINESS.phone ? { telephone: BUSINESS.phone } : {}),
    servesCuisine: ["Cocktails", "Charcuterie"],
    address: {
      "@type": "PostalAddress",
      addressRegion: BUSINESS.stateCode,
      addressCountry: "US",
    },
    areaServed,
    ...(BUSINESS.socialProfiles.length ? { sameAs: BUSINESS.socialProfiles } : {}),
  };
}
