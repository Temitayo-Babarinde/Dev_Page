"use client";
import { useEffect, useRef, useState } from "react";
import InkDrawing from "../components/InkDrawing";
import NightShift from "../components/NightShift";

const sections = ["Hello", "Repositories", "Languages", "Skills", "Math room"];
const repos = [
 {name:"HLPR",repo:"HLPR-Project-1",tag:"A home for your classes",description:"Course sections, class conversations, shared tasks and a living syllabus for Hunter students.",stack:"Next.js · Supabase",drawing:"laptop" as const,tone:"mint"},
 {name:"Strategy Lab",repo:"strategy-lab",tag:"An experiment in evaluation",description:"A synthetic-data demo that checks AI-generated backtests for future-data leakage and tries a bounded repair.",stack:"Python · Daytona · Arize",drawing:"orbit" as const,tone:"peach"},
 {name:"NeetCode",repo:"neetcode-submissions",tag:"Working through the fundamentals",description:"My data structures and algorithms practice, collected as I learn.",stack:"Algorithms · Problem solving",drawing:"orbit" as const,tone:"blue"},
 {name:"This notebook",repo:"Dev_Page",tag:"The page you are inside",description:"A place for my projects, experiments, and a little mathematics in the margins.",stack:"Next.js · React · TypeScript",drawing:"laptop" as const,tone:"yellow"},
];
const languages = [
 ["Python","Scripting, coursework & experiments","print(\"hello\")"],
 ["C++","Learning systems & problem solving","int main() { }"],
 ["JavaScript","Making the browser respond","() => something()"],
 ["TypeScript","Giving JavaScript a little structure","type Idea = { }"],
 ["Go","Another way to think about programs","func main() { }"],
 ["HTML / CSS","The structure & feel of a page","<main>…</main>"],
];

export default function Page() {
 const [opened,setOpened]=useState(false);
 const [page,setPage]=useState(0);
 const [direction,setDirection]=useState(1);
 const [opening,setOpening]=useState(false);
 const title=useRef<HTMLHeadingElement>(null);
 const openButton=useRef<HTMLButtonElement>(null);
 const strip=useRef<HTMLDivElement>(null);
 const timeout=useRef<ReturnType<typeof setTimeout>|null>(null);
 useEffect(()=>()=>{if(timeout.current)clearTimeout(timeout.current);},[]);
 function openBook(index=0) {
   setPage(index);setOpened(true);setOpening(true);
   if(timeout.current)clearTimeout(timeout.current);
   timeout.current=setTimeout(()=>{setOpening(false);title.current?.focus();},1050);
 }
 function turn(index:number) { if(index===page)return;setDirection(index>page?1:-1);setPage(index); requestAnimationFrame(()=>title.current?.focus()); }
 function closeBook() { setOpened(false);setOpening(false);if(timeout.current)clearTimeout(timeout.current); requestAnimationFrame(()=>openButton.current?.focus()); }
 return <main className={`notebook-world ${opened?"is-open":""}`}>
   <section className="front-scene" hidden={opened} aria-label="Introduction">
     <header className="front-header"><span className="ink-signature">tb.</span><span className="tiny">TEMITAYO BABARINDE</span><span className="prototype-label">a work in progress</span></header>
     <div className="margin-maths" aria-hidden="true"><span>∑</span><span>f(x)</span><span>01</span><span>∞</span><span>{"{ }"}</span><span>π</span><span>√</span></div>
     <div className="front-composition">
       <div className="name-note"><span className="hand small-note">a few pages from</span><h1>Temitayo<br/><span>Babarinde.</span></h1><p>CS &amp; mathematics at Hunter.<br/>Code, curiosity, and a pencil nearby.</p><div className="sketched-arrow" aria-hidden="true">⤵</div></div>
       <figure className="portrait-study"><img src="/portrait.svg" alt="Line-art portrait of Temitayo Babarinde" width={1262} height={1246} style={{width:"100%",height:"auto"}}/></figure>
       <div className="thought-note"><span className="tiny">A NOTE FROM THE MARGINS</span><p className="hand">Oh, hello.<br/>Come have a look around.</p><svg viewBox="0 0 100 60" aria-hidden="true"><path d="M95 3 Q32 -8 16 45 M9 33 L15 49 L33 43" fill="none" stroke="currentColor" strokeWidth="2"/></svg></div>
       <button ref={openButton} className="little-book" onClick={()=>openBook()} aria-label="Open my notebook">
         <span className="mini-spine" aria-hidden="true"/>
         <span className="tiny">VOL. 01 / ALWAYS IN PROGRESS</span>
         <span className="hand book-name">My<br/>notebook.</span>
         <InkDrawing kind="orbit"/>
         <span className="hand open-label">open me ↗</span>
       </button>
       <span className="hand notebook-caption">the interesting bits are in here ↑</span>
     </div>
     <footer className="front-footer"><span className="tiny">QUEENS, NEW YORK</span><nav aria-label="Go straight to a section"><button onClick={()=>openBook(1)}>my projects ↗</button><button onClick={()=>openBook(2)}>languages ↗</button><button onClick={()=>openBook(4)}>play a little ↗</button></nav><span className="hand">take your time.</span></footer>
   </section>

   <section className="desk-scene" hidden={!opened} aria-label="Interactive notebook">
     <header className="desk-header"><button onClick={closeBook}>← close notebook</button><span className="hand">Temitayo’s working notebook</span><a href="https://github.com/Temitayo-Babarinde" target="_blank" rel="noreferrer">GitHub ↗</a></header>
     <div className={`book-shell ${opening?"book-opening":""}`}>
       <div className="paper-edges" aria-hidden="true"/>
       <div className="book-binding" hidden={page===1} aria-hidden="true">{Array.from({length:13},(_,i)=><i key={i}/>)}</div>
       <div className="book-pages" data-direction={direction} style={page===1?{background:"radial-gradient(#88806112 .6px,transparent .9px) 0 0/4px 4px,#f8f4e7"}:undefined}>
         <div className="spread-heading"><span className="tiny">TEMITAYO / PERSONAL NOTEBOOK</span><h2 ref={title} tabIndex={-1} className="visually-hidden">{sections[page]}</h2><span className="tiny">{String(page+1).padStart(2,"0")} / 05</span></div>
         <section className="spread intro-spread" hidden={page!==0} aria-label="About me">
           <div className="paper-page welcome-page"><span className="page-kicker">01 — A QUICK INTRODUCTION</span><h3 className="hand">Hello,<br/>I’m Temitayo<span className="ink-dot">.</span></h3><p>I’m a freshman at Hunter College studying computer science and mathematics. I live in Queens, New York.</p><p>I build things to put what I’m learning into practice. Sometimes that’s a tool for classmates. Sometimes it’s an experiment or a game.</p><InkDrawing kind="laptop" className="welcome-doodle"/><span className="hand marginalia">usually a few tabs open…</span></div>
           <div className="paper-page contents-page"><span className="page-kicker">A MAP, IF YOU NEED ONE</span><h3 className="hand">In this notebook</h3><nav aria-label="Notebook contents">{sections.slice(1).map((name,i)=><button key={name} onClick={()=>turn(i+1)}><span className="tiny">0{i+2}</span><span className="hand">{name}</span><span>↗</span></button>)}</nav><p className="hand contents-note">Things I’ve made,<br/>things I’m learning,<br/>and a place to play.</p><div className="personal-links"><a href="https://github.com/Temitayo-Babarinde" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/temitayo-babarinde-4198202a2" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
         </section>
         <section className="repo-spread" hidden={page!==1} aria-label="GitHub repository scrapbook">
           <div className="repo-title"><span className="page-kicker">02 — FROM MY GITHUB</span><h3 className="hand">A few things<br/>I’ve been making.</h3><p>Pull a thread. See where it goes.</p></div>
           <InkDrawing kind="hand" className="repo-hand"/>
           <div ref={strip} className="repo-strip" tabIndex={0} aria-label="Scroll through repositories">
             {repos.map((repo,i)=><a className={`repo-cutout ${repo.tone}`} key={repo.repo} href={`https://github.com/Temitayo-Babarinde/${repo.repo}`} target="_blank" rel="noreferrer">
               <div className="repo-card-top"><span className="repo-avatar">tb.</span><span><b>{repo.name}</b><small>Temitayo-Babarinde</small></span><span className="repo-link-arrow">↗</span></div>
               <div className="repo-poster"><span className="poster-number">0{i+1}</span><span className="poster-name hand">{repo.name}</span><InkDrawing kind={repo.drawing}/><span className="poster-caption hand">{repo.tag}</span></div>
               <p>{repo.description}</p><div className="repo-meta"><span>{repo.stack}</span><span>↗</span></div>
             </a>)}
           </div>
           <div className="repo-browse"><span className="hand">real code, rough edges &amp; all.</span><div><button aria-label="Previous repositories" onClick={()=>strip.current?.scrollBy({left:-300,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})}>←</button><button aria-label="Next repositories" onClick={()=>strip.current?.scrollBy({left:300,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})}>→</button></div></div>
         </section>
         <section className="spread language-spread" hidden={page!==2} aria-label="Programming languages">
           <div className="paper-page"><span className="page-kicker">03 — LANGUAGES</span><h3 className="hand">A few ways<br/>to say “hello”.</h3><div className="language-list">{languages.map(([name,note,code])=><div key={name}><span className="hand">{name}</span><small>{note}</small><code>{code}</code></div>)}</div></div>
           <div className="paper-page language-notes"><p className="hand big-scribble">Learn it.<br/>Break it.<br/><span>Understand it.</span></p><InkDrawing kind="laptop"/><p>These are languages I’m learning and using. My repositories show what I’ve done with them.</p><button className="text-link hand" onClick={()=>turn(1)}>turn back to the projects ↶</button></div>
         </section>
         <section className="spread skill-spread" hidden={page!==3} aria-label="Skills and tools">
           <div className="paper-page"><span className="page-kicker">04 — THE TOOLBOX</span><h3 className="hand">Putting the<br/>pieces together.</h3><div className="skill-group"><h4 className="hand">On the web</h4><p>React · Next.js<br/>Supabase · PostgreSQL</p><small>Used together in HLPR.</small></div><div className="skill-group"><h4 className="hand">Experiments &amp; evaluation</h4><p>Python · Daytona<br/>Arize Phoenix · Amazon Bedrock</p><small>Used in the Strategy Lab demo.</small></div><div className="skill-group"><h4 className="hand">Interactive things</h4><p>Godot · browser games</p><small>Exploring how things move and respond.</small></div></div>
           <div className="paper-page skill-notes"><span className="hand pencil-note">the maths side of my brain →</span><InkDrawing kind="orbit"/><h4 className="hand">Still a student.<br/>Still figuring things out.</h4><p>My interests sit around software, mathematics, art, and interactive projects. I’m working on the fundamentals while finding places to use them.</p><button className="text-link hand" onClick={()=>turn(4)}>try the math room →</button></div>
         </section>
         <section className="spread math-spread" hidden={page!==4} aria-label="Endless math game">
           <div className="paper-page math-instructions"><span className="page-kicker">05 — A LITTLE SIDE QUEST</span><h3 className="hand">Maths in<br/>the margins<span className="ink-dot">.</span></h3><p>Move the little star onto the correct answer. Every answer opens another problem, with a fresh set of numbers in new places.</p><ol><li>Start a walk.</li><li>Use arrows, WASD, or the buttons.</li><li>Keep wandering as long as you like.</li></ol><p className="hand infinite-note">No countdown.<br/>No final level.<br/>Just one more question…</p><span className="math-doodle" aria-hidden="true">∞</span><small>“mod” means the remainder after division.</small></div>
           <div className="paper-page math-page"><NightShift active={opened&&page===4}/></div>
         </section>
         <div key={page} className="turn-shadow" aria-hidden="true"/>
         <footer className="book-footer"><button disabled={page===0} onClick={()=>turn(page-1)}>← previous page</button><span className="hand">{sections[page]} / {page+1}</span><button disabled={page===4} onClick={()=>turn(page+1)}>next page →</button></footer>
       </div>
       {opening&&<div className="cover-leaf" aria-hidden="true"><span className="hand">Temitayo’s<br/>notebook.</span><InkDrawing kind="orbit"/></div>}
       <nav className="book-tabs" aria-label="Notebook sections">{sections.map((name,i)=><button key={name} aria-current={page===i?"page":undefined} onClick={()=>turn(i)}><span className="tiny">0{i+1}</span><span className="hand">{name}</span></button>)}</nav>
     </div>
     <footer className="desk-footer"><span>CODE · MATHS · WORK IN PROGRESS</span><span>Made to be explored.</span></footer>
   </section>
 </main>;
}
