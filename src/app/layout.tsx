import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://temitayo-dev-page.vercel.app"),
  title: "Jack of All Trades — Temitayo Babarinde",
  description: "A playing-card portfolio for Temitayo Babarinde, a Computer Science and Mathematics freshman at Hunter College in New York City.",
  openGraph: {
    title: "Jack of All Trades — Temitayo Babarinde",
    description: "Turn a card to explore Temitayo’s skills, projects, and story.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
