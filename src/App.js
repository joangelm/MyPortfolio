import Nav from "./common/Nav";
import Home from "./pages/Home";
import "./common/Commoncss.css";
import About from "./pages/About";
import Education from "./pages/Education";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React, { Route, Routes } from "react-router-dom";

function App() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="app-container">
            <Nav />
            <div className="app-content">
                <Routes>
                    <Route exact="true" path="/" element={<Home />}></Route>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/education" element={<Education />}></Route>
                    <Route path="/portfolio" element={<Portfolio />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
