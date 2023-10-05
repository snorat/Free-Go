import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/recipelist.css";

export default function RecipeList({ meal }) {
  return (
    <div className="recipe_list">
      <Link to={`/recipedetails/${meal.idMeal}`}>
        <div className="recipe_info">
          <h3>{meal.strMeal}</h3>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <button type="button">See the recipe</button>
        </div>
      </Link>
    </div>
  );
}

RecipeList.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.string.isRequired,
    strMeal: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string,
  }).isRequired,
};
