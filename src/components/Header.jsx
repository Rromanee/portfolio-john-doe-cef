import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand text-uppercase" to="/">
            John Doe
          </NavLink>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase" to="/">
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase" to="/realisations">
                  Réalisations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase" to="/contact">
                  Me Contacter
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;