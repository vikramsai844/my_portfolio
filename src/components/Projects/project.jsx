import React from "react";
import "./project.css";
import { FaGithub } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import alfiePetImage from "../../assets/alfie-pet-supplies-homepage.png";
import journeyDiariesImage from "../../assets/journey-diaries-homepage.png";
import blackBerryImage from "../../assets/blackberry-homepage.png";
import tripTunerImage from "../../assets/triptuner-interfaces.png";
import taskManagerImage from "../../assets/task-manager-homepage.png";
import ecommerceImage from "../../assets/ecommerce-homepage.png";
import taskTrackerImage from "../../assets/task-tracker-homepage.png";
import portfolioImage from "../../assets/portfolio-homepage.png";
import bank from "../../assets/bank.png";
import yoAppImage from "../../assets/yo-app-homepage.png";

function Projects() {
  const projects = [
  
    {
      name: "Personal Portfolio Website",
      description:
        "A responsive portfolio website showcasing my projects, skills, and experience. Built using React and CSS, it features dynamic sections, a projects gallery, and seamless navigation.",
      tools: ["React", "CSS","React Js", "React Router", "JavaScript"],
      github: "https://github.com/vikramr844",
      demo: "",
      image: portfolioImage,
    },
   {
      name: "Voice Activated Banking Application",
      description:
        "A banking application with voice command functionality that allows users (especially visually impaired people) to perform banking tasks using speech recognition and text-to-speech. Sighted users can also use the traditional UI.",
      tools: ["React", "CSS", "Angular js", "JavaScript","java","Spring Boot"],
      github: "https://github.com/vikramr844/BankingApplication",
      demo: "",
      image: bank,
    }
   
  ];

  return (
    <section id="projects" className="projects-section" aria-label="Projects">
      <div className="projects-header">
        <div className="projects-divider"></div>
        <h2 className="projects-title">Projects</h2>
        <div className="projects-divider"></div>
      </div>

      <p className="projects-description">
        I’m passionate about creating software that is not only functional but
        also meticulously crafted. My dedication to detail ensures every
        project meets the highest standards. I look forward to applying my
        skills and experience to help businesses achieve their goals and build
        a strong online presence.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tools">
              {project.tools.map((tool, toolIndex) => (
                <span key={toolIndex} className="tool">
                  {tool}
                </span>
              ))}
            </div>
            <div className="project-card-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  aria-label={`GitHub repository for ${project.name}`}
                >
                  <FaGithub size={30} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-link"
                  aria-label={`Live demo of ${project.name}`}
                >
                  <GrView size={25} />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
