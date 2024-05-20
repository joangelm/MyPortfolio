import React, { useState, useRef } from "react";
import "./Portfolio.css";
import ProjectData from "../data/Portfolio.json";
import githubImg from "../assets/img/github.png";

const Project = (props) => {
    const { project, i } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef(null);

    const handleMouseEnter = (length) => {
        if (timerRef.current === null) {
            timerRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
            }, 1500);
        }
    };

    const handleMouseLeave = () => {
        if (timerRef.current !== null) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        setCurrentIndex(0);
    };

    return (
        <div className="project-card" key={i} style={{ "--i": i }}>
            <div className="project-image-container" onMouseEnter={() => handleMouseEnter(project.thumbnails.length)} onMouseLeave={handleMouseLeave}>
                {project.thumbnails.map((thumbnail, index) => (
                    <img
                        key={index}
                        src={require(`../data/portimg/${project.thumbnailContext}/${thumbnail}`)}
                        alt={project.name}
                        className={`project-thumbnail  ${currentIndex === index ? "show" : ""}`}
                    />
                ))}
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
                <strong>Technologies:</strong> {project.technologies}
            </p>
            <a href={project.codelink} className="btn btn-default d-block github" target="_blank" rel="noreferrer">
                Github Code <img src={githubImg} alt="GitHub" />
            </a>
        </div>
    );
};

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h2>Projects</h2>
            <br />
            <div className="projects-container">
                {ProjectData.filter((project) => project.name).map((project, i) => (
                    <Project key={i} project={project} i={i} />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
