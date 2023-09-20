import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Recettes from "../pages/Recettes";
import Favoris from "../pages/Favoris";

export default function Content() {
  return (
    <Routes>
      <Route path="/*" element={<Homepage />} />
      <Route path="/Homepage" element={<Homepage />} />
      <Route path="/Recettes" element={<Recettes />} />
      <Route path="/Favoris" element={<Favoris />} />
    </Routes>
  );
}
