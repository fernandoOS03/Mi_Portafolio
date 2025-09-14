import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllExperience from "../components/workExperience/allExperience";
import "./styles/experienceWork.css";

import INFO from "../data/user";
import SEO from "../data/seo";

const ExperienceWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "experienceWork");
  return (
    <React.Fragment>
      <Helmet>
        <title> {`Experiencia Laboral | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>
      <div className="page-content">
        <NavBar active="experienceWork" />
        <div className="content-wrapper">
          <div className="experience-container">
            <div className="title experience-title">hola mundo</div>
            <div className="subtitle experience-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus non alias at itaque deserunt neque officia tenetur,
              qui nemo natus labore recusandae vitae impedit, laboriosam saepe
              vero ratione doloremque commodi.
            </div>
            <div className="experience-list">
              <AllExperience />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExperienceWork;
