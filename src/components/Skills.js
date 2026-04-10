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
        Skills <i class="fa-solid fa-screwdriver-wrench"></i>
      </h2>
      <ul className="skill-list">
        <h3>Languages</h3>
        {langs.map((lang, i) => (
          <li key={i} className="skill-item">
            {lang}
          </li>
        ))}
        <h3>Tools</h3>
        {tools.map((tool, i) => (
          <li key={i} className="skill-item">
            {tool}
          </li>
        ))}
        <h3>Testing</h3>
        {testing.map((qaSkill, i) => (
          <li key={i} className="skill-item testing-skill">
            {qaSkill}
          </li>
        ))}
      </ul>
    </div>
  );
};
