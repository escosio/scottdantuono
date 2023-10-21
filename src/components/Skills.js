import React from "react";

export const Skills = () => {
    const skills = ["Python", "React.js", "Javascript", "Cypress"]
    return(
        <ul id="skills" className="skills section">
            <h2>Skills</h2>
            {/* <li>QA Automation</li> */}
            <h3>Languages</h3>
            {skills.map((skill, i) => <li>{skill}</li>)}
        </ul>
    )
}