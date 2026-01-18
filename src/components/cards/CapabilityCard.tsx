'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { hoverScale } from '../motion/motion';

export default function CapabilityCard({ label, bullets, children }: { label: string; bullets: string[]; children?: React.ReactNode }) {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="card p-5"
      variants={hoverScale}
      role="group"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold">{label}</h3>
      </div>
      <p className="mt-3 text-sm text-muted">{children}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-accent text-xs mt-1">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
