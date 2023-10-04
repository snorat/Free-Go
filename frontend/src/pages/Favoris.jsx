/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/favoris.css";
import Welcofavoris from "../components/Welcofavoris";

export default function Favoris() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [recipes, setRecipes] = useState([]);

  const removeFavoris = (idMeal) => {
    const localFavoris = JSON.parse(localStorage.getItem("favoris")) || [];
    const updatedFavoris = localFavoris.filter((favori) => favori !== idMeal);
    localStorage.setItem("favoris", JSON.stringify(updatedFavoris));
    window.location.reload();
  };

  useEffect(() => {
    const localFavoris = JSON.parse(localStorage.getItem("favoris")) || [];

    // Charger les détails des recettes en favoris depuis l'API
    const requests = localFavoris.map((idMeal) => {
      return axios.get(
        `https://www.themealdb.com/api/json/v2/${apiKey}/lookup.php?i=${idMeal}`
      );
    });

    Promise.all(requests)
      .then((responses) => {
        const responseData = responses.map(
          (response) => response.data.meals[0]
        );
        setRecipes(responseData);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données:",
          error
        );
      });
  }, [apiKey]);

  return (
    <>
      <Welcofavoris />
      <div className="title-with-lines">
        <div className="line left-line" />
        <h2>My Favorite Recipes</h2>
        <div className="line right-line" />
      </div>
      <div className="favoris">
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} className="favoris_result">
            <h5>{recipe.strMeal}</h5>
            <img
              className="picturePrincipal"
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />
            <button type="button" onClick={() => removeFavoris(recipe.idMeal)}>
              Delete favorites
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
