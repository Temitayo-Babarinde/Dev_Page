const projects = [
  {
    number: "01",
    name: "HLPR",
    note: "A workspace for Hunter students",
    description:
      "I built HLPR to give classmates one place to find their course section, talk with other students, keep shared tasks, and work from a living syllabus.",
    details: "Next.js · React · Supabase · PostgreSQL",
    links: [
      { label: "Open the app", href: "https://hlpr-hunter.vercel.app" },
      { label: "Source code", href: "https://github.com/Temitayo-Babarinde/HLPR-Project-1" },
    ],
  },
  {
    number: "02",
    name: "Strategy Lab",
    note: "A one-day hackathon demo",
    description:
      "A small experiment in checking AI-generated trading strategies for lookahead leakage. It runs a seeded failure, checks the result, and makes one bounded repair.",
    details: "Python · Daytona · Arize Phoenix · Amazon Bedrock",
    links: [
      { label: "Source code", href: "https://github.com/Temitayo-Babarinde/strategy-lab" },
    ],
  },
];

export default function Page() {
  return (
    <main id="top">
      <a className="skip-link" href="#work">Skip to projects</a>

      <header className="site-header">
        <a className="site-name" href="#top">Temitayo Babarinde</a>
        <nav aria-label="Main navigation">
          <a href="#work">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Links</a>
        </nav>
      </header>

      <section className="intro" aria-labelledby="intro-title">
        <p className="eyebrow">Computer Science &amp; Mathematics · Hunter College</p>
        <h1 id="intro-title">I’m Temitayo.<br />I’m learning by <em>building.</em></h1>
        <div className="intro-bottom">
          <p className="intro-bio">
            I study computer science and mathematics at Hunter. Outside class, I build software,
            explore ideas, and try to understand what makes a tool useful to the people using it.
          </p>
          <p className="intro-location">Queens, New York<br />Class of 2030</p>
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-topline">
          <p className="eyebrow">A few things I’ve worked on</p>
          <span>PROJECTS / 2026</span>
        </div>
        <h2 id="work-title" className="visually-hidden">Projects</h2>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.name}>
              <span className="project-number">{project.number}</span>
              <div className="project-main">
                <p className="project-note">{project.note}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-details">{project.details}</p>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}<span aria-hidden="true"> ↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="project-caveat">
          Strategy Lab uses synthetic data for a repeatable demo. Its checks are educational and do not show that a trading strategy is profitable or safe for live use.
        </p>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="section-topline">
          <p className="eyebrow">A little about me</p>
          <span>ABOUT / 2026</span>
        </div>
        <div className="about-content">
          <h2 id="about-title">Math, art, and programming are the things I keep coming back to.</h2>
          <div className="about-copy">
            <p>
              I’m a freshman at Hunter College in New York. I grew up in Nigeria and now live in Queens.
              I’m early in my computer science journey, so this site is a record of what I’m learning and making.
            </p>
            <p>
              I’m interested in software engineering, AI and machine learning, and interactive projects.
              I want to keep getting better at the fundamentals while building things people can actually use.
            </p>
          </div>
        </div>
      </section>

      <section className="tools-section" aria-labelledby="tools-title">
        <div className="section-topline">
          <p className="eyebrow">Tools I’ve used</p>
          <span>NOT A CHECKLIST</span>
        </div>
        <h2 id="tools-title">Still learning, still adding.</h2>
        <p className="tools-list">Python · C++ · Go · JavaScript · TypeScript · React · Next.js · Supabase · PostgreSQL · Godot</p>
      </section>

      <footer className="contact-section" id="contact">
        <div className="contact-top">
          <p className="eyebrow">Find me elsewhere</p>
          <span>CONTACT / 2026</span>
        </div>
        <h2>Thanks for stopping by.</h2>
        <div className="contact-bottom">
          <p>If you’re working on something interesting, I’d be glad to hear about it.</p>
          <div className="contact-links">
            <a href="https://github.com/Temitayo-Babarinde" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/temitayo-babarinde-4198202a2" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <div className="footer-line"><span>© {new Date().getFullYear()} Temitayo Babarinde</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
