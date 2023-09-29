import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/ingredientsearchbar.css";

export default function IngredientSearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [data, setData] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setIngredients([...ingredients, inputValue]);
      setInputValue("");
      setSearched(true);
    }
  };

  const deleteIngredient = (ingredient) => {
    setIngredients(ingredients.filter((item) => item !== ingredient));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (ingredients.length > 0) {
          // Effectuer une recherche pour chaque ingrédient et fusionner les résultats
          const ingredientsString = ingredients.join(",");
          const response = await axios.get(
            `https://www.themealdb.com/api/json/v2/9973533/filter.php?i=${ingredientsString}`
          );
          const resultMeals = response.data.meals;
          setData(resultMeals || []);
        } else {
          // Si aucun ingrédient n'est sélectionné, effacer les données
          setData([]);
          setSearched(false);
        }
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données :",
          error
        );
      }
    };

    fetchData();
  }, [ingredients]);

  return (
    <div className="frist-containeur">
      <h2>Search your Ingredients</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <input type="submit" value="Search" />
      </form>
      {ingredients.map((ingredient) => (
        <div key={ingredient}>
          <p>{ingredient}</p>
          <button type="button" onClick={() => deleteIngredient(ingredient)}>
            Delete
          </button>
        </div>
      ))}
      {searched && data.length === 0 ? (
        <p>No recipe</p>
      ) : (
        <ul>
          {data.map((meal) => (
            <li key={meal.idMeal} className="recipe-item1">
              <Link to={`/recipedetails/${meal.idMeal}`}>
                <div className="recipe-content1">
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                  <h3>{meal.strMeal}</h3>
                </div>
                <button type="button" className="view-recipe-button1">
                  See the recipe
                </button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
