import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/ingredientslist.css";

export default function IngredientsList() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [lists, setLists] = useState([]); // création de lists en tableau vide
  const [recipes, setRecipes] = useState([]); // création de recipes en tableau vide

  useEffect(() => {
    // UseEffect permet d'effectuer une action pendant le chargement de IngredientList
    axios
      .get(`https://www.themealdb.com/api/json/v2/${apiKey}/list.php?i=list`)
      .then((response) => {
        // on demande à l'API de mettre les ingredients dans notre const lists
        setLists(response.data.meals.slice(0, 30)); // affichage des 20 premiers ingrédients
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des ingrédients : ",
          error
        );
      });
  }, []); // [] signifie que cette requête API est effectuée une seule fois lors du chargement initial du composant

  const fetchRecipes = async (ingredient) => {
    // cette const peut trouver des recettes pour un ingredient donné
    try {
      const response = await axios.get(
        // Axios nous donne des recettes pour cet ingrédient.
        `https://www.themealdb.com/api/json/v2/${apiKey}/filter.php?i=${ingredient}`
      );
      setRecipes(response.data.meals || []); // si on a une recette on l'a met dans notre const recipes comme une MAJ ou un tableau vide si il n'y en a pas
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des recettes : ",
        error
      );
    }
  };

  return (
    <div className="main-button-container">
      <h1>Top 30's ingredients</h1>
      <div className="button-container">
        {lists.map((ingredient) => (
          <div className="button_ingredient">
            <button
              type="button"
              key={ingredient.idIngredient}
              onClick={() => fetchRecipes(ingredient.strIngredient)}
            >
              <div className="image-ingredient">
                <img
                  src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png`}
                  alt={ingredient.strIngredient}
                />
              </div>
            </button>
            <h5>{ingredient.strIngredient}</h5>
          </div>
        ))}
      </div>

      {recipes.length > 0 && (
        // <div className="recipe-list">
        <ul className="recipe-item">
          {recipes.map((recipe) => (
            <li key={recipe.idMeal}>
              <Link to={`/recipedetails/${recipe.idMeal}`}>
                <div className="recipe-content">
                  <h3>{recipe.strMeal}</h3>
                  <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                  <button type="button" className="view-recipe-button">
                    See the recipe
                  </button>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        // </div>
      )}
    </div>
  );
}
