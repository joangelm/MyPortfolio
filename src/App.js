import Nav from "./common/Nav";
import Home from "./pages/Home";
import "./common/Commoncss.css";
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
            {/* <Learn /> */}
            {/* <Home/>
      <About />
      <Services/>s
      <Education/>
      <Work/>
      <Contact/> */}
            <Routes>
                <Route exact="true" path="/myportfolio" element={<Home />}></Route>
                <Route path="/myportfolio" element={<Home />}></Route>
            </Routes>
        </div>
    );
}

export default App;
