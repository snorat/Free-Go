import React from "react";
import "../styles/welcomecomponent.css";
// import welcomeImage from "../assets/welcomeimg.jpg";

export default function WelcomeComponent() {
  return (
    <div className="wave-container">
      <div className="image-caption">
        <h3>Free-Go transforms your fridge into a gold mine</h3>
        <p className="textwelcome">
          {" "}
          ✔️ Recipes that adapt to your fridge <br />
          ✔️Use what you have at home to cook <br />
          ✔️Less waste, more savings, and no time wasted{" "}
        </p>
      </div>
    </div>
  );
}
