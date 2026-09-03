import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Temitayo Babarinde — Software Engineer",
  description: "Computer Science student and software engineer in New York City building thoughtful products across web, AI, and interactive systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
