'use client';
import React from 'react';
import projects from '../../data/projects';
import ProjectCard from '../cards/ProjectCard';

export default function Work() {
  return (
    <section id="work" className="space-y-4">
      <h2 className="text-2xl font-semibold">Selected Work</h2>
      <p className="text-muted max-w-2xl">4 items — framed as systems in progress. What it is, what I owned, and why it’s interesting technically.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
