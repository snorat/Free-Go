import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Recettes from "../pages/Recettes";
import Favoris from "../pages/Favoris";
import TryFreeGo from "../pages/TryFreeGo";
import RecipeDetails from "../pages/RecipeDetails";
import SearchResult from "./SearchResult";
import RecipeCategory from "../pages/RecipeCategory";
import Page404 from "../pages/Page404";

export default function Content() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recettes" element={<Recettes />} />
        <Route path="/tryfreego" element={<TryFreeGo />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/recipedetails/:id" element={<RecipeDetails />} />
        <Route path="/search/:searchTerm" element={<SearchResult />} />
        <Route path="/categories" element={<RecipeCategory />} />
        <Route path="/category/:categoryName" element={<Recettes />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </main>
  );
}
