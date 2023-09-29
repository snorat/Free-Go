import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/RecipeDetails.css";

const apiKey = import.meta.env.VITE_API_KEY;

export default function RecipeDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v2/${apiKey}/lookup.php?i=${id}`)
      .then((response) => {
        setData(response.data.meals[0]);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, [id]);

  if (!data) {
    // Affiche un chargement ou un message d'erreur si les données ne sont pas encore disponibles
    return <div>Chargement en cours...</div>;
  }

  const addRecipeToFavoris = (idMeal) => {
    const favoris = JSON.parse(localStorage.getItem("favoris")) || [];
    if (!favoris.includes(idMeal)) {
      favoris.push(idMeal);
      localStorage.setItem("favoris", JSON.stringify(favoris));
    }
    console.info(idMeal);
  };

  return (
    <div className="Details">
      <div className="heart">
        <div />
        <h2>{data.strMeal}</h2>
        <div className="pulsing" />
        <button type="button" onClick={() => addRecipeToFavoris(id)}>
          Favoris
        </button>{" "}
      </div>

      <img src={data.strMealThumb} alt={data.strMeal} />

      <div className="ingredient">
        <h3>Ingrédients</h3>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
          const ingredient = data[`strIngredient${index}`];
          const measure = data[`strMeasure${index}`];
          return ingredient && measure ? (
            <h5 key={index}>
              {measure} {ingredient}
            </h5>
          ) : null;
        })}
      </div>
      <div className="instruction">
        <h3>Instructions :</h3>
        <p>{data.strInstructions}</p>
      </div>
      {/* <h5>{meals.strYoutube}</h5>
           <Link to={`/recipedetails/${meals.strYoutube}`}>See the recipe</Link> */}
    </div>
  );
}
