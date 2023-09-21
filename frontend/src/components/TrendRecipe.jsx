// TrendRecipe.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/trendrecipe.css";

export default function Homepage() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v2/${apiKey}/randomselection.php${recipes}`
      )

      .then((response) => {
        setRecipes(response.data.meals.slice(0, 6));
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des recettes : ", error);
      });
  }, []);

  return (
    <div className="recipe-layout">
      <h1>Recipe Trend</h1>
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} className="recipe-container">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <div className="recipe-name">{recipe.strMeal}</div>
        </div>
      ))}
    </div>
  );
}
