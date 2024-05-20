import React from "react";
import "./Home.css";
import profilepic from "../assets/img/profilepic.png";
import Pdf from "../assets/pdf/JoAngelMedina_Resume.pdf";
import { Link } from "react-router-dom";
import Linkedinicon from "../assets/img/socialicons/linkedin.png";
import Instagramicon from "../assets/img/socialicons/instagram.png";
import Githubicon from "../assets/img/socialicons/github.png";
import MailIcon from "../assets/img/socialicons/email.png";

const Home = () => {
    return (
        <div id="home">
            <div className="verticalbar"></div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="imgsec">
                            <img src={profilepic} data-aos="flip-right" alt="JoAngel Medina" className="img-fluid" />
                            <div className="socialmedia">
                                <a href="https://www.linkedin.com/in/joangelmedina/" target="_blank" rel="noreferrer">
                                    <img src={Linkedinicon} alt="linkedin" data-aos="fade-right" data-aos-delay="1000" />
                                </a>
                                <a href="https://github.com/joangelm" target="_blank" rel="noreferrer">
                                    <img src={Githubicon} alt="github" data-aos="fade-right" data-aos-delay="1000" />
                                </a>
                                <a href="https://www.instagram.com/thisizjoey/" target="_blank" rel="noreferrer">
                                    <img src={Instagramicon} alt="instagram" data-aos="fade-right" data-aos-delay="1000" />
                                </a>
                                <a href="mailto:jjoangelmedina@gmail.com" target="_blank" rel="noreferrer">
                                    <img src={MailIcon} alt="email" data-aos="fade-right" data-aos-delay="1000" />
                                </a>
                            </div>
                            <div className="bgblack" data-aos="fade-right"></div>
                        </div>
                    </div>
                    <div className="col-sm-5 offset-sm-2">
                        <div className="rightcontent" data-aos="fade-right">
                            <h1>JoAngel Medina</h1>
                            <h2>Software Developer</h2>
                            <div className="button-row">
                                <a href={Pdf} target="_blank" rel="noreferrer">
                                    <button type="button" className="btn btn-resume btn-light">
                                        Resume
                                    </button>
                                </a>
                                <Link to="/contact">
                                    <button type="button" className="btn btn-hire-me btn-dark">
                                        Hire Me
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
