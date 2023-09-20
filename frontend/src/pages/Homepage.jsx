import React from "react";
import SearchBar from "../components/SearchBar";
import LaSelection from "../components/LaSelection";
import TrendRecipe from "../components/TrendRecipe";
import CardInsp from "../components/CardInsp";
import Cake from "../assets/images/Cake.png";

export default function Homepage() {
  return (
    <div>
      <SearchBar />
      <LaSelection />
      <TrendRecipe />
      <CardInsp
        imgSrc={Cake}
        imgAlt="cake-image"
        description="Si vous êtes en manque d'inspiration, pourquoi ne pas rechercher blablabla"
        buttonText="Découvre le par toi même ici"
        link="cardPage"
      />
    </div>
  );
}
