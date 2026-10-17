import React from "react";
import "../css/Skills.css";

export const Skills = () => {
  const langs = ["Javascript/Typescript", "Python", "Kotlin", "Bash", "Swift"];

  const tools = [
    "Playwright",
    "React",
    "Pytest",
    "Vitest",
    "Cypress.io",
    "Espresso",
    "XCUITest",
    "Git",
    "Jenkins",
    "Postman",
    "Github Actions",
    "AWS",
    "JIRA",
    "Qase.io",
    "TestRail",
  ];

  const testing = [
    "QA Automation",
    "API Testing",
    "Mobile Testing",
    "E2E Testing",
    "CI/CD Integration",
    "Test Framework Architecture",
    "Release Management",
    "Unit Tests",
  ];
  const groups = [
    ["Languages", langs],
    ["Tools", tools],
    ["Testing", testing],
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
