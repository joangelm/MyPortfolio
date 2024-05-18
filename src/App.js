import Nav from "./common/Nav";
import Home from "./pages/Home";
import "./common/Commoncss.css";
import About from "./pages/About";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React, { Route, Routes } from "react-router-dom";

function App() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <Nav />
            <Routes>
                <Route exact="true" path="/home" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/education" element={<Education />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </div>
    );
}

export default App;
