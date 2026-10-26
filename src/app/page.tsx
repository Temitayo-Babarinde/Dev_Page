"use client";

const projects = [
  {
    number: "01",
    name: "Strategy Lab",
    type: "AI safety · Hackathon project",
    description:
      "A sandbox for checking AI-generated trading strategies for lookahead leakage, with traces that make each run easier to inspect.",
    stack: ["Python", "Daytona", "Arize Phoenix", "Amazon Bedrock"],
    href: "https://github.com/Temitayo-Babarinde/strategy-lab",
    label: "View source",
    tone: "lime",
  },
  {
    number: "02",
    name: "HLPR",
    type: "Student product · In progress",
    description:
      "A shared workspace concept for Hunter students, bringing course discussions, shared tasks, and syllabus information together.",
    stack: ["Next.js", "React", "Supabase", "PostgreSQL"],
    href: "https://github.com/Temitayo-Babarinde/HLPR-Project-1",
    label: "View project",
    tone: "blue",
  },
];

const skills = [
  { label: "Languages", items: "Python · C++ · Go · JavaScript · TypeScript" },
  { label: "Web", items: "React · Next.js · Node.js · HTML · CSS" },
  { label: "Data & tools", items: "PostgreSQL · Supabase · Git · Godot" },
];

export default function Page() {
  return (
    <main id="top">
      <a className="skip-link" href="#work">Skip to selected work</a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Temitayo Babarinde, home">
          TB<span className="wordmark-dot">.</span>
        </a>
        <p className="header-location">Queens, NY <span>·</span> Hunter College</p>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> CS + Mathematics student · Class of 2030</p>
          <h1 id="hero-title">I build software with a <em>systems mind</em> and a creative edge.</h1>
          <p className="hero-description">
            I’m Temitayo, a Hunter College student in Queens exploring useful products,
            thoughtful engineering, and the ideas in between.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="https://www.linkedin.com/in/temitayo-babarinde-4198202a2" target="_blank" rel="noreferrer">
              Connect on LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-meta">
            <span>Currently building</span>
            <span className="meta-divider" />
            <span>HLPR <span className="meta-arrow">↗</span></span>
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract geometric illustration">
          <div className="art-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-core"><span>TB</span><i>✳</i></div>
          <span className="art-label art-label-top">BUILD / LEARN / REPEAT</span>
          <span className="art-label art-label-side">40° 42' N<br />73° 48' W</span>
          <span className="art-index">01—26</span>
        </div>
        <div className="hero-bottomline">
          <span>Independent builder</span>
          <span>New York City <i>✳</i></span>
        </div>
      </section>

      <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work <span className="eyebrow-mark">/ 01</span></p>
            <h2 id="work-title">Things I’m building.</h2>
          </div>
          <p className="section-intro">A couple of projects where product thinking meets code. Each one is a work in progress.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card project-${project.tone}`} key={project.name}>
              <div className="project-topline">
                <span>{project.number} <i>—</i> {project.type}</span>
                <span className="project-spark" aria-hidden="true">✳</span>
              </div>
              <div className="project-visual" aria-hidden="true">
                {project.name === "Strategy Lab" ? (
                  <div className="visual-strategy">
                    <div className="visual-window">
                      <div className="window-bar"><i /><i /><i /><span>RUN / 004</span></div>
                      <div className="chart-lines"><span /><span /><span /><span /><b>LEAK CHECK <i>PASS</i></b></div>
                    </div>
                    <span className="visual-note">REPLAY<br />→ INSPECT</span>
                  </div>
                ) : (
                  <div className="visual-hlpr">
                    <div className="visual-sidebar"><b>H</b><i /><i /><i /></div>
                    <div className="visual-board"><span>MY COURSES</span><b>CSCI 127</b><i /><i /><div><small>SHARED TASK</small><strong>Problem set 04</strong><em>IN PROGRESS</em></div></div>
                    <span className="visual-stamp">CAMPUS<br />TOGETHER</span>
                  </div>
                )}
              </div>
              <div className="project-content">
                <div className="project-title-row"><h3>{project.name}</h3><span className="project-status"><i /> {project.type.includes("In progress") ? "In progress" : "Prototype"}</span></div>
                <p>{project.description}</p>
                <ul className="tag-list" aria-label="Technologies">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.label} <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
        <p className="work-footnote"><span>↳</span> Strategy Lab uses synthetic data for a repeatable safety demo; it is not evidence of trading performance.</p>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="section-wrap about-layout">
          <div className="about-heading">
            <p className="eyebrow">A little context <span className="eyebrow-mark">/ 02</span></p>
            <h2 id="about-title">Curious by nature.<br /><em>Builder by choice.</em></h2>
            <p>I like the space where rigorous problem-solving meets expressive design. Right now, I’m learning the foundations and putting them to use in projects that matter to me.</p>
            <a className="text-link" href="https://www.linkedin.com/in/temitayo-babarinde-4198202a2" target="_blank" rel="noreferrer">More about me on LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
          <div className="about-details">
            <div className="detail-row"><span className="detail-index">01</span><div><h3>Study</h3><p>Computer Science & Mathematics<br />Hunter College, CUNY · 2026—2030</p></div><span className="detail-mark">⌘</span></div>
            <div className="detail-row"><span className="detail-index">02</span><div><h3>Based</h3><p>Queens, New York<br />Grew up in Nigeria</p></div><span className="detail-mark">⌖</span></div>
            <div className="detail-row"><span className="detail-index">03</span><div><h3>Exploring</h3><p>Backend systems, AI products,<br />interactive software, and game design</p></div><span className="detail-mark">✳</span></div>
          </div>
        </div>
      </section>

      <section className="skills-section section-wrap" aria-labelledby="skills-title">
        <div className="skills-heading">
          <p className="eyebrow">Tools of the trade <span className="eyebrow-mark">/ 03</span></p>
          <h2 id="skills-title">What I work with.</h2>
        </div>
        <div className="skills-list">
          {skills.map((skill, index) => <div className="skill-row" key={skill.label}><span className="detail-index">0{index + 1}</span><h3>{skill.label}</h3><p>{skill.items}</p><span className="skill-arrow">↗</span></div>)}
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="section-wrap">
          <p className="eyebrow">Have an interesting idea? <span className="eyebrow-mark">/ 04</span></p>
          <div className="contact-main">
            <h2>Let’s make<br /><em>something useful.</em></h2>
            <div className="contact-action">
              <p>Open to meeting thoughtful builders, exploring internships, and finding good problems to work on.</p>
              <a className="button button-light" href="https://www.linkedin.com/in/temitayo-babarinde-4198202a2" target="_blank" rel="noreferrer">Say hello on LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="footer-line"><span>© {new Date().getFullYear()} Temitayo Babarinde</span><span>Made in Queens, NY <i>✳</i></span><a href="#top">Back to top ↑</a></div>
        </div>
      </footer>
    </main>
  );
}
