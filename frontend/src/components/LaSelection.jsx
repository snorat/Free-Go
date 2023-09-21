import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/LaSelection.css";

function LaSelection() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [meals, setMeals] = useState(null);
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v2/${apiKey}/random.php`)
      .then((response) => {
        setMeals(response.data.meals[0]);
      });
  }, []);

  function getMeal() {
    if (meals) {
      console.info(meals.idMeal);
    }
  }

  return (
    meals && (
      <section className="laSelection">
        <div className="enTete">
          <h3>Free-go selection</h3>
        </div>
        <div className="web">
          <img
            className="picturePrincipal"
            src={meals.strMealThumb}
            alt={meals.strMeal}
          />
          <div className="divText">
            <h5>{meals.strMeal}</h5>
            <button type="button" onClick={getMeal}>
              See the recipe
            </button>
          </div>
        </div>
      </section>
    )
  );
}

export default LaSelection;
