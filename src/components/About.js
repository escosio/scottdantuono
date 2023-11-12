import React from "react";
import me from "../assets/mepic.jpg"


const About = () => {

    return(
        <div className="about">
            <h3>About Me</h3>
            <img src={me} alt="about_pic" className="selfpic"/>
        </div>
    )
}

export default About;