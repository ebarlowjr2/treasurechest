// The three signature add-ons featured on the home page and the catering page.
// Copy is a starting point: adjust "includes" once packages and pricing are set.

export type SignatureService = {
  id: "bar" | "charcuterie" | "cigar";
  name: string;
  tagline: string;
  description: string;
  includes: string[];
  ageNote?: string;
};

export const SIGNATURE_SERVICES: SignatureService[] = [
  {
    id: "bar",
    name: "Bar Service",
    tagline: "Your bar, on wheels",
    description:
      "We roll in a fully set mobile bar and pour for your guests all night. Signature cocktails, beer and wine, or a menu built around your theme.",
    includes: [
      "Bartenders who keep the line moving",
      "Custom signature cocktail menu",
      "Beer, wine and mocktail options",
      "Ice, garnishes, cups and bar tools",
    ],
    ageNote: "21+ for alcohol service",
  },
  {
    id: "charcuterie",
    name: "Charcuterie Bar",
    tagline: "A spread worth gathering around",
    description:
      "A styled grazing table of cured meats, cheeses, fruit, nuts and crackers. It pairs naturally with the bar and works for any crowd size.",
    includes: [
      "Curated meats and cheeses",
      "Seasonal fruit, nuts, jams and dips",
      "Styled display that fits your event",
      "Vegetarian options on request",
    ],
  },
  {
    id: "cigar",
    name: "Cigar Table",
    tagline: "Slow down and light up",
    description:
      "A relaxed cigar lounge corner with a hand-picked selection, a cutting and lighting station, and someone to help guests choose.",
    includes: [
      "Selection of cigars for every palate",
      "Cutters, torch lighters and ashtrays",
      "Guidance for first-timers",
      "Pairs well with whiskey from the bar",
    ],
    ageNote: "21+ only",
  },
];

export function ServiceIcon({ id }: { id: SignatureService["id"] }) {
  const common = {
    viewBox: "0 0 48 48",
    "aria-hidden": true,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (id === "bar") {
    return (
      <svg {...common}>
        <path d="M10 8h28L24 25z" />
        <path d="M24 25v13M16 40h16" />
        <path d="M30 14l6-8" />
        <circle cx="37" cy="5" r="2" />
      </svg>
    );
  }
  if (id === "charcuterie") {
    return (
      <svg {...common}>
        <rect x="5" y="14" width="38" height="24" rx="4" />
        <path d="M43 22h3v8h-3" />
        <circle cx="15" cy="26" r="4" />
        <path d="M24 31l6-10 6 10z" />
        <circle cx="33" cy="33" r="1.5" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="4" y="26" width="34" height="7" rx="3.5" />
      <path d="M31 26v7" />
      <path d="M40 22c0-4 3-4 3-8s-3-4-3-8" />
      <path d="M45 22c0-3 2-3 2-6" />
    </svg>
  );
}
