import React from "react";
import IngredientsList from "../components/IngredientsList";
import IngredientsSearchBar from "../components/IngredientSearchBar";

export default function TryFreeGo() {
  return (
    <div>
      <div>
        <IngredientsSearchBar />
        <IngredientsList />
      </div>
    </div>
  );
}
