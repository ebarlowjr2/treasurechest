import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home - Treasure Chest",
  description:
    "Unlock endless flavor and fun with The Treasure Chest mobile event experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
