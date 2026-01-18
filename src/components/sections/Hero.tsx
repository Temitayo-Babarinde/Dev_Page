'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../motion/motion';
import useCursorReactive from '../../hooks/useCursor';

export default function Hero() {
  useCursorReactive();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="space-y-6">
      <div className="max-w-3xl">
        <motion.h1
          initial="initial"
          animate={show ? 'enter' : 'initial'}
          variants={fadeUp}
          className="text-4xl sm:text-5xl font-semibold leading-tight"
        >
          Poligon14
        </motion.h1>

        <motion.p
          initial="initial"
          animate={show ? 'enter' : 'initial'}
          variants={fadeUp}
          transition={{ delay: 0.06 }}
          className="mt-3 text-lg text-muted max-w-2xl"
        >
          Developer building interactive systems across web, games, and AI.
        </motion.p>

        <motion.div
          initial="initial"
          animate={show ? 'enter' : 'initial'}
          variants={fadeUp}
          transition={{ delay: 0.12 }}
          className="mt-6"
        >
          <a
            href="#work"
            className="inline-block px-4 py-2 card text-sm font-medium hover:translate-y-[-2px] transition-transform"
            aria-label="View work"
          >
            View work
          </a>
        </motion.div>
      </div>
      <div className="mt-8 w-full h-36 card flex items-center justify-center cursor-reactive">
        <div className="text-muted text-sm">Subtle engineered micro-interaction demo — cursor-reactive</div>
      </div>
    </section>
  );
}
