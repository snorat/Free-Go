/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Free Go
        <br />
        <span className="slogan">Redonnez vie à votre frigo</span>
      </Link>

      <ul className={`navMenu ${isActive ? "active" : ""}`}>
        <li onClick={removeActive}>
          <NavLink to="/Homepage" className="navLink">
            Homepage
          </NavLink>
        </li>
        <li onClick={removeActive}>
          <NavLink to="/Recettes" className="navLink">
            Recettes
          </NavLink>
        </li>
        <li onClick={removeActive}>
          <NavLink to="/Favoris" className="navLink">
            Favoris
          </NavLink>
        </li>
        <li onClick={removeActive}>
          <NavLink to="/Generateur" className="navLink">
            <span className="navLinkText">Essayer FreeGo</span>
          </NavLink>
        </li>
      </ul>

      <div
        className={`hamburger ${isActive ? "active" : ""}`}
        onClick={toggleActiveClass}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
    </nav>
  );
}

export default Navbar;
