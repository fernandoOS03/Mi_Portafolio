import React from "react";
import Experience from "./experience";
import INFO from "../../data/user";

import "./styles/allExperience.css";

const AllExperience = () => {
  return (
    <div className="all-experience-container">
      {INFO.experiences.map((experience, index) => (
        <div className="all-experiences-experience" key={index}>
          <Experience
            logoEmpresa={experience.logoEmpresa}
            title={experience.title}
            company={experience.company}
            date={experience.date}
            description={experience.description}
            size="small"
          />
        </div>
      ))}
    </div>
  );
};

export default AllExperience;
