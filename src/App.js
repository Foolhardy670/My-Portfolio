import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/projects.js"; 
import About from "./components/About.js";
import Contact from "./components/Contact";

import "./styles/app.scss";
import "./styles/main.scss";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className={darkMode ? "app dark-mode" : "app light-mode"}>
        <NavigationBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
