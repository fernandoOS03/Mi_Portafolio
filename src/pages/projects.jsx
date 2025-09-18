import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "projects");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Projects | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="projects" />
        <div className="content-wrapper">
          <div className="projects-container">
            <div className="title projects-title">
              Cosas que he creado o en las que he colaborado
            </div>

            <div className="subtitle projects-subtitle">
              He trabajado en distintos proyectos a lo largo de los meses y me
              siento orgulloso del progreso que estoy teniendo. Muchos de estos
              proyectos son finales de mi carrera o proyectos personales y estan
              disponibles para que otros los exploren. Estoy habierto a
              sugerencias o mejoras que puedas tener en mente; Colaborar con
              otros es una gran manera de aprender y crecer, y siempre estoy
              abierto a nuevas ideas y comentarios.
            </div>

            <div className="projects-list">
              <AllProjects />
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

export default Projects;
