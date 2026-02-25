import "../Css/Projects.css"

const Projects = () => {
  return (
    <div class="container" id="projects">
      <h1 class="section-title">
        Featured <span class="accent">Projects</span>
      </h1>

      <div className="projects-container">
        <div className="project-card">
          <div className="project-header">
            <h2>Question Everything</h2>
            <div className="project-subtitle">
              Interactive Learning Platform
            </div>
            <div className="project-image">
              <img src={`${import.meta.env.BASE_URL}qe_home.png`} alt="" width={"80%"} />
            </div>
          </div>
          <div className="project-content">
            <ul>
              <li>
                Game-based visual-interactive website for B.Sc Maths, Physics,
                and CS using <strong>React & Firebase</strong>.
              </li>
              <li>
                Integrated high-fidelity <strong>3D Modeling</strong> using
                <strong> Three.js</strong> and <strong>GSAP</strong> for
                immersive learning.
              </li>
              <li>
                Utilized <strong>Manim (Python)</strong> for programmatic coding
                and smooth mathematical animations.
              </li>
            </ul>
            <a
              href="https://curioquesevery.web.app/"
              class="btn-link"
              target="_blank"
            >
              View Live Project →
            </a>
          </div>
        </div>

        <div class="project-card">
          <div class="project-header">
            <h2>It’s Mani Blog</h2>
            <div class="project-subtitle">Tech Thoughts & Experiments</div>
            <div className="project-image">
              <img src={`${import.meta.env.BASE_URL}mani_blog_white.png`} alt="" width={"80%"} />
            </div>
          </div>
          <div class="project-content">
            <ul>
              <li>
                Automated deployment using <strong>GitHub Actions</strong> and{" "}
                <strong>Hugo</strong> static site generator.
              </li>
              <li>
                A dedicated space for documenting tech experiments and learning
                milestones.
              </li>
              <li>
                Content constructed entirely in <strong>Markdown</strong> for
                power and simplicity.
              </li>
            </ul>
            <a
              href="https://sripathimanikanta.github.io/itsmaniblog/"
              class="btn-link"
              target="_blank"
            >
              Read My Blog →
            </a>
          </div>
        </div>

        <div class="project-card">
          <div class="project-header">
            <h2>Manim With Mani</h2>
            <div class="project-subtitle">Freelance Mathematical Animation & Education</div>
            <div className="project-image">
              <img src={`${import.meta.env.BASE_URL}mwm.png`} alt="" width={"80%"} />
            </div>
          </div>
          <div class="project-content">
            <ul>
              <li>
                <strong>Professional Experience:</strong> Leveraging 2 years of
                expertise to develop custom mathematical and scientific
                animations using the Manim engine.
              </li>
              <li>
                <strong>Service-Oriented:</strong> Offering specialized
                "Animations on Request" and private tutoring for students and
                creators.
              </li>
              <li>
                <strong>Content Creation:</strong> Founder of the YouTube
                channel <strong>ManiDeconstructs</strong>, focused on
                deconstructing complex topics through visual code.
              </li>
              <li>
                <strong>Technology Stack:</strong> Built with Python (Manim),
                hosted via GitHub, and designed for high-clarity scientific
                communication.
              </li>
            </ul>
            <a
              href="https://sripathimanikanta.github.io/ManimWithMani/"
              class="btn-link"
              target="_blank"
            >
              See My MWM →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
