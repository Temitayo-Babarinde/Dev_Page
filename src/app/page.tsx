import NightShift from "../components/NightShift";

const projects = [
  {
    number: "01",
    name: "HLPR",
    kind: "A tool for college life",
    copy: "A shared workspace for Hunter students: find your course section, stay in touch with classmates, keep track of tasks, and work from a living syllabus.",
    stack: ["Next.js", "React", "Supabase", "PostgreSQL"],
    live: "https://hlpr-hunter.vercel.app",
    source: "https://github.com/Temitayo-Babarinde/HLPR-Project-1",
    color: "blue",
    stamp: "MADE FOR HUNTER",
  },
  {
    number: "02",
    name: "Strategy Lab",
    kind: "A hackathon experiment",
    copy: "A small system for checking AI-generated trading strategies for lookahead leakage, replaying a seeded failure, and trying one bounded repair.",
    stack: ["Python", "Daytona", "Arize Phoenix", "Amazon Bedrock"],
    source: "https://github.com/Temitayo-Babarinde/strategy-lab",
    color: "orange",
    stamp: "ONE-DAY BUILD",
  },
];

export default function Page() {
  return (
    <main id="top">
      <a className="skip-link" href="#work">Skip to projects</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Temitayo Babarinde, home">
          <span className="brand-mark">TB</span>
          <span>Temitayo Babarinde</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work <sup>02</sup></a>
          <a href="#sidequest">Side quest</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="intro-title">
        <div className="hero-main">
          <div className="hero-kicker">
            <span className="eyebrow">Computer science &amp; mathematics</span>
            <span className="hero-location">Hunter College · Queens, NY</span>
          </div>
          <h1 id="intro-title">Temitayo<br /><em>Babarinde</em></h1>
          <div className="hero-bottom">
            <p className="hero-bio">
              I like figuring out how something works, then building a version I can actually use.
              I’m studying CS and math at Hunter and making things along the way.
            </p>
            <a className="round-link" href="#work" aria-label="Explore selected work">↓</a>
          </div>
        </div>

        <aside className="hero-note" aria-label="A few things about me">
          <div className="note-top"><span>FIELD NOTE 001</span><span>NYC</span></div>
          <p className="note-title">A few things<br />I keep close.</p>
          <ul className="note-list">
            <li><span>01</span> math that explains the world</li>
            <li><span>02</span> software people can use</li>
            <li><span>03</span> art, games, and good questions</li>
          </ul>
          <span className="note-scribble" aria-hidden="true">∞</span>
        </aside>
        <div className="hero-index" aria-hidden="true"><span>PERSONAL SITE</span><span>2026—</span></div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div><span className="eyebrow">Selected work</span><h2 id="work-title">Things I’ve made<span className="period">.</span></h2></div>
          <p>Small projects, built to learn<br />by making something real.</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className={`project project-${project.color}`} key={project.name}>
              <div className="project-index">
                <span>{project.number}</span>
                <span className="project-stamp">{project.stamp}</span>
              </div>
              <div className="project-body">
                <p className="project-kind">{project.kind}</p>
                <h3>{project.name}</h3>
                <p className="project-copy">{project.copy}</p>
                <ul className="project-stack" aria-label="Technologies used">
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="project-links">
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer">Visit HLPR <span aria-hidden="true">↗</span></a>}
                  <a href={project.source} target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></a>
                </div>
              </div>
              <span className="project-ornament" aria-hidden="true">{project.number === "01" ? "H" : "∑"}</span>
            </article>
          ))}
        </div>
        <p className="project-footnote">Strategy Lab is a synthetic-data demo for exploring evaluation and bounded repair; it does not show that a trading strategy is profitable or safe for live use.</p>
      </section>

      <section className="sidequest-section" id="sidequest" aria-labelledby="sidequest-title">
        <div className="sidequest-copy">
          <span className="eyebrow">After hours · optional</span>
          <h2 id="sidequest-title">A little detour<span className="period">.</span></h2>
          <p>A tiny night-walk game. Pick up five drifting symbols before the timer runs out. Use the arrow keys or the on-screen controls.</p>
          <span className="sidequest-note">A side project idea, made playable.</span>
        </div>
        <NightShift />
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-label"><span className="eyebrow">A little about me</span><span className="about-doodle" aria-hidden="true">✳</span></div>
        <div className="about-main">
          <h2 id="about-title">Learning the tools.<br /><em>Making my own way.</em></h2>
          <div className="about-details">
            <p>I’m a freshman at Hunter College studying computer science and mathematics. I grew up in Nigeria and live in Queens.</p>
            <p>I’m drawn to software engineering, AI and machine learning, and interactive projects. I’m still building my foundations—and I like learning by making things that solve a real problem or make an idea easier to explore.</p>
          </div>
          <div className="about-tags"><span>Python</span><span>C++</span><span>Go</span><span>JavaScript</span><span>TypeScript</span><span>React</span><span>Next.js</span><span>Supabase</span><span>Godot</span></div>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="contact-top"><span className="eyebrow">The next page</span><span>OPEN TO GOOD CONVERSATIONS</span></div>
        <div className="contact-main">
          <h2>Say hello<span className="period">.</span></h2>
          <div className="contact-links">
            <a href="https://github.com/Temitayo-Babarinde" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
            <a href="https://www.linkedin.com/in/temitayo-babarinde-4198202a2" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          </div>
        </div>
        <div className="footer-line"><span>Temitayo Babarinde · Queens, NY</span><a href="#top">Back to the top ↑</a></div>
      </footer>
    </main>
  );
}
