"use client";
import { useEffect, useReducer, useRef, useState } from "react";
import { gameReducer, initialGame } from "./game-engine";

export default function NightShift({ active = true }: { active?: boolean }) {
  const [state, dispatch] = useReducer(gameReducer, initialGame);
  const [best, setBest] = useState(0);
  const area = useRef<HTMLDivElement>(null);
  useEffect(() => { try { const n = Number(localStorage.getItem("temitayo-math-best-v1")); if (Number.isFinite(n) && n > 0) setBest(n); } catch {} }, []);
  useEffect(() => { if (!active) dispatch({ type: "pause" }); }, [active]);
  useEffect(() => { const pause = () => { if (document.hidden) dispatch({ type: "pause" }); }; document.addEventListener("visibilitychange", pause); return () => document.removeEventListener("visibilitychange", pause); }, []);
  useEffect(() => { if (state.score > best) { setBest(state.score); try { localStorage.setItem("temitayo-math-best-v1", String(state.score)); } catch {} } }, [state.score, best]);
  function start() {
    const seed = typeof crypto !== "undefined" ? crypto.getRandomValues(new Uint32Array(1))[0] : Date.now();
    dispatch({ type: "start", seed }); area.current?.focus();
  }
  function move(dx: number, dy: number) { dispatch({ type: "move", dx, dy }); area.current?.focus(); }
  return <div className="math-game" ref={area} tabIndex={0} role="group" aria-label="Endless math walk. Arrow keys or WASD to move." onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) dispatch({ type: "pause" }); }} onKeyDown={e => {
    if (!state.running || e.ctrlKey || e.metaKey || e.altKey) return;
    const keys: Record<string, [number, number]> = { ArrowUp: [0,-1], w:[0,-1], ArrowDown:[0,1], s:[0,1], ArrowLeft:[-1,0], a:[-1,0], ArrowRight:[1,0], d:[1,0] };
    const delta = keys[e.key]; if (delta) { e.preventDefault(); dispatch({ type:"move", dx:delta[0],dy:delta[1] }); }
  }}>
    <div className="game-heading"><span>THE INFINITE MARGIN</span><span>∞</span></div>
    <div className="equation" aria-live="polite">{state.started ? state.round.question + " = ?" : "Shall we wander?"}</div>
    <div className="game-board" aria-label="Seven by five game board">
      {Array.from({length:35},(_,i)=> {
        const choice = state.round.choices.find(c=>c.cell===i);
        return <div key={i} className={`math-cell ${state.position===i?"is-player":""} ${choice?"has-answer":""}`} aria-label={state.position===i?"Your position, row "+(Math.floor(i/7)+1)+", column "+(i%7+1):choice?"Answer "+choice.value:undefined}>
          {state.position===i ? <span className="walker" aria-hidden="true">✳</span> : choice ? choice.value : <i aria-hidden="true">·</i>}
        </div>;
      })}
    </div>
    <p className="game-message" aria-live="polite">{state.started&&!state.running?"Paused. Your place is saved.":state.message}</p>
    <div className="game-score"><span>SOLVED <b>{state.score}</b></span><span>MISSES <b>{state.misses}</b></span><span>BEST <b>{best}</b></span></div>
    <div className="game-actions">
      {!state.started ? <button onClick={start}>Start wandering ↗</button> : <>
        <button onClick={()=>{dispatch({type:state.running?"pause":"resume"});area.current?.focus();}}>{state.running?"Pause":"Resume"}</button>
        <button onClick={start}>New walk</button>
      </>}
      <div className="dpad" aria-label="Direction controls">
        <button disabled={!state.running} onClick={()=>move(-1,0)} aria-label="Move left">←</button>
        <button disabled={!state.running} onClick={()=>move(0,-1)} aria-label="Move up">↑</button>
        <button disabled={!state.running} onClick={()=>move(0,1)} aria-label="Move down">↓</button>
        <button disabled={!state.running} onClick={()=>move(1,0)} aria-label="Move right">→</button>
      </div>
    </div>
    <small>ARROWS / WASD / BUTTONS · NO FINISH LINE</small>
  </div>;
}
