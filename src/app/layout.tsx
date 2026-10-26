import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://temitayo-dev-page.vercel.app"),
  title: "Temitayo Babarinde",
  description:
    "Temitayo Babarinde studies computer science and mathematics at Hunter College and builds software projects in Queens, New York.",
  openGraph: {
    title: "Temitayo Babarinde",
    description: "Projects and notes from a Hunter College student learning by building.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
