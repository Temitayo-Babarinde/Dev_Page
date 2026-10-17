import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Temitayo Babarinde — Student Developer",
  description: "Temitayo Babarinde studies Computer Science and Mathematics at Hunter College and builds useful software for learning and experimentation.",
  openGraph: {
    title: "Temitayo Babarinde — Student Developer",
    description: "Computer Science and Mathematics student at Hunter College, building useful software in New York City.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
