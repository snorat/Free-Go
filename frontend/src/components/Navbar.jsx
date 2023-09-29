import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import "../styles/Navbar.css";
import "../styles/App.css";

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
        <li>
          <NavLink
            to="/"
            className="navLink"
            activeClassName="active"
            onClick={removeActive}
          >
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/recettes"
            className="navLink"
            activeClassName="active"
            onClick={removeActive}
          >
            Recettes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favoris"
            className="navLink"
            activeClassName="active"
            onClick={removeActive}
          >
            Favoris
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tryfreego"
            className="navLink"
            activeClassName="active"
            onClick={removeActive}
          >
            <span className="navLinkText">Essayer FreeGo</span>
          </NavLink>
        </li>
      </ul>
      <button
        type="button"
        className={`hamburger ${isActive ? "active" : ""}`}
        onClick={toggleActiveClass}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </nav>
  );
}

export default Navbar;
