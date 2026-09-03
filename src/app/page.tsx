const projects = [
  { number: "01", title: "HLPR", type: "Student platform · 2026", description: "A CUNY-focused learning network where students can find course communities, share notes, and get help from people taking the same classes.", stack: ["Next.js", "Supabase", "Auth", "PostgreSQL"], href: "#contact", status: "In development" },
  { number: "02", title: "AI Startup Tracker", type: "Data product · 2026", description: "A vertical AI discovery engine that collects startup activity, summarizes meaningful updates, and turns a noisy market into a useful daily brief.", stack: ["Python", "Node.js", "LLMs", "Supabase"], href: "https://github.com/Temitayo-Babarinde", status: "Building" },
  { number: "03", title: "Solar Time", type: "Interactive tool · 2026", description: "A location-aware sun tracker that visualizes sunrise, sunset, daylight, seasonal movement, and daylight-saving changes across the year.", stack: ["Python", "JavaScript", "Time zones", "Data viz"], href: "https://github.com/Temitayo-Babarinde", status: "Complete" },
  { number: "04", title: "Nightmare FPS", type: "Game systems · 2025", description: "A surreal first-person game built around momentum, toxic zones, environmental storytelling, and enemies that distort how the player moves.", stack: ["Godot", "GDScript", "3D systems", "Game design"], href: "https://github.com/Temitayo-Babarinde", status: "Prototype" },
];

const skills = ["TypeScript", "JavaScript", "Python", "Go", "React", "Next.js", "Node.js", "Supabase", "PostgreSQL", "Godot"];
function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Page() {
  return <main>
    <div className="grain" aria-hidden="true" />
    <nav className="nav wrap" aria-label="Primary navigation">
      <a className="monogram" href="#top" aria-label="Temitayo Babarinde, home">TB<span>.</span></a>
      <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div>
      <a className="availability" href="#contact"><i /> Open to opportunities</a>
    </nav>

    <section className="hero wrap" id="top">
      <p className="eyebrow">Software engineer · New York City</p>
      <div className="hero-code" aria-hidden="true"><span>SELECT * FROM IDEAS</span><span>WHERE IMPACT = TRUE</span></div>
      <h1>I build digital tools<br /><span>for real people.</span></h1>
      <div className="hero-bottom">
        <p>I’m Temitayo, a Computer Science student at Hunter College creating thoughtful products across web, AI, and interactive systems.</p>
        <a className="circle-link" href="#work" aria-label="View selected work"><span>View work</span><b>↓</b></a>
      </div>
      <div className="hero-stamp" aria-hidden="true"><span>BASED IN</span><strong>NYC</strong><small>40.7128° N</small></div>
      <div className="signal" aria-hidden="true"><i /><i /><i /><i /><i /><span>BUILD SIGNAL</span></div>
    </section>

    <section className="work wrap" id="work">
      <header className="section-head"><div><p className="eyebrow">01 / Selected work</p><h2>Projects with purpose.</h2></div><p>A selection of products, experiments, and systems I’ve built while learning in public.</p></header>
      <div className="project-list">{projects.map((project) =>
        <a className="project" href={project.href} key={project.title} target={project.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
          <span className="project-number">{project.number}</span>
          <div className="project-main"><p>{project.type}</p><h3>{project.title}</h3><span className="project-status">{project.status}</span></div>
          <p className="project-description">{project.description}</p>
          <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          <span className="project-arrow"><Arrow /></span>
        </a>)}</div>
    </section>

    <section className="about" id="about"><div className="wrap about-grid">
      <p className="eyebrow">02 / About</p>
      <div className="about-copy"><h2>Curious by default.<br /><em>Useful by design.</em></h2><div className="about-columns">
        <p>I’m a freshman studying Computer Science at Hunter College. I’m interested in backend systems, AI products, and the small design decisions that make software feel obvious.</p>
        <p>I grew up in Nigeria and now build from Queens, New York. That path shaped how I think: stay resourceful, learn fast, and make technology work for communities that are usually overlooked.</p>
      </div></div>
      <aside className="currently"><span>Currently</span><p>Studying at Hunter College</p><p>Building HLPR</p><p>Looking for 2027 opportunities</p></aside>
    </div></section>

    <section className="toolkit wrap"><div className="section-head compact"><div><p className="eyebrow">03 / Toolkit</p><h2>What I work with.</h2></div></div>
      <div className="skills" aria-label="Technical skills">{skills.map((skill, index) => <span key={skill}><small>{String(index + 1).padStart(2, "0")}</small>{skill}</span>)}</div>
    </section>

    <section className="contact" id="contact"><div className="wrap contact-inner">
      <p className="eyebrow">04 / Let’s talk</p><h2>Have an idea?<br /><em>Let’s build it.</em></h2>
      <p className="contact-copy">I’m looking for software engineering internships, ambitious collaborators, and projects worth caring about.</p>
      <div className="contact-links"><a href="https://www.linkedin.com/in/temitayo-babarinde-4198202a2" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="https://github.com/Temitayo-Babarinde" target="_blank" rel="noreferrer">GitHub <Arrow /></a></div>
      <footer><span>© {new Date().getFullYear()} Temitayo Babarinde</span><a href="#top">Back to top ↑</a></footer>
    </div></section>
  </main>;
}
