import React from "react";

export const Skills = () => {
    const langs = ["Javascript/Typescript", "Python", "Kotlin", "Bash"]
    const tools = ["Playwright", "React.js", "Pytest", "Cypress.io", "Espresso", "Git", "Jenkins", "Postman", "Github Actions", "AWS", "VS Code"]
    const testing = ["QA Automation", "API testing", "Mobile testing", "Hardware testing", "Release Managment"]
    return(
        <div id="skills" className="skills section">
            <h2>Skills <i class="fa-solid fa-screwdriver-wrench"></i></h2>
            {/* <li>QA Automation</li> */}
            <ul className="skill-list">
            <h3>Languages</h3>
            {langs.map((lang, i) => <li key={i} className="skill-item">{lang}</li>)}
            <h3>Tools</h3>
            {tools.map((tool, i) => <li key={i} className="skill-item">{tool}</li>)}
            <h3>Testing</h3>
            {testing.map((qaSkill, i) => <li key={i} className="skill-item testing-skill">{qaSkill}</li>)}
            </ul>
        </div>
    )
}
