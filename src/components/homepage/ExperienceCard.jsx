import React from "react";

export const ExperienceCard = ({ icon, date, title, company, description }) => {
  return (
    <div className="experience-card">
      <div className="experience-icon">{icon}</div>
      <div className="experience-date">{date}</div>
      <div className="experience-title">{title}</div>
      <div className="experience-company">{company}</div>
      <div className="experience-description">{description}</div>
    </div>
  );
};
