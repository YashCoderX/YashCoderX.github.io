import React from 'react';
import './About.css';
import aboutVector from './../../assets/about_vector.png';
import aboutAnime from './../../assets/about_anime.gif';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';

const About = () => {
  return (
    <div className="section-container">
      <Header
        heading="About Me."
        details="A Passionate Programmer | Enthusiastic Learner | Problem Solver"
      />
      <div className="about-main">
        <div className="about-main-left">
          <p className="about-details">
            As a Software Engineer with over 3 years of experience in the IT
            industry, I am dedicated to finding innovative solutions to complex
            technical challenges. My focus is on delivering solutions that
            reduce costs, increase productivity, and transform IT into a
            strategic business asset. I am passionate about writing clean,
            efficient code and am eager to contribute to advancements in urban
            transit. Always open to connecting with industry professionals to
            collaborate and share insights. Want to reach out to me?{' '}
            <a
              className="about-link-element"
              href="https://www.linkedin.com/in/yashagarwal1611/"
            >
              @YashAgarwal
            </a>
          </p>
        </div>

        <div className="about-main-right">
          <img className="about-anime" src={aboutAnime} alt="about" />
        </div>
      </div>
      <FooterLink
        phrase="Check out my "
        link="projects!"
        toAddress="/projects"
      />
      <div className="vector-frame">
        <img className="about-vector" src={aboutVector} alt="" />
      </div>
    </div>
  );
};

export default About;
