import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import "./styles/app.scss";
import "./styles/main.scss";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

// ✅ Lazy load page components
const Home = lazy(() => import("./components/Home"));
const Projects = lazy(() => import("./components/projects.js"));
const About = lazy(() => import("./components/About.js"));
const Contact = lazy(() => import("./components/Contact"));

// ✅ Optional: Simple fallback spinner using Bootstrap
const Loader = () => (
  <div
    style={{
      minHeight: "50vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

// Create a separate component that uses useLocation inside Router
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className={darkMode ? "app dark-mode" : "app light-mode"}>
        <NavigationBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="page-content">
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
