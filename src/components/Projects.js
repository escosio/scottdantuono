import React from "react";
import "../css/Projects.css";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Swift App",
      desc: "Simple app for meal preparation to help plan dinner for my family",
      link: "https://github.com/escosio/MealsAndRecipes",
    },
    {
      title: "Alejo Minis",
      desc: "React site for a friend mini painter",
      link: "https://alejo-minis.vercel.app/",
    },
    {
      title: "Espresso practice",
      desc: "Learning Espresso at Peloton",
      link: "https://github.com/pl-peloton/scott-pai-emp",
    },
  ];

  return (
    <div id="projects" className="section">
      <h2>Projects</h2>
      <p>Here are some things I have been working on:</p>
      {projects.map((project, i) => (
        <div className="project-card">
          <a href={project.link}>
            <h3>{project.title}</h3>
          </a>
          <p>{project.desc}</p>
        </div>
      ))}
      {/* <ProjectCard project={projects[1]}/> */}
    </div>
  );
};
