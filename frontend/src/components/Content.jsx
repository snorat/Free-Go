import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Recettes from "../pages/Recettes";
import Generateur from "../pages/Generateur";
import Favoris from "../pages/Favoris";

export default function Content() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/recettes" element={<Recettes />} />
      <Route path="/generateur" element={<Generateur />} />
      <Route path="/favoris" element={<Favoris />} />
    </Routes>
  );
}
