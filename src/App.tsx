import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";
import Menu from "./menu.tsx";
import About from "./About.tsx";
import Login from "./components/Login.tsx";
import "./App.css";


const App: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  
  const handleLoginClick = () => {
    setShowLogin(true);
  };
  
  const handleCloseLogin = () => {
    setShowLogin(false);
  };
  return (
    <Router>
      {showLogin && <Login onClose={handleCloseLogin} />}
      <Routes>
        <Route path="/" element={<Home onLoginClick={handleLoginClick} />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<div className="app-container"><h1>Contact Us</h1><p>This page is under construction.</p></div>} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </Router>
  );
};

export default App;
