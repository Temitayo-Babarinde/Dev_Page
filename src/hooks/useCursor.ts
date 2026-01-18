'use client';
import { useEffect } from 'react';

export default function useCursorReactive() {
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      // small normalized offset
      const x = ((e.clientX - vw / 2) / vw) * 6;
      const y = ((e.clientY - vh / 2) / vh) * 6;
      document.documentElement.style.setProperty('--cursor-x', String(x));
      document.documentElement.style.setProperty('--cursor-y', String(y));
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);
}
