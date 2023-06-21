import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import {FaGithub} from 'react-icons/fa';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} style={{height: "450px",width: "450px"}}/>
      <p>
        {project.skills}
      </p>
      <a href={project.link} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
    </div>
  );
}

export default ProjectDisplay;
