// src/App.js
import React, { useState } from 'react';
import './App.css';
import profileImage from './images/profile.jpg';
import Socials from './components/Socials/Socials';
import SkillsPage from './components/Skills/SkillsPage';
import ResumePage from './components/Resume/Resume';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaCode } from 'react-icons/fa';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prevMenu) => !prevMenu);

  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1>Hi, I'm</h1>
            <h1>Matthew Tung</h1>
            <p>Computer Science and Business Administration, Concentration in Finance</p>
            <p>Northeastern University</p>
            <div className="social-icons">
              <a href="https://linkedin.com/in/matthew-r-tung" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-container">
          <h2>About Me</h2>
          <p>
            Hi, I'm a student at Northeastern University! I like to spend time with friends, try new things, and play sports!
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsPage />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-container">
        <h2>My Portfolio</h2>
        <p>Coming soon...</p>
      </section>

      {/* Resume Section */}
      <section id="resume">
        <ResumePage />
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-container">
        <h2>Contact Me</h2>
        <p>Email: tung.mat@northeastern.edu</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Matthew Tung. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
