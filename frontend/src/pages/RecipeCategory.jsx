import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/RecipeCategory.css";
import axios from "axios";

export default function RecipeCategory() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const API_URL = `https://www.themealdb.com/api/json/v2/${apiKey}/categories.php`;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div className="container-category">
      <div className="image-principal">
        <h3>
          {" "}
          Free Go: Crafting delectable recipes, inspired by your ingredient
          categories, and beyond
        </h3>
      </div>
      <h2>Recipe Categories</h2>
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.idCategory} className="category-item">
            <Link to={`/category/${category.strCategory}`}>
              <div className="plat">
                <img
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                  className="category-image"
                />
              </div>
              {category.strCategory}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
