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
    rank: "K",
    suit: "spades",
    title: "HLPR",
    kicker: "Spades · Campus product",
    description: "A private workspace for Hunter students to coordinate class life.",
    lines: ["Next.js · React", "Supabase Auth · Postgres", "Course discussions · shared tasks · syllabus"],
    link: { label: "Open the HLPR repo", href: "https://github.com/Temitayo-Babarinde/HLPR-Project-1" },
  },
  {
    rank: "10",
    suit: "spades",
    title: "Strategy Lab",
    kicker: "Spades · Daytona HackSprint",
    description: "An AI safety prototype that runs generated strategies in an isolated sandbox and flags lookahead leakage.",
    lines: ["Daytona sandboxes · Arize / Phoenix traces", "Bounded repair with Amazon Bedrock", "Synthetic data · not a performance claim"],
    link: { label: "Open the Strategy Lab repo", href: "https://github.com/Temitayo-Babarinde/strategy-lab" },
  },
  {
    rank: "9",
    suit: "spades",
    title: "AI Startup Tracker",
    kicker: "Spades · Research tool",
    description: "Tracks startup activity and turns findings into concise briefs.",
    lines: ["Startup research", "Activity briefs"],
  },
  {
    rank: "8",
    suit: "spades",
    title: "Solar Time",
    kicker: "Spades · Data exploration",
    description: "An interactive exploration of daylight and seasonal change.",
    lines: ["Daylight patterns", "Seasonal change"],
  },
  {
    rank: "7",
    suit: "spades",
    title: "Nightmare FPS",
    kicker: "Spades · Game project",
    description: "An atmospheric shooter experiment focused on momentum and pacing.",
    lines: ["Movement systems", "Collision response", "Level scripting"],
  },
  {
    rank: "A",
    suit: "diamonds",
    title: "Programming languages",
    kicker: "Diamonds · Programming",
    description: "Languages I use to build software and explore ideas.",
    lines: ["Python · C++ · Go", "JavaScript · TypeScript", "HTML · CSS"],
  },
  {
    rank: "9",
    suit: "diamonds",
    title: "Web stack",
    kicker: "Diamonds · Web development",
    description: "Tools I use to build and connect web applications.",
    lines: ["React · Next.js · Node.js", "Supabase", "PostgreSQL"],
  },
  {
    rank: "8",
    suit: "diamonds",
    title: "Interactive tools",
    kicker: "Diamonds · Games & design",
    description: "Tools for prototyping mechanics and shaping visual experiences.",
    lines: ["Godot", "Game systems", "Visual design"],
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
    rank: "K",
    suit: "hearts",
    title: "About me",
    kicker: "Hearts · Interests",
    description: "I like building where careful systems meet visual creativity.",
    lines: ["Backend systems · AI products", "Interactive software · game design", "Open to 2027 opportunities"],
  },
];

const symbols = { diamonds: "♦", spades: "♠", hearts: "♥", clubs: "♣" };
const suitRows: { suit: CardInfo["suit"]; label: string }[] = [
  { suit: "spades", label: "Projects" },
  { suit: "diamonds", label: "Skills" },
  { suit: "hearts", label: "Interests" },
  { suit: "clubs", label: "Profile" },
];

export default function Page() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

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
          <span className="flip-hint"><i aria-hidden="true">↻</i> Click or tap to reveal</span>
        </div>
      </section>

      <section className="card-table" id="hand" aria-label="Projects, skills, interests, and profile cards, grouped by suit.">
        <div className="table-caption">
          <span>THE DECK</span>
          <span className="suit-key" aria-label="Suit guide">
            <span><b>♦</b> Skills</span><span><b>♠</b> Projects</span><span><b>♥</b> Interests</span><span><b>♣</b> Profile</span>
          </span>
          <span>01 — {String(cards.length).padStart(2, "0")}</span>
        </div>
        <div className="suit-rows">
          {suitRows.map(({ suit, label }) => {
            const suitCards = cards.flatMap((card, index) => card.suit === suit ? [{ card, index }] : []);
            return (
              <section className={`suit-row suit-row-${suit}`} key={suit} aria-labelledby={`suit-title-${suit}`}>
                <div className="suit-row-heading">
                  <span aria-hidden="true">{symbols[suit]}</span>
                  <h2 id={`suit-title-${suit}`}>{label}</h2>
                  <small>{String(suitCards.length).padStart(2, "0")} cards</small>
                </div>
                <div className="cards-row">
                  {suitCards.map(({ card, index }) => (
                    <article
                      className={`playing-card suit-${card.suit}${card.identity ? " identity-card is-open" : activeCard === index ? " is-open" : ""}`}
                      key={`${card.rank}-${card.title}`}
                    >
                      <button
                        className="card-back"
                        type="button"
                        aria-label={`${activeCard === index ? "Turn back" : "Reveal"} ${card.title}`}
                        aria-expanded={card.identity || activeCard === index}
                        aria-controls={`card-front-${index}`}
                        onClick={() => setActiveCard(activeCard === index ? null : index)}
                      >
                        <span className="back-index">{card.rank}{symbols[card.suit]}</span>
                        <span className="back-ornament" aria-hidden="true"><i>{symbols[card.suit]}</i></span>
                        <span className="back-caption">TEMITAYO · 2026</span>
                      </button>
                      <div className="card-front" id={`card-front-${index}`}>
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
                              setActiveCard(null);
                              event.currentTarget.closest(".playing-card")?.querySelector<HTMLButtonElement>(".card-back")?.focus();
                            }}
                          >
                            ↶
                          </button>
                        )}
                        <div className="card-foot"><span>TB</span><span>{symbols[card.suit]}</span><span>{String(index + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}</span></div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
        <p className="fan-note">The Jack stays face up. Spades hold the projects; turn each card to see what went into it.</p>
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
