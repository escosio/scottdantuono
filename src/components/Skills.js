import React from "react";
import "../css/Skills.css";

export const Skills = () => {
  const langs = ["Javascript/Typescript", "Python", "Kotlin", "Swift"];

  const tools = [
    "Playwright",
    "Cypress.io",
    "Pytest",
    "Espresso",
    "XCUITest",
    "React",
    "Claude Code",
    "Github Actions",
    "Jenkins",
    "AWS",
    "Qase.io",
  ];

  const practice = [
    "Test strategy across teams",
    "Release management",
    "On-call and release training",
    "Test framework architecture",
    "CI/CD integration",
    "AI-assisted development",
    "QA automation",
    "API testing",
    "Mobile testing",
    "E2E testing",
  ];

  const groups = [
    ["Languages", langs],
    ["Tools", tools],
    ["Practice", practice],
  ];

  return (
    <section id="skills" className="section page">
      <h2>Skills</h2>
      <div className="skill-columns">
        {groups.map(([name, items]) => (
          <div className="skill-category" key={name}>
            <h3>{name}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
