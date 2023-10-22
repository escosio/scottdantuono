import React from "react";

export const Skills = () => {
    const langs = ["Python", "React.js", "Javascript", "Cypress.io", "Espresso", "Linux/Unix"]
    const tools = ["Github", "Jenkins", "Postman", "Github Actions", "AWS", "Docker","Flipper", "VS Code"]
    return(
        <div id="skills" className="skills section">
            <h2>Skills <i class="fa-solid fa-screwdriver-wrench"></i></h2>
            {/* <li>QA Automation</li> */}
            <ul className="skill-list">
            <h3>Languages</h3>
            {langs.map((lang, i) => <li className="skill-item">{lang}</li>)}
            <h3>Tools</h3>
            {tools.map((tool, i) => <li className="skill-item">{tool}</li>)}
            </ul>
        </div>
    )
}