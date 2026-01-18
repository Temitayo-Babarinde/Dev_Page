'use client';
import React from 'react';

const tech = {
  Web: ['Next.js', 'React', 'Tailwind'],
  'State & Data': ['Redux', 'Zod'],
  Games: ['Godot'],
  AI: ['LLM APIs', 'schema-driven prompting'],
  Design: ['Motion', 'interaction design'],
};

export default function Tech() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Tech & Tools</h2>
      <p className="text-muted mt-2">Minimal, credible — grouped by category. No icon spam.</p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-4">
        {Object.entries(tech).map(([group, items]) => (
          <div key={group} className="card p-4">
            <div className="font-medium">{group}</div>
            <div className="text-sm text-muted mt-2 space-y-1">
              {(items as string[]).map((t) => (
                <div key={t}>{t}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
