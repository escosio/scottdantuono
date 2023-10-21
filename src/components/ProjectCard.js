import React from "react";
import "../css/Projects.css"

export const ProjectCard = ({project}) => {

    return(
        <div className="project-card">
            <>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <li>React.js</li>
            <button>Visit site</button>
            </>
        </div>
    )
}