import React from "react";

export const Skills = () => {
    const langs = ["Python", "React.js", "Javascript", "Cypress"]
    const tools = ["Jenkins", "Postman", "Github Actions"]
    return(
        <div id="skills" className="skills section">
            <h2>Skills</h2>
            {/* <li>QA Automation</li> */}
            <ul>
            <h3>Languages</h3>
            {langs.map((lang, i) => <li className="skill-item">{lang}</li>)}
            </ul>
            <ul>
                <h3>Tools</h3>
                {tools.map((tool, i) => <li>{tool}</li>)}
            </ul>
        </div>
    )
}