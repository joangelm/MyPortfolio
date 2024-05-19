import React from "react";
import "./Portfolio.css";
import ProjectData from "../data/Portfolio.json";
import githubImg from "../assets/img/github.png";

import BassumibakesImg from "../data/portimg/Bassumibakes.png";
import DataplatformImg from "../data/portimg/Dataplatform.png";

const imageMap = {
    Bassumibakes: BassumibakesImg,
    Dataplatform: DataplatformImg,
};

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="verticalbar"></div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 offset-sm-1">
                        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                            Projects
                        </h2>
                        <br />
                        <div className="row">
                            {ProjectData.filter((project) => project.name).map((project, i) => (
                                <div className="col-sm-6 project-card" key={i} style={{ "--i": i }}>
                                    <img src={imageMap[project.thumbnail]} alt={project.name} className="project-thumbnail" />
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <p>
                                        <strong>Technologies:</strong> {project.technologies}
                                    </p>
                                    <a href={project.codelink} className="btn btn-default d-block github" target="_blank" rel="noreferrer">
                                        Github Code <img src={githubImg} alt="GitHub" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
