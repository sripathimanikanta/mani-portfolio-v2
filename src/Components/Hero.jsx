import '../Css/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <span className="badge">Available for Freelance</span>
          <h1>
            Hi, I'm <span className="accent">Manikanta Sripathi</span>
          </h1>
          <p className="hero-sub">
           Be Curious and Create Crazy Stuff... 
          </p>
          <p className="hero-subtext">
            Science Educator • Manim Animator • Web Developer
          </p>
          
          <div className="quote-box">
            <p className="quote-text">
              "The art of programming is the art of organizing complexity."
            </p>
            <cite>— Edsger W. Dijkstra</cite>
          </div>

          <div className="hero-btns">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Let's Talk</a>
          </div>
        </div>

        {/* <div className="hero-visual">
          <div className="profile-card">
            <div className="avatar-placeholder">MWM</div>
            <div className="stats">
              <div className="stat-item"><strong>2+</strong><span>Years Exp.</span></div>
              <div className="stat-item"><span>Manim Expert</span></div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;