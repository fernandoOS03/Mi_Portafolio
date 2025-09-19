import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faFolderOpen, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import Project from "../components/projects/project";
import Experience from "../components/workExperience/experience";

import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/homepage.css";

import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  const currentSEO = SEO.find((item) => item.page === "home");

  return (
    <React.Fragment>
      <Helmet>
        <title>{INFO.main.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="home" />
        <div className="content-wrapper">
          <div className="homepage-container">
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
                <div className="title homepage-title">
                  {INFO.homepage.title}
                </div>

                <div className="subtitle homepage-subtitle">
                  {INFO.homepage.description}
                </div>
              </div>

              <div style={{ width: "80%", height: "30vh" }}>
                <DotLottieReact
                  src="https://lottie.host/e693db80-fcea-4368-b4a1-d0697496209e/3FpDQg3xXa.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>

            <div className="homepage-socials">
              <a href={INFO.socials.github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="homepage-social-icon"
                />
              </a>

              <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="homepage-social-icon"
                />
              </a>
              <a
                href={`mailto:${INFO.main.email}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faMailBulk}
                  className="homepage-social-icon"
                />
              </a>

              <a
                href="/CV_Fernando_Olivera_Salazar.pdf"
                target="blank"
                download
                className="download-btn"
              >
                Descargar CV
                <FontAwesomeIcon icon={faDownload} />
              </a>
            </div>

            <div className="homepage-after-projects">
              <div className="title-projects">
                <h2>Proyectos</h2>
                <FontAwesomeIcon
                  icon={faFolderOpen}
                  className="homepage-social-icon"
                />
              </div>
              <div className="homepage-projects">
                {INFO.projects.slice(0, 2).map((project, index) => (
                  <div
                    className="homepage-project"
                    key={(index + 1).toString()}
                  >
                    <Project
                      logo={project.logo}
                      url_website={project.url_website}
                      img_projecto={project.img_projecto}
                      title={project.title}
                      description={project.description}
                      linkText={project.linkText}
                      link={project.link}
                      size="large"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="homepage-after-title">
              <div className="title-projects">
                <h2>Experiencia Laboral</h2>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="homepage-social-icon"
                />
              </div>
              <div className="homepage-experiences">
                {INFO.experiences.slice(0, 2).map((experience, index) => (
                  <div
                    className="homepage-experience"
                    key={(index + 1).toString()}
                  >
                    <Experience
                      logoEmpresa={experience.logoEmpresa}
                      title={experience.title}
                      company={experience.company}
                      date={experience.date}
                      description={experience.description}
                      size="large-experience"
                    />
                  </div>
                ))}
              </div>

              <div className="homepage-works">
                <Works />
              </div>
            </div>

            <div className="page-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
