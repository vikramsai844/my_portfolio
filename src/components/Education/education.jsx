import React from "react";
import "./education.css";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../GlowCard/glowcard";

const educations = [
  {
    id: 1,
    title: "BCA Computer Application",
    grade: "First-Class",
    institution: "New Prince Shri Bhavani Arts & Science College (in affiliation with  University Of Madras, IN)",
    duration: "Augest 2022 – May 2025",
    gpa: "8.1",
    coursework: "Web Frameworks, Java,MYSQL,Final Year Project"
  },
   {
    id: 2,
    title: "Higher Secondary",
    grade: "A",
    institution: "Government Higher Secondary School (in affiliation with  State Board, IN)",
    duration: "JUN 2021 – APR 2022",
    gpa: "6.5",
  },
  // {
  //   id: 2,
  //   title: "Pearson BTEC HND in Computing (Software Engineering)",
  //   grade: "Grade Pass",
  //   institution: "APIIT Sri Lanka",
  //   duration: "April 2022 – December 2023"
  //   // Coursework not shown intentionally for brevity
  // },
];

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-title-container">
        <div className="education-divider"></div>
        <h2 className="education-title">Education</h2>
        <div className="education-divider"></div>
      </div>

      <div className="education-grid">
        {educations.map((education) => (
          <GlowCard key={education.id} identifier={`education-${education.id}`}>
            <div className="education-card">
              <div className="education-duration">{education.duration}</div>
              <div className="education-content">
                <div className="education-icon">
                  <BsPersonWorkspace size={36} />
                </div>
                <div>
                  <h3 className="education-degree">
                    {education.title}
                    {education.grade && (
                      <>
                        <br />
                        <span className="education-grade">Grade: {education.grade}</span>
                      </>
                    )}
                  </h3>
                  <p className="education-institution">{education.institution}</p>
                  {education.coursework && (
                    <p className="education-coursework">
                      <strong>Relevant Coursework:</strong> {education.coursework}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}

export default Education;
