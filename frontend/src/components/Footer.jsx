import React from "react";
import { Link } from "react-router-dom";
import Instagram from "../assets/images/Instagram.png";
import Twitter from "../assets/images/Twitter.png";
import Facebook from "../assets/images/Facebook.png";
import Youtube from "../assets/images/Youtube.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="slogan">
        <img src="src/assets/logo-freego.png" alt="Free Go" />
      </div>
      <div className="Plan">
        <h4>PLAN DU SITE</h4>
        <Link to="/">
          <p>Homepage</p>
        </Link>
        <Link to="/categories">
          <p>Recipes</p>
        </Link>
        <Link to="/Favoris">
          <p>Favorites</p>
        </Link>
        <Link to="/TryFreeGo">
          <p>TryFreeGo</p>
        </Link>
      </div>
      <div className="socialmedia">
        <h4>NOS RESEAUX SOCIAUX</h4>
        <figure className="fig">
          <img src={Instagram} alt="Instagram" />
          <img src={Twitter} alt="Twitter" />
          <img src={Facebook} alt="Facebook" />
          <img src={Youtube} alt="Youtube" />
        </figure>
      </div>
    </div>
  );
}
export default Footer;
