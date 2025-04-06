import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home: React.FC<{ onLoginClick: () => void }> = ({ onLoginClick }) => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <header className="header">
        <nav className="navbar">
          <h1 className="logo">Coffee Haven</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <button 
                onClick={onLoginClick} 
                className="login-link">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Coffee Haven</h1>
          <p>Experience the perfect blend of comfort and quality</p>
          <Link to="/menu" className="cta-button">
            Order Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#4b2c20", color: "white", textAlign: "center", padding: "1rem", marginTop: "2rem" }}>
        <p>&copy; {new Date().getFullYear()} Coffee Haven. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
