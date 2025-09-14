import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer-links">
          <ul className="footer-nav-link-list">
            <li className="footer-nav-link-item">
              <Link to="/homepage">Inicio</Link>
            </li>
            <li className="footer-nav-link-item">
              <Link to="/about">Sobre Mi</Link>
            </li>
            <li className="footer-nav-link-item">
              <Link to="/projects">Projectos</Link>
            </li>

            <li className="footer-nav-link-item">
              <Link to="/experienceWork">Exp. Laboral</Link>
            </li>
            <li className="footer-nav-link-item">
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
