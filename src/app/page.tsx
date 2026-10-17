const projects = [
  {
    number: "01",
    name: "HLPR",
    category: "Student collaboration · Hunter College",
    description:
      "A private class workspace for Hunter students: find a course section, talk with classmates, share tasks, and keep a living syllabus in one place.",
    details: ["Next.js", "Supabase", "Postgres", "Row-level security"],
    href: "https://github.com/Temitayo-Babarinde/HLPR-Project-1",
    note: "Built for the campus I know",
  },
  {
    number: "02",
    name: "Strategy Lab",
    category: "AI safety demo · Daytona HackSprint",
    description:
      "A research prototype that runs a generated trading candidate in an isolated Daytona sandbox, checks for lookahead leakage, and traces the bounded repair loop.",
    details: ["Python", "Daytona", "Arize / Phoenix", "Amazon Bedrock"],
    href: "https://github.com/Temitayo-Babarinde/strategy-lab",
    note: "Synthetic data · not financial advice",
  },
];

const tools = ["Python", "C++", "JavaScript", "Go", "HTML / CSS"];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Page() {
  return (
    <main id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header page-grid">
        <a className="wordmark" href="#top" aria-label="Temitayo Babarinde home">TB<span>.</span></a>
        <p className="header-location">New York, NY <span>·</span> Hunter College</p>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div id="main-content">
        <section className="hero page-grid" aria-labelledby="hero-title">
          <p className="eyebrow hero-label">Computer Science + Mathematics</p>
          <div className="hero-copy">
            <h1 id="hero-title">I make software<br />that <em>does useful things.</em></h1>
            <div className="hero-foot">
              <p>I’m Temitayo Babarinde, a student developer at Hunter College. I build tools for learning, thoughtful AI experiments, and the people who use them.</p>
              <a className="text-link" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <p className="hero-index" aria-hidden="true">PORTFOLIO<br />2026 — NYC</p>
        </section>

        <section className="work section-grid" id="work" aria-labelledby="work-title">
          <div className="section-marker"><span>01</span><span>Selected work</span></div>
          <div className="section-content">
            <div className="section-intro">
              <h2 id="work-title">Built with a reason.</h2>
              <p>Two projects that show how I think: start with a real need, make the system work, and be clear about its limits.</p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project" key={project.number}>
                  <p className="project-number">{project.number}</p>
                  <div className="project-body">
                    <div className="project-heading">
                      <div>
                        <p className="project-category">{project.category}</p>
                        <h3>{project.name}</h3>
                      </div>
                      <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}><Arrow /></a>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-meta">
                      <ul aria-label={`${project.name} technologies`}>
                        {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                      </ul>
                      <p>{project.note}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about section-grid" id="about" aria-labelledby="about-title">
          <div className="section-marker"><span>02</span><span>About</span></div>
          <div className="section-content about-content">
            <h2 id="about-title">A student of systems<br />and the people inside them.</h2>
            <div className="about-columns">
              <p>I study Computer Science and Mathematics at Hunter College. I like the point where careful engineering meets a problem people recognize, whether that means helping classmates coordinate or making an AI system explain what it actually checked.</p>
              <div className="tool-list">
                <p className="eyebrow">Tools I’m learning and using</p>
                <ul>{tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section-grid" id="contact" aria-labelledby="contact-title">
          <div className="section-marker"><span>03</span><span>Contact</span></div>
          <div className="section-content contact-content">
            <p className="eyebrow">For good questions and good work</p>
            <h2 id="contact-title">Let’s make<br /><em>something useful.</em></h2>
            <div className="contact-bottom">
              <p>Interested in software internships, hackathons, or building with thoughtful people.</p>
              <div className="contact-links">
                <a href="https://github.com/Temitayo-Babarinde" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
                <a href="https://www.linkedin.com/in/temitayo-babarinde-4198202a2" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer page-grid">
        <p>© {new Date().getFullYear()} Temitayo Babarinde</p>
        <p>Made in New York <span>·</span> <a href="#top">Back to top ↑</a></p>
      </footer>
    </main>
  );
}
