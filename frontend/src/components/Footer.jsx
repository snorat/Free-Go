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
        <img src="" alt="Free Go" />
        <p>Redonnez vie à votre frigo</p>
      </div>
      <div className="Plan">
        <h4>PLAN DU SITE</h4>

        <Link to="/accueil">
          <p>Accueil</p>
        </Link>
        <Link to="/nos-recettes">
          <p>Nos recettes</p>
        </Link>
        <Link to="/free-go">
          <p>Free-Go</p>
        </Link>
        <Link to="/vos-favoris">
          <p>Vos favoris</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
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
