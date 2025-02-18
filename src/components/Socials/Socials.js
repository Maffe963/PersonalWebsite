// src/Socials.js
import React from 'react';
import './Socials.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SiInvision, SiSketch, SiFigma } from 'react-icons/si';

function Socials() {
  return (
    <div className="socials-container">
      <div className="social-group">
        <h3>Find With Me</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/in/matthew-r-tung" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="social-group">
        <h3>Best Skill On</h3>
        <div className="social-icons">
          <a href="#" target="_blank">
            <SiInvision />
          </a>
          <a href="#" target="_blank">
            <SiSketch />
          </a>
          <a href="#" target="_blank">
            <SiFigma />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Socials;
