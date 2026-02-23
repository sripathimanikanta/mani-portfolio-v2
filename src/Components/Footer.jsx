import '../Css/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const linkeddirectPath = "/linkedin-brands-solid-full.svg";
  const youtubedirectPath = "/youtube-brands-solid-full.svg";
  const twitterdirectPath = "/twitter-brands-solid-full.svg";
  const instadirectPath = "/instagram-brands-solid-full.svg";

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Manikanta<span className="accent">.</span></h3>
          <p>Science Student & Programmatic Animator</p>
        </div>

        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/manikanta-sripathi/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            {/* LinkedIn */}
            <img src={`${import.meta.env.BASE_URL}linkedin-brands-solid-full.svg`} alt="My Logo" style={{ width: '50px' ,height: '50px'}} id='svg-icon-lkd' />
          </a>
          <a href="https://www.youtube.com/@manideconstructs" target="_blank" rel="noreferrer" aria-label="YouTube">
            {/* YouTube */}
            <img src={`${import.meta.env.BASE_URL}youtube-brands-solid-full.svg`} alt="My Logo" style={{ width: '50px' ,height: '50px'}} id='svg-icon-yt' />
          </a>
          <a href="https://x.com/msripathi035" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
            {/* X */}
            <img src={`${import.meta.env.BASE_URL}twitter-brands-solid-full.svg`} alt="My Logo" style={{ width: '50px' ,height: '50px'}} id='svg-icon-x'/>
          </a>
          <a href="https://www.instagram.com/manikda_art/" target="_blank" rel="noreferrer" aria-label="Instagram">
            {/* Instagram */}
            <img src={`${import.meta.env.BASE_URL}instagram-brands-solid-full.svg`} alt="My Logo" style={{ width: '50px' ,height: '50px'}} id='svg-icon-inst'/>
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Created by Manikanta Sripathi. Built with React.</p>
          <div className="footer-line"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;