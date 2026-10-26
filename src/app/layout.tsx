import "./../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://temitayo-dev-page.vercel.app"),
  title: "Temitayo Babarinde — Software & Systems",
  description:
    "Temitayo Babarinde is a Computer Science and Mathematics student at Hunter College in Queens, New York, building thoughtful software and AI products.",
  openGraph: {
    title: "Temitayo Babarinde — Software & Systems",
    description: "Selected projects and notes from an independent builder in Queens, New York.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
