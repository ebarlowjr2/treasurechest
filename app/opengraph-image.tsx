import { OG_SIZE, renderOgCard } from "./og-card";

export const alt =
  "Treasure Chest: Alabama mobile bar, charcuterie bar and cigar table for weddings, parties and corporate events";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    eyebrow: "Alabama Mobile Bar & Catering",
    title: "The party starts when",
    accent: "the Treasure Chest opens.",
    subtitle:
      "Craft cocktails, curated charcuterie and a laid-back cigar table for events across Alabama.",
    photo: "hero.jpg",
    tags: ["Bar Service", "Charcuterie", "Cigar Table"],
  });
}
