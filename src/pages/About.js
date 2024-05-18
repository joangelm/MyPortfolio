import React from "react";
import "./About.css";

const About = () => {
    return (
        <div id="about" data-aos="zoom-in" data-aos-duration="1200">
            <div className="container">
                <div className="row">
                    <div className="col-sm-11 offset-sm-1">
                        <div className="aboutcontent">
                            <h2>About Me</h2>
                            <p>
                                I am a passionate Web Developer with a keen interest in Full-stack application development. My journey kicked off with
                                school projects and personal coding challenges, where I tackled all sorts of problems. I've built bots for Discord and
                                developed full-stack apps for small local businesses, which helped me sharpen my skills and fuel my passion for
                                learning and innovation. I am always eager to acquire new skills and explore fresh ideas for both personal and
                                professional growth, striving to stay at the forefront of technological advancements and leverage my knowledge to
                                create impactful solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
