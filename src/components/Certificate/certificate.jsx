import React from "react";
import "./certificate.css";
import { FiExternalLink } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

const certifications = [
  {
    title: "Java Full Stack Devlopment",
    organisation: "RETECH",
    skills: "Java fundamentals,Core Concepts,HTML, CSS, JavaScript, React",
    date: "Jul 2024",
    link: "https://www.linkedin.com/in/vikram844",
  },
   {
    title: "Java Full Stack Devlopment",
    organisation: "SilmpleLearn SkillUp",
    skills: "Java, Spring Boot, Hibernate, REST APIs, HTML, CSS, JavaScript, React, MySQL, Git, Maven",
    date: "Jul 2024",
    link: "https://www.linkedin.com/in/vikram844",
  },
  {
    title: "Oracle Cloud Architecture",
    organisation: "AdroIT Technologies",
    skills: "Cloud Architecture",
    date: "May 2025",
    link: "https://www.linkedin.com/in/vikram844",
  },
   {
    title: "Oracle Cloud Infrastructure",
    organisation: "Oracle University",
    skills: "OCI Compute, Storage, Networking,",
    date: "Mar 2024",
    link: "https://www.linkedin.com/in/vikram844",
  },
  {
    title: "MongoDB DataBase",
    organisation: "MongoBD,Inc",
    skills: "DataBAse Admin Path(self-Managed)",
    date: "Feb 2024",
    link: "https://www.linkedin.com/in/vikram844",
  },
  {
    title: "Project Management Job Simulation",
    organisation: "Accenture > Forage",
    skills: "Planning & Organization – Break down projects into tasks, milestones, and timelines.",
    date: "Aug 2024",
    link: "https://www.linkedin.com/in/vikram844",
  },
  {
    title: "Ethical Hacking For Beginners",
    organisation: "SkillUp",
    skills: "Kali Linux,Metasploit,Linux & Windows Administration,Vulnerability Assessment & Penetration Testing (VAPT)",
    date: "NOV 2022",
    link: "https://www.linkedin.com/in/vikram844",
  },
 
];

const Certificate = () => {
  return (
    <section id="certificates" className="certificate-section">
      <div className="certificate-header-container">
        <div className="certificate-divider"></div>
        <h2 className="certificate-header">Certifications</h2>
        <div className="certificate-divider"></div>
      </div>
      <p className="certificate-description">
        Here is a selection of professional certifications I’ve earned to deepen my expertise and stay current with evolving technologies.
      </p>
      <div className="certificate-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certificate-card">
            <div className="certificate-ribbon">
              <FontAwesomeIcon icon={faCertificate} />
            </div>
            <h3 className="certificate-title">{cert.title}</h3>
            <p className="certificate-organisation">{cert.organisation}</p>
            <p className="certificate-skills">
              <strong>Skills Covered:</strong> {cert.skills}
            </p>
            <p className="certificate-date">
              <strong>Date:</strong> {cert.date}
            </p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
                aria-label={`View certification for ${cert.title}`}
              >
                <FiExternalLink />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
