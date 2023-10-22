import React from "react";
import "../css/Projects.css";

export const Projects = () => {
  const projects = [
    {
      title: "Meals & Recipes (iOS)",
      desc: "Simple iOS app for meal preparation to help plan dinner for my family. Built with SwiftUI",
      link: "https://github.com/escosio/MealsAndRecipes",
    },
    {
      title: "Alejo Minis",
      desc: "React site for a friend mini painter",
      link: "https://alejo-minis.vercel.app/",
    },
    {
      title: "Meals & Recipes (Web)",
      desc: "Same as the iOS app but in React.js so I don't have to get an Apple Developer license.",
      link: "https://meals-and-recipes-web.vercel.app/"
    },
    {
      title: "Espresso practice",
      desc: "Learning Espresso at Peloton",
      link: "https://github.com/pl-peloton/scott-pai-emp",
    },
  ];

  return (
    <div id="projects" className="section project-card-container">
      <h2>Projects <i class="fa-solid fa-code-branch"></i></h2>
      {/* <i class="fa-solid fa-diagram-project"></i> */}
      <p>Here are some things I have been working on:</p>
      {projects.map((project, i) => (
          <a href={project.link} target="_blank">
        <div sm className="project-card">
            <h3>{project.title}</h3>
          <p>{project.desc}</p>
        </div>
        </a>
      ))}
      {/* <ProjectCard project={projects[1]}/> */}
    </div>
  );
};
