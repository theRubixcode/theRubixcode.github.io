import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About.js";
import Skills from "./skills/Skills.js";
import Projects from "./projects/Projects.js";
import Contact from "./contact/Contact.js";
import "./styles/app.css";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={About} />
        <Route path="/" element={Skills} />
        <Route path="/" element={Projects} />
        <Route path="/" element={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
