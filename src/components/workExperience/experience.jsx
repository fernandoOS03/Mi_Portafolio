import React from "react";
import "./styles/experience.css";

const Experience = ({
  logoEmpresa,
  title,
  company,
  date,
  description,
  size,
}) => {
  return (
    <div className={`experience ${size}`}>
      <div className="experience-card">
        <div className="experience-header">
          <img
            src={logoEmpresa}
            alt={`${company} logo`}
            className="experience-company"
          />
          <div className="experience-name-company">{company}</div>
        </div>

        <div className="experience-subtitles">
          <div className="experience-title">{title}</div>
          <div className="experience-date">{date}</div>
        </div>

        <div className="experience-description">{description}</div>
      </div>
    </div>
  );
};

export default Experience;
