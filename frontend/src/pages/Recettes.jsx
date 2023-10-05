import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RecipeList from "../components/RecipeList";

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
    <>
      <h2
        style={{
          backgroundColor: "#E1F4F4",
          padding: "50px",
          textAlign: "center",
        }}
      >
        Result for the search : {categoryName}
      </h2>
      <div>
        {recipes.map((meal) => (
          <RecipeList key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </>
  );
}
