/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from "react";
import axios from "axios";
import LaSelection from "./components/LaSelection";
import "./styles/LaSelection.css";
import "./App.css";
import SearchBar from "./components/SearchBar";
import "./styles/searchBar.css";
import "./styles/App.css";

export default function App() {
  
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        setData(response.data.meals[0]);
      });
  }, []);
  
  return (
    <div>
      <SearchBar />
      <div className="laSelection">
      <LaSelection meals={data} />
      </div>
    </div>
  );
}
