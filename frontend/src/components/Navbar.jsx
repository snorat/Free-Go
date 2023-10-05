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
        <img src="src/assets/logo-freego.png" alt="Free Go" />
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
            to="/categories"
            className="navLink"
            activeClassName="active"
            onClick={removeActive}
          >
            Recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favoris"
            className="navLink"
            activeClassName="active"
            onClick={removeActive}
          >
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tryfreego"
            className="navLink"
            activeClassName="active"
            onClick={removeActive}
          >
            <span className="navLinkText">Try FreeGo</span>
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
