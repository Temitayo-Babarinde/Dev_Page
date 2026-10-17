"use client";

import { useState } from "react";

type CardInfo = {
  rank: string;
  suit: "diamonds" | "spades" | "hearts" | "clubs";
  title: string;
  kicker: string;
  description: string;
  lines: string[];
  link?: { label: string; href: string };
  identity?: boolean;
};

const cards: CardInfo[] = [
  {
    rank: "Q",
    suit: "spades",
    title: "More experiments",
    kicker: "Spades · Side projects",
    description: "Small builds across data, sunlight, and game systems.",
    lines: [
      "AI Startup Tracker · startup activity briefs",
      "Solar Time · daylight and seasonal change",
      "Nightmare FPS · systems-driven horror game",
    ],
    link: { label: "Browse my GitHub", href: "https://github.com/Temitayo-Babarinde" },
  },
  {
    rank: "A",
    suit: "diamonds",
    title: "Languages",
    kicker: "Diamonds · Programming",
    description: "The languages I use to explore and build.",
    lines: [
      "Python · C++ · Go",
      "JavaScript · TypeScript",
      "HTML · CSS",
    ],
  },
  {
    rank: "K",
    suit: "spades",
    title: "HLPR",
    kicker: "Spades · Campus product",
    description: "A private workspace for Hunter students to coordinate class life.",
    lines: ["Next.js · React", "Supabase Auth · Postgres", "Course discussions · shared tasks · syllabus"],
    link: { label: "Open the HLPR repo", href: "https://github.com/Temitayo-Babarinde/HLPR-Project-1" },
  },
  {
    rank: "J",
    suit: "clubs",
    title: "Temitayo Babarinde",
    kicker: "Clubs · The person behind the work",
    description: "Freshman at Hunter College studying computer science and mathematics.",
    lines: ["Based in Queens, New York", "Grew up in Nigeria"],
    link: { label: "Say hello on LinkedIn", href: "https://www.linkedin.com/in/temitayo-babarinde-4198202a2" },
    identity: true,
  },
  {
    rank: "10",
    suit: "spades",
    title: "Strategy Lab",
    kicker: "Spades · Built at Daytona HackSprint",
    description: "An AI safety prototype that runs generated strategies in an isolated sandbox and flags lookahead leakage.",
    lines: ["Daytona sandboxes · Arize / Phoenix traces", "Bounded repair with Amazon Bedrock", "Synthetic data · not a performance claim"],
    link: { label: "Open the Strategy Lab repo", href: "https://github.com/Temitayo-Babarinde/strategy-lab" },
  },
  {
    rank: "K",
    suit: "hearts",
    title: "About me",
    kicker: "Hearts · Interests",
    description: "I like building where careful systems meet visual creativity.",
    lines: ["Backend systems · AI products", "Interactive software · game design", "Open to 2027 opportunities"],
  },
  {
    rank: "9",
    suit: "diamonds",
    title: "Web & data tools",
    kicker: "Diamonds · Frameworks & data",
    description: "Tools I reach for across web products and interactive work.",
    lines: ["React · Next.js · Node.js", "Supabase · PostgreSQL", "Godot · game systems · visual design"],
  },
];

const symbols = { diamonds: "♦", spades: "♠", hearts: "♥", clubs: "♣" };

export default function Page() {
  const [openCards, setOpenCards] = useState<Set<number>>(() => new Set([3]));

  return (
    <main id="top">
      <a className="skip-link" href="#hand">Skip to the cards</a>
      <header className="topbar">
        <a className="monogram" href="#top" aria-label="Temitayo Babarinde home">TB<span>.</span></a>
        <p>New York <span>·</span> Hunter College</p>
        <nav aria-label="Main navigation">
          <a href="#hand">The hand</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="intro" aria-labelledby="page-title">
        <p className="eyebrow">A developer’s deck · 2026</p>
        <h1 id="page-title">Jack of <em>all trades.</em></h1>
        <div className="intro-bottom">
          <p>Pick a card. My skills, projects, and the story behind them are in the hand.</p>
          <span className="flip-hint"><i aria-hidden="true">↻</i> Hover or tap to reveal</span>
        </div>
      </section>

      <section className="card-table" id="hand" aria-label="A fan of playing cards. Hover, focus, or tap a card to reveal its details.">
        <div className="table-caption">
          <span>THE DECK</span>
          <span className="suit-key" aria-label="Suit guide">
            <span><b>♦</b> Skills</span><span><b>♠</b> Projects</span><span><b>♥</b> Interests</span><span><b>♣</b> Profile</span>
          </span>
          <span>01 — 07</span>
        </div>
        <div className="fan">
          {cards.map((card, index) => (
            <details
              className={`playing-card suit-${card.suit}${card.identity ? " identity-card" : ""}`}
              key={`${card.rank}-${card.title}`}
              open={openCards.has(index)}
              onToggle={(event) => {
                const isOpen = event.currentTarget.open;
                setOpenCards((current) => {
                  if (current.has(index) === isOpen) return current;
                  const next = new Set(current);
                  if (isOpen) next.add(index);
                  else next.delete(index);
                  return next;
                });
              }}
              style={{ "--card-index": index } as React.CSSProperties}
            >
              <summary className="card-back" aria-label={`Reveal ${card.title}`}>
                <span className="back-index">{card.rank}{symbols[card.suit]}</span>
                <span className="back-ornament" aria-hidden="true"><i>{symbols[card.suit]}</i></span>
                <span className="back-caption">TEMITAYO · 2026</span>
              </summary>
              <div className="card-front">
                <div className="card-corner" aria-hidden="true"><b>{card.rank}</b><span>{symbols[card.suit]}</span></div>
                <div className="card-copy">
                  <p className="card-kicker">{card.kicker}</p>
                  <h2>{card.title}</h2>
                  {card.identity && <p className="identity-mark">JACK <span>OF ALL TRADES</span></p>}
                  <p className="card-description">{card.description}</p>
                  <ul>{card.lines.map((line) => <li key={line}>{line}</li>)}</ul>
                  {card.link && <a className="card-link" href={card.link.href} target="_blank" rel="noreferrer">{card.link.label}<span aria-hidden="true">↗</span></a>}
                </div>
                {!card.identity && (
                  <button
                    className="card-close"
                    type="button"
                    aria-label={`Turn ${card.title} back over`}
                    onClick={(event) => {
                      setOpenCards((current) => {
                        if (!current.has(index)) return current;
                        const next = new Set(current);
                        next.delete(index);
                        return next;
                      });
                      event.currentTarget.closest("details")?.querySelector("summary")?.focus();
                    }}
                  >
                    ↶
                  </button>
                )}
                <div className="card-foot"><span>TB</span><span>{symbols[card.suit]}</span><span>{String(index + 1).padStart(2, "0")} / 07</span></div>
              </div>
            </details>
          ))}
        </div>
        <p className="fan-note">The Jack stays face up. The rest are yours to turn over.</p>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Want to build something?</p>
        <h2>Let’s play<br /><em>a good hand.</em></h2>
        <div className="contact-row">
          <p>Interested in software internships, hackathons, ambitious collaborators, and projects worth caring about.</p>
          <div className="contact-links">
            <a href="https://github.com/Temitayo-Babarinde" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <a href="https://www.linkedin.com/in/temitayo-babarinde-4198202a2" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          </div>
        </div>
        <footer><span>© {new Date().getFullYear()} Temitayo Babarinde</span><a href="#top">Back to top ↑</a></footer>
      </section>
    </main>
  );
}
