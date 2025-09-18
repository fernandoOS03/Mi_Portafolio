import React from "react";

import {
  SiJavascript,
  SiReact,
  SiPython,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiGit,
  SiDocker,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const skills = ({ name, size = 24, color = "" }) => {
  const icons = {
    javascript: <SiJavascript size={size} color={color} />,
    react: <SiReact size={size} color={color} />,
    python: <SiPython size={size} color={color} />,
    node: <SiNodedotjs size={size} color={color} />,
    html: <SiHtml5 size={size} color={color} />,
    css: <SiCss3 size={size} color={color} />,
    git: <SiGit size={size} color={color} />,

    java: <FaJava size={size} color={color} />,
  };
  return icons[name.toLowerCase()] || <div>Icon not found</div>;
};

export default skills;
