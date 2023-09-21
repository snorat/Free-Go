import React from "react";
import "../styles/welcomecomponent.css";
// import welcomeImage from "../assets/welcomeimg.jpg";

export default function WelcomeComponent() {
  return (
    <div className="wave-container">
      <div className="image-caption">
        <h3>Free-Go transforme ton frigo en une mine d’or.</h3>
        <p className="textwelcome">
          {" "}
          ✔️ Des recettes qui s’adaptent à ton frigo <br />
          ✔️ Utilise ce que tu as chez toi pour cuisiner <br />
          ✔️ – de gaspillage, + d’économies, – de perte de temps{" "}
        </p>
      </div>
    </div>
  );
}
