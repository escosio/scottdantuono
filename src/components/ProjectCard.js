import React from "react";
import "../css/Projects.css"

export const ProjectCard = ({project}) => {

    return(
        <div className="project-card flex">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <li>React.js</li>
            <button>Visit site</button>
        </div>
    )
}