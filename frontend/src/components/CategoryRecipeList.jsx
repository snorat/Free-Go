import React, { useEffect, useState, useParams } from "react";
import axios from "axios";

export default function RecipeList() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [recipes, setRecipes] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v2/${apiKey}/filter.php?c=${searchTerm}`
      )
      .then((response) => {
        setRecipes(response.data.meals);
      });
  }, [apiKey]);

  return (
    <>
      <h2>Résultat de la recherche pour : {searchTerm}</h2>
      <div>
        {recipes.map((meal) => (
          <RecipeList key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </>
  );
}
