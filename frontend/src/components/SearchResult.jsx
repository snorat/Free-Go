import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import RecipeList from "./RecipeList";
import SearchBar from "./SearchBar";

export default function SearchResult() {
  const [data, setData] = useState([]);
  const { searchTerm } = useParams();
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v2/${apiKey}/search.php?s=${searchTerm}`
      )
      .then((response) => {
        setData(response.data.meals);
      });
  }, [apiKey]);

  return (
    <>
      <SearchBar />
      <h2
        style={{
          backgroundColor: "#E1F4F4",
          padding: "50px",
          textAlign: "center",
        }}
      >
        Résultat de la recherche pour : {searchTerm}
      </h2>
      <div>
        {data.map((meal) => (
          <RecipeList key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </>
  );
}
