import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function Recettes() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { categoryName } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const API_URL = `https://www.themealdb.com/api/json/v2/${apiKey}/filter.php?c=${categoryName}`;
    axios
      .get(API_URL)
      .then((response) => {
        setRecipes(response.data.meals || []);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, [categoryName]);

  return (
    <div>
      <h2>Recipes in Category: {categoryName}</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>
            <Link to={`/recipedetails/${recipe.idMeal}`}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              {recipe.strMeal}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
