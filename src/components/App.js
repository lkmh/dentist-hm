import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Procedures from "./Procedures";

const App = () => {
    return (
        <div>
          <nav>
            <Link to={"/"}>Go to Home Page</Link>
            <Link to={"/procedures"}>See Our Procedures</Link>
            <Link to={"/contact"}>Contact Us!</Link>
          </nav>
          <div>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="contact" element={<Contact/>} />
            <Route path="procedures" element={<Procedures />} />
          </Routes>
          </div>
        </div>
    );
}

export default App;
