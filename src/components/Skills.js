import React from "react";

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
  return (
    <div id="skills" className="skills section">
      <h2>
        Skills <i className="fa-solid fa-screwdriver-wrench"></i>
      </h2>

      <div className="skill-category">
        <h3>Languages</h3>
        <ul className="skill-list">
          {langs.map((lang, i) => (
            <li key={i} className="skill-item">
              {lang}
            </li>
          ))}
        </ul>
      </div>

      <div className="skill-category">
        <h3>Tools</h3>
        <ul className="skill-list">
          {tools.map((tool, i) => (
            <li key={i} className="skill-item">
              {tool}
            </li>
          ))}
        </ul>
      </div>

      <div className="skill-category">
        <h3>Testing</h3>
        <ul className="skill-list">
          {testing.map((qaSkill, i) => (
            <li key={i} className="skill-item testing-skill">
              {qaSkill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
