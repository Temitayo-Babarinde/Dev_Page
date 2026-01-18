import React from 'react';
import Hero from '../components/sections/Hero';
import Capabilities from '../components/sections/Capabilities';
import Work from '../components/sections/Work';
import Tech from '../components/sections/Tech';
import NowNext from '../components/sections/NowNext';

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-28">
      <Hero />
      <Capabilities />
      <Work />
      <Tech />
      <NowNext />
      <footer className="py-12 text-sm text-muted">
        © {new Date().getFullYear()} Poligon14 — Built with Next.js, Tailwind, Framer Motion
      </footer>
    </div>
  );
}
