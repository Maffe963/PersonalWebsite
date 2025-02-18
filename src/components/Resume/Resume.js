// src/components/Resume/ResumePage.js
import React from 'react';
import './Resume.css';

function ResumePage() {
  return (
    <div className="resume-page">
      <h2 className="section-title">My <span>Resume</span></h2>
      <div className="resume-container">
        <div className="resume-section">
          <h3>Education</h3>
          <p><strong>Northeastern University, Khoury College of Computer Sciences</strong></p>
          <p>B.S. in Computer Science and Business Administration (Finance Concentration)</p>
          <p>Relevant Coursework: Object-Oriented Design, Algorithms & Data, Database Systems, Foundations of Data Science, Financial Accounting, Alternative Finance</p>
        </div>
        
        <div className="resume-section">
          <h3>Experience</h3>
          <p><strong>Gardena Capital LTD</strong> - Software Engineer Co-op (Sept 2024 – Jan 2025)</p>
          <ul>
            <li>Analyzed fixed-income trade data using SQL to identify performance trends.</li>
            <li>Designed a bond pricing engine for real-time valuation, improving accuracy by 30%.</li>
            <li>Automated fixed-income reporting workflows in Java, ensuring an 80% data accuracy rate.</li>
          </ul>
          
          <p><strong>Northeastern University</strong> - Teaching Assistant (Jan 2024 – April 2024)</p>
          <ul>
            <li>Mentored students on data structures and debugging practices.</li>
            <li>Evaluated assignments for 200+ students, providing coding feedback.</li>
          </ul>
          
          <p><strong>ArtWork</strong> - Software Engineer (Sept 2023 – Aug 2024)</p>
          <ul>
            <li>Led the development of a React.js web application for networking in the film industry.</li>
            <li>Managed a team of four developers with weekly code reviews.</li>
            <li>Secured seed funding through a successful project proposal.</li>
          </ul>
        </div>
        
        <div className="resume-section">
          <h3>Projects</h3>
          <p><strong>Python Audio CAPTCHA Solver</strong> (Oct 2023)</p>
          <ul>
            <li>Developed a Selenium-based tool for solving audio CAPTCHAs with Google Cloud Speech-to-Text API.</li>
            <li>Achieved a 98% success rate in CAPTCHA solving.</li>
            <li>Implemented robust exception handling for uninterrupted operations.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
