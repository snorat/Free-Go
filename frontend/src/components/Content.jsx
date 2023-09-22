import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Recettes from "../pages/Recettes";
import Favoris from "../pages/Favoris";
import RecipeDetails from "../pages/RecipeDetails";

export default function Content() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recettes" element={<Recettes />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/recipedetails/:id" element={<RecipeDetails />} />
      </Routes>
    </main>
  );
}
