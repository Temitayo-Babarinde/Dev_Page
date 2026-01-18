import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Poligon14 — Developer',
  description: 'Developer building interactive systems across web, games, and AI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-layer fixed inset-0 -z-10" />
        <main className="min-h-screen text-surface antialiased">
          {children}
        </main>
      </body>
    </html>
  );
}
