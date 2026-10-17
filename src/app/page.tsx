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
    kicker: "Selected projects",
    description: "A few other ideas I’ve explored across data, tools, and games.",
    lines: [
      "AI Startup Tracker — startup activity into a focused daily brief.",
      "Solar Time — daylight, sunrise, and seasonal change over time.",
      "Nightmare FPS — momentum, toxic zones, and environmental storytelling.",
    ],
    link: { label: "Browse my GitHub", href: "https://github.com/Temitayo-Babarinde" },
  },
  {
    rank: "A",
    suit: "diamonds",
    title: "Skills & tools",
    kicker: "What I work with",
    description: "A growing toolkit for building across software, data, and interactive experiences.",
    lines: [
      "Languages · Python, C++, JavaScript, Go, HTML, CSS, TypeScript",
      "Web · React, Next.js, Node.js",
      "Data · Supabase, PostgreSQL",
      "Creative · Godot, game systems, visual design",
    ],
  },
  {
    rank: "K",
    suit: "spades",
    title: "HLPR",
    kicker: "Student collaboration · Hunter College",
    description: "A private class workspace for Hunter students to find their course section, talk with classmates, share tasks, and keep a living syllabus together.",
    lines: ["Next.js 16 + React 19", "Supabase Auth + Postgres", "Realtime discussions · shared tasks · class syllabus"],
    link: { label: "Open the HLPR repo", href: "https://github.com/Temitayo-Babarinde/HLPR-Project-1" },
  },
  {
    rank: "J",
    suit: "clubs",
    title: "Temitayo Babarinde",
    kicker: "Jack of all trades",
    description: "Student developer, curious builder, and lifelong learner.",
    lines: ["Freshman · Hunter College", "Computer Science + Mathematics", "Queens, New York · grew up in Nigeria", "Looking for 2027 opportunities"],
    link: { label: "Say hello on LinkedIn", href: "https://www.linkedin.com/in/temitayo-babarinde-4198202a2" },
    identity: true,
  },
  {
    rank: "10",
    suit: "spades",
    title: "Strategy Lab",
    kicker: "AI safety demo · Daytona HackSprint",
    description: "A research prototype that runs a generated trading candidate in an isolated Daytona sandbox, checks for lookahead leakage, and traces a bounded repair loop.",
    lines: ["Python · Daytona · Arize / Phoenix", "Amazon Bedrock repair path", "Synthetic data · not evidence of trading performance"],
    link: { label: "Open the Strategy Lab repo", href: "https://github.com/Temitayo-Babarinde/strategy-lab" },
  },
  {
    rank: "K",
    suit: "hearts",
    title: "About me",
    kicker: "Learning in public",
    description: "I’m interested in backend systems, AI products, and small design decisions that make software easier to use.",
    lines: ["Studying Computer Science + Mathematics", "Building HLPR for the Hunter community", "Interested in web, AI, and interactive systems"],
  },
  {
    rank: "8",
    suit: "clubs",
    title: "Daytona HackSprint",
    kicker: "Hackathon · New York City · 2026",
    description: "A one-day build sprint at the frontier of AI. I participated solo and built Strategy Lab around the Daytona and Arize tools.",
    lines: ["Sponsor tools · Daytona + Arize", "Project · eval-gated backtest demo", "Also explored AWS Bedrock for bounded repairs"],
    link: { label: "See the project", href: "https://github.com/Temitayo-Babarinde/strategy-lab" },
  },
];

const symbols = { diamonds: "♦", spades: "♠", hearts: "♥", clubs: "♣" };

export default function Page() {
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
        <div className="table-caption"><span>THE DECK</span><span>01 — 07</span></div>
        <div className="fan">
          {cards.map((card, index) => (
            <details
              className={`playing-card suit-${card.suit}${card.identity ? " identity-card" : ""}`}
              key={`${card.rank}-${card.title}`}
              open={card.identity}
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
