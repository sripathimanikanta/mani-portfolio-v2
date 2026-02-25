import "../Css/Skills.css"

const Skills = () => {
  const htmldirectPath = "/html5-brands-solid.svg";
  const cssdirectPath = "/css3-alt-brands-solid.svg";
  return (
    <div id="technical">
      <div className="tech-container">
        <h1>Technical Proficiency</h1>

        <div class="skills-grid">
          <div class="skill-card">
            <h3>Programming Languages</h3>
            <div class="tags">
              <span class="tag">JavaScript</span>
              <span class="tag">Python</span>
              <span class="tag">C</span>
              <span class="tag">C# (Basic)</span>
            </div>
          </div>

          <div class="skill-card">
            <h3>Web Development</h3>
            <div class="tags">
              <span class="tag">React</span>
              <span class="tag">Redux</span>
              <span class="tag">Angular</span>
              <span class="tag">API Development</span>
              <span class="tag">JS Frameworks</span>
            </div>
          </div>

          <div class="skill-card">
            <h3>Web Designing</h3>
            <div class="tags">
              {/* <img src={htmldirectPath} alt="My Logo" style={{ width: '100px' ,height: '100px'}} /> */}
              <span class="tag">HTML5</span>
              {/* <img src={cssdirectPath} alt="My Logo" style={{ width: '100px' ,height: '100px'}} /> */}
              <span class="tag">CSS3</span>
              <span class="tag">Tailwind CSS</span>
            </div>
          </div>

          <div class="skill-card">
            <h3>Database</h3>
            <div class="tags">
              <span class="tag">MySQL</span>
              <span class="tag">MongoDB</span>
            </div>
          </div>

          <div class="skill-card">
            <h3>Networking & Testing</h3>
            <div class="tags">
              <span class="tag">Postman</span>
              <span class="tag">Burp Suite</span>
              <span class="tag">WireShark</span>
              <span class="tag">TCP/IP</span>
            </div>
          </div>

          <div class="skill-card">
            <h3>Tools & Environment</h3>
            <div class="tags">
              <span class="tag">Git & GitHub</span>
              <span class="tag">Docker</span>
              <span class="tag">VSCode</span>
              <span class="tag">Linux</span>
              <span class="tag">Windows</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
