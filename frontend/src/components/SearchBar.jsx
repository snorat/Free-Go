import React, { useState } from "react";
import axios from "axios";
import searchIcon from "../assets/images-searchbar/emoji.png";
import "../styles/searchBar.css";

export default function SearchBar() {
  const apiKey = "import.meta.env.VITE_API_KEY";
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v2/${apiKey}/search.php?s=${searchTerm}`
      )
      .then((response) => {
        console.info(response);
      })
      .catch((error) => {
        console.error("Error searching:", error);
      });
  };
  return (
    <div className="search-containeur">
      <input
        placeholder="Search the site..."
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} type="submit">
        Search
        <img src={searchIcon} alt="Search" />
      </button>
    </div>
  );
}
