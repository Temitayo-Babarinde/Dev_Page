"use client";

import { useEffect, useRef, useState } from "react";

const targets = [7, 2, 3, 8, 9, 4, 14, 19];
const symbols = ["π", "∑", "λ", "∞", "✳", "∂", "√", "x"];

export default function NightShift() {
  const [started, setStarted] = useState(false);
  const [position, setPosition] = useState(12);
  const [targetIndex, setTargetIndex] = useState(0);
  const [seconds, setSeconds] = useState(25);
  const [finished, setFinished] = useState(false);
  const [won, setWon] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const score = Math.min(targetIndex, 5);
  const target = targets[targetIndex % targets.length];

  useEffect(() => {
    if (started && !finished && position === target) {
      const nextScore = targetIndex + 1;
      setTargetIndex(nextScore);
      if (nextScore >= 5) {
        setWon(true);
        setFinished(true);
      }
    }
  }, [started, finished, position, target, targetIndex]);

  useEffect(() => {
    if (!started || finished) return;
    const onKeyDown = (event: KeyboardEvent) => {
      const moves: Record<string, number> = { ArrowUp: -5, w: -5, W: -5, ArrowDown: 5, s: 5, S: 5, ArrowLeft: -1, a: -1, A: -1, ArrowRight: 1, d: 1, D: 1 };
      const delta = moves[event.key];
      if (delta === undefined) return;
      event.preventDefault();
      move(delta);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [started, finished, position]);

  useEffect(() => {
    if (!started || finished) return;
    timerRef.current = setInterval(() => {
      setSeconds((remaining) => {
        if (remaining <= 1) {
          setFinished(true);
          return 0;
        }
        return remaining - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [started, finished]);

  function move(delta: number) {
    if (!started || finished) return;
    let next = position + delta;
    if (delta === -1 && position % 5 === 0) next = position;
    if (delta === 1 && position % 5 === 4) next = position;
    if (next < 0 || next > 24) next = position;
    setPosition(next);
  }

  function restart() {
    if (timerRef.current) clearInterval(timerRef.current);
    setStarted(true);
    setPosition(12);
    setTargetIndex(0);
    setSeconds(25);
    setFinished(false);
    setWon(false);
  }

  return (
    <div className="night-game">
      <div className="game-topline"><span>NIGHT WALK / 01</span><span>{String(seconds).padStart(2, "0")} SEC</span></div>
      <div className="game-status" aria-live="polite">
        {won ? "You found your way." : finished ? "The night got away from you." : started ? "Collect the symbols." : "The city is quiet. Take a short walk."}
      </div>
      <div className={`game-board ${started ? "game-board-active" : ""}`} role="grid" aria-label="Five by five night walk game board">
        {Array.from({ length: 25 }, (_, index) => {
          const isPlayer = index === position;
          const isTarget = index === target && !finished && !won;
          return (
            <div className={`game-cell ${isPlayer ? "game-player" : ""} ${isTarget ? "game-target" : ""}`} role="gridcell" aria-label={isPlayer ? "Your position" : isTarget ? "Collectible symbol" : "Path"} key={index}>
              {isPlayer ? <span className="player-dot">T</span> : isTarget ? <span className="target-symbol" aria-hidden="true">{symbols[targetIndex % symbols.length]}</span> : <span className="cell-star" aria-hidden="true">{index % 6 === 0 ? "·" : ""}</span>}
            </div>
          );
        })}
      </div>
      <div className="game-controls">
        <span className="game-score">FOUND <b>{score}/5</b></span>
        {!started || finished
          ? <button className="game-button" onClick={restart}>{won ? "Walk again" : finished ? "Try again" : "Start the walk"} <span aria-hidden="true">↗</span></button>
          : <div className="dpad" aria-label="Movement controls">
              <button onClick={() => move(-5)} aria-label="Move up">↑</button>
              <button onClick={() => move(-1)} aria-label="Move left">←</button>
              <button onClick={() => move(5)} aria-label="Move down">↓</button>
              <button onClick={() => move(1)} aria-label="Move right">→</button>
            </div>}
      </div>
      <p className="game-hint">MOVE WITH ARROWS OR WASD</p>
    </div>
  );
}
