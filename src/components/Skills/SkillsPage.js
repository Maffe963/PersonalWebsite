// src/SkillsPage.js
import React from 'react';
import './SkillsPage.css';
import { FaJava, FaPython, FaJs, FaHtml5, FaCss3, FaAws, FaGitAlt, FaDocker, FaDatabase, FaFileContract, FaSearch } from 'react-icons/fa';
import { SiKotlin } from 'react-icons/si';
import { FaChartLine, FaBalanceScale, FaBookOpen } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';


function SkillsPage() {
  return (
    <div className="skills-page">
      <h2 className="section-title">Explore My <span>Experience</span></h2>
      <div className="skills-box-container">
        <div className="skills-box">
          <h3>Programming Languages</h3>
          <div className="skills-list">
            <div className="skill-item"><FaPython /> Python</div>
            <div className="skill-item"><FaJava /> Java</div>
            <div className="skill-item"><SiKotlin /> Kotlin</div>
            <div className="skill-item"><FaHtml5 /> HTML</div>
            <div className="skill-item"><FaCss3 /> CSS</div>
          </div>
        </div>
        <div className="skills-box">
          <h3>Tech Skills</h3>
          <div className="skills-list">
            <div className="skill-item"><FaGitAlt /> Git</div>
            <div className="skill-item"><FaDocker /> Docker</div>
            <div className="skill-item"><FaDatabase /> SQL</div>
          </div>
        </div>
        <div className="skills-box">
          <h3>Financial Skills</h3>
          <div className="skills-list">
            <div className="skill-item"><FaChartLine/>Financial Analysis</div>
            <div className="skill-item"><FaBalanceScale/>Risk Management</div>
            <div className="skill-item"><FaFileContract/>Fixed-Income</div>
            <div className="skill-item"><GiMoneyStack/>Portfolio Management</div>
            <div className="skill-item"><FaBookOpen/>Quantitative Research</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
