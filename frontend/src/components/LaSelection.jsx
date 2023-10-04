import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/LaSelection.css";
import { Link } from "react-router-dom";

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
            <Link to={`/recipedetails/${meals.idMeal}`}>
              <button className="button1" type="button">
                See the recipe
              </button>
            </Link>
          </div>
        </div>
      </section>
    )
  );
}

export default LaSelection;
