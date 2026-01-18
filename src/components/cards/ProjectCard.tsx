'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../motion/motion';

export default function ProjectCard({ project }: { project: { id: string; title: string; what: string; owned: string; why: string } }) {
  return (
    <motion.article
      initial="initial"
      whileHover={{ scale: 1.02 }}
      whileInView="enter"
      viewport={{ once: true }}
      className="card p-5"
      variants={fadeUp}
    >
      <h4 className="font-semibold">{project.title}</h4>
      <p className="text-sm text-muted mt-2">{project.what}</p>
      <div className="mt-3 text-sm">
        <strong>Owned:</strong> {project.owned}
      </div>
      <div className="mt-2 text-sm text-muted">
        <strong>Why interesting:</strong> {project.why}
      </div>
    </motion.article>
  );
}
