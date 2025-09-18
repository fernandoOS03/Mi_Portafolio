import React from "react";
import Project from "./project";
import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
  return (
    <div className="all-projects-container">
      {INFO.projects.map((project, index) => (
        <div className="all-projects-project" key={index}>
          <Project
            logo={project.logo}
            url_website={project.url_website}
            img_projecto={project.img_projecto}
            title={project.title}
            description={project.description}
            linkText={project.linkText}
            link={project.link}
            size="small"
          />
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
