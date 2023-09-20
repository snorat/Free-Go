import React from "react";
import SearchBar from "../components/SearchBar";
import LaSelection from "../components/LaSelection";
import TrendRecipe from "../components/TrendRecipe";

export default function Homepage() {
  return (
    <div>
      <SearchBar />
      <LaSelection />
      <TrendRecipe />
    </div>
  );
}
