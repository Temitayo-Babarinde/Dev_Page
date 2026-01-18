'use client';
import React from 'react';

export default function NowNext() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Now / Next</h2>
      <p className="text-muted mt-2 max-w-2xl">
        Currently exploring schema-driven LLM agents and tighter integration between game feel and web interaction. Interested in
        research-forward product engineering: robust systems that ship and scale.
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <span className="px-3 py-1 card text-sm">Research: agent tooling</span>
        <span className="px-3 py-1 card text-sm">Problem: real-world matching systems</span>
        <span className="px-3 py-1 card text-sm">Ambition: ship resilient systems</span>
      </div>
    </section>
  );
}