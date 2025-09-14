import React from "react";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/works.css";

const certificates = [
  {
    img: "./google.png",
    title: "Generative AI for Educators Certificate",
    subtitle: "Google",
    date: "Julio 21, 2025",
  },
  {
    img: "./santander.png",
    title: "Inteligencia Artificial y productividad",
    subtitle: "Santander | Open Academy",
    date: "Agosto 06, 2024",
  },
  {
    img: "./acip.jpg",
    title: "Especialista en Ofimática Profesional",
    subtitle: "Academia Científica del Pacífico",
    date: "Junio 05, 2023",
  },
];

const Works = () => {
  return (
    <div className="works">
      <Card
        icon={faCertificate}
        title="Certificados"
        body={
          <div className="works-body">
            {certificates.map((cert, index) => (
              <div className="work" key={index}>
                <img src={cert.img} alt={cert.title} className="work-image" />
                <div className="work-content">
                  <div className="work-header">
                    <div className="work-subtitle">{cert.subtitle}</div>
                    <div className="work-duration">{cert.date}</div>
                  </div>

                  <div className="work-title">{cert.title}</div>
                </div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default Works;
