import React, { useState, useEffect } from 'react';
import '../Css/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Adds a background blur effect when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          Manikanta<span className="accent">.</span>
        </div>
        
        <ul className="nav-links">
          <li><a href="#experience">Experience</a></li>
          <li><a href="#academia">Academia</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#technical">Technical</a></li>
          <li><a href="#certifications">Certificates</a></li>
          <li><a href="#contact" className="nav-btn">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;