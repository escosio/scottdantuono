import React from "react";

export const Skills = () => {
    const skills = ["Python", "React", "Javascript", "Cypress"]
    return(
        <div id="skills" className="skills section">
            <h2>Skillz</h2>
            {/* <li>QA Automation</li> */}
            <h3>Languages</h3>
            {skills.map((skill, i) => <p>{skill}</p>)}
        </div>
    )
}