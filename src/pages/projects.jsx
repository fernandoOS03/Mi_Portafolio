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
              He trabajado en distintos proyectos a lo largo de los mess y me
              siento orgulloso del progreso que estoy teniendo. Muchos de estos
              proyectos son Proyectos finales de mi carrera o proyecyos
              personalesy estan disponibles para que otros los exlporen. Estoy
              habierto a sugerencias o mejoras que puedas tener en mente.
              Colaborar con otros es una gran manera de aprender y crecer, y
              siempre estoy abierto a nuevas ideas y comentarios.
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
