/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/favoris.css";
import Welcofavoris from "../components/Welcofavoris";

export default function Favoris() {
  const removeFavoris = (idMeal) => {
    const favoris = JSON.parse(localStorage.getItem("favoris")) || [];
    const updatedFavoris = favoris.filter((favori) => favori !== idMeal);
    localStorage.setItem("favoris", JSON.stringify(updatedFavoris));
    window.location.reload();
  };

  const apiKey = import.meta.env.VITE_API_KEY;
  const [favoris, setFavoris] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const localFavoris = JSON.parse(localStorage.getItem("favoris")) || [];
    setFavoris(localFavoris);

    // Charger les détails des recettes en favoris depuis l'API
    const requests = favoris.map((idMeal) => {
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
              Delete favoris
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
