import React from "react";
import Errorgif from "../assets/img/404.gif";
import "./PageNotFound.css";

const PageNotFound = () => {
    return (
        <div id="pagenotfound" className="text-center" data-aos="fade-in">
            <div className="verticalbar"></div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <img id="error-gif" src={Errorgif} data-aos="flip-right" alt="404 Error" className="img-fluid" />
                        <h1>404</h1>
                        <h2>Page Not Found!</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;
