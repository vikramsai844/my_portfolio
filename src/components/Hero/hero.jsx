import React from "react";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import heroimage from "../../assets/hero-image.png";
import "./hero.css";

const Hero = () => {
  return (
    <section id="hero" className="heroSection" aria-label="Introduction">
      <div className="heroContainer">
        <p className="heroHello" aria-label="Greeting">Hello,</p>
        <h1 className="heroTitle">
          I'm <span className="heroName">Vikram</span> R
        </h1>
        <h2 className="heroSubtitle">Software Developer</h2>
        <p className="heroDescription">
          I'm a passionate software Developer specializing in full-stack web application development. I enjoy crafting efficient, user-centric solutions that make a meaningful impact.
        </p>
        <div className="iconRow" role="navigation" aria-label="Social media links">
          <a
            href="https://www.linkedin.com/in/vikram844/"
            target="_blank"
            rel="noopener noreferrer"
            className="iconButton"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/vikramr844"
            target="_blank"
            rel="vikram"
            className="iconButton"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:vikram701058@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="iconButton"
            aria-label="Send Email"
          >
            <FaEnvelope />
          </a>
        </div>
        <div className="buttonRow">
          <a
            href={``}
            target="_blank"
            rel="noopener noreferrer"
            className="heroBtn"
            aria-label="Download Resume"
          >
            <FaDownload className="icon" /> Download Resume
          </a>
          <Link to="contact" smooth duration={500} aria-label="Scroll to Contact section">
            <button className="heroBtn">
              <FaEnvelope className="icon" /> Contact Me
            </button>
          </Link>
        </div>
      </div>
      <img src={heroimage} alt="Portrait of VIKRAM" className="heroImage" />
    </section>
  );
};

export default Hero;
