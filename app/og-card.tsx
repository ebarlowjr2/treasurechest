import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_URL } from "./site-config";

// Shared design for the link-preview images (Facebook, iMessage, X, LinkedIn,
// Slack, etc.). Each page's opengraph-image.tsx calls this with its own text.

export const OG_SIZE = { width: 1200, height: 630 };

const INK = "#14161d";
const GOLD = "#d4a84b";

// Paths are kept statically scoped so the bundler only traces these folders.
function font(name: string) {
  return readFile(join(process.cwd(), "assets", "fonts", name));
}

async function image(name: string, mime: string) {
  const data = await readFile(join(process.cwd(), "public", "images", name));
  return `data:${mime};base64,${data.toString("base64")}`;
}

export async function renderOgCard({
  eyebrow,
  title,
  accent,
  subtitle,
  photo,
  tags,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  subtitle: string;
  photo: string;
  tags: string[];
}) {
  const [photoSrc, logoSrc, display, displayItalic, sans] = await Promise.all([
    image(photo, "image/jpeg"),
    image("logo-512.png", "image/png"),
    font("Fraunces-SemiBold.ttf"),
    font("Fraunces-Italic-500.ttf"),
    font("Manrope-Bold.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: INK,
          fontFamily: "Manrope",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 1200,
            height: 630,
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: "flex",
            background:
              "linear-gradient(90deg, rgba(14,15,20,0.97) 0%, rgba(14,15,20,0.9) 48%, rgba(14,15,20,0.35) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 22,
            left: 22,
            width: 1156,
            height: 586,
            display: "flex",
            border: "1.5px solid rgba(212,168,75,0.45)",
            borderRadius: 18,
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "62px 72px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSrc}
              alt=""
              width={89}
              height={80}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  color: "#fff",
                  fontFamily: "Fraunces",
                  fontSize: 34,
                  lineHeight: 1.1,
                }}
              >
                Treasure Chest
              </div>
              <div
                style={{
                  color: GOLD,
                  fontSize: 15,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                }}
              >
                {eyebrow}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#fff",
                fontFamily: "Fraunces",
                fontSize: 68,
                lineHeight: 1.04,
                letterSpacing: -1.5,
              }}
            >
              <span>{title}</span>
              <span
                style={{
                  color: GOLD,
                  fontFamily: "Fraunces Italic",
                }}
              >
                {accent}
              </span>
            </div>
            <div
              style={{
                marginTop: 22,
                color: "rgba(255,255,255,0.8)",
                fontSize: 26,
                lineHeight: 1.4,
                maxWidth: 700,
              }}
            >
              {subtitle}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {tags.map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  padding: "10px 20px",
                  borderRadius: 999,
                  border: "1.5px solid rgba(212,168,75,0.6)",
                  color: "#fff",
                  fontSize: 19,
                }}
              >
                {tag}
              </div>
            ))}
            <div
              style={{
                display: "flex",
                marginLeft: "auto",
                padding: "12px 26px",
                borderRadius: 999,
                background: GOLD,
                color: INK,
                fontSize: 20,
              }}
            >
              {new URL(SITE_URL).host}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Fraunces", data: display, weight: 600, style: "normal" },
        { name: "Fraunces Italic", data: displayItalic, weight: 500, style: "italic" },
        { name: "Manrope", data: sans, weight: 700, style: "normal" },
      ],
    },
  );
}
