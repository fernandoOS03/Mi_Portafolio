import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./styles/project.css";

const Project = (props) => {
  const {
    logo,
    url_website,
    img_projecto,
    title,
    description,
    linkText,
    link,
    size,
  } = props;
  console.log("Valores recibidos en la prop", props);
  return (
    <React.Fragment>
      <div className={`project ${size}`}>
        <div className="project-container">
          <div className="project-navbar">
            <div className="project-navar-icono-url">
              <div className="project-logo">
                <img src={logo} alt="logo" />
              </div>
              <a href={url_website} target="_blank" rel="noreferrer">
                <div className="project-to-website">
                  <FontAwesomeIcon icon={faExternalLink} />
                </div>
              </a>
            </div>
            <div className="project-navar-img">
              <img src={img_projecto} alt="imagen de proyecto" />
            </div>
          </div>
          <div className="project-title">{title}</div>
          <div className="project-description">{description}</div>

          <a href={link} target="_blank" rel="noreferrer">
            <div className="project-link">
              <div className="project-link-icon">
                <FontAwesomeIcon icon={faGithub} />
              </div>

              <div className="project-link-text">{linkText}</div>
            </div>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;
