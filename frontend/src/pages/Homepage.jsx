import React from "react";
import SearchBar from "../components/SearchBar";
import LaSelection from "../components/LaSelection";
import TrendRecipe from "../components/TrendRecipe";
import CardInsp from "../components/CardInsp";
import Cake from "../assets/images/Cake.png";
import WelcomeComponent from "../components/WelcomeComponent";

export default function Homepage() {
  return (
    <div>
      <WelcomeComponent />
      <SearchBar />
      <LaSelection />
      <TrendRecipe />
      <CardInsp
        imgSrc={Cake}
        imgAlt="cake-image"
        description="If you're in need of some culinary inspiration, why not explore recipes that match the ingredients you already have at your disposal?"
        buttonText="Learn more"
        link="cardPage"
      />
    </div>
  );
}
