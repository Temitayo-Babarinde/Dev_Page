'use client';
import React from 'react';
import CapabilityCard from '../cards/CapabilityCard';
import capabilities from '../../data/capabilities';

export default function Capabilities() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Capabilities</h2>
      <p className="text-muted mt-2 max-w-2xl">Three pillars: Web & Systems Engineering, Game Development & Interaction, ML & Applied AI Systems.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
        {capabilities.map((c) => (
          <CapabilityCard key={c.label} label={c.label} bullets={c.items}>
            {c.description}
          </CapabilityCard>
        ))}
      </div>
    </section>
  );
}
