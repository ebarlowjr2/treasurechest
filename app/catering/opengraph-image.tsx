import { OG_SIZE, renderOgCard } from "../og-card";

export const alt =
  "Treasure Chest catering: mobile bar service, charcuterie bar and cigar table in Alabama";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    eyebrow: "Catering & Mobile Bar · Alabama",
    title: "Bar service, charcuterie & cigars,",
    accent: "brought to you.",
    subtitle:
      "Weddings, corporate events and private parties. Mix and match services and get a custom quote.",
    photo: "trailer-left.jpg",
    tags: ["Weddings", "Corporate", "Private Parties"],
  });
}
