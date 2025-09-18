import React from "react";
import Skills from "./skills";
import "./styles/allSkills.css";

const allSkills = () => {
  return (
    <div className="tecnologias-iconos">
      <div className="tecnologia">
        <Skills name="python" size={32} color="#3776AB" />
      </div>
      <div className="tecnologia">
        <Skills name="javascript" size={32} color="#F7DF1E" />
      </div>
      <div className="tecnologia">
        <Skills name="react" size={32} color="#61DAFB" />
      </div>
      <div className="tecnologia">
        <Skills name="html" size={32} color="#E34F26" />
      </div>
      <div className="tecnologia">
        <Skills name="css" size={32} color="#1572B6" />
      </div>
      <div className="tecnologia">
        <Skills name="git" size={32} color="#F05032" />
      </div>
      <div className="tecnologia">
        <Skills name="java" size={32} color="#007396" />
      </div>
    </div>
  );
};

export default allSkills;
