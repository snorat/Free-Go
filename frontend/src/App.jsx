import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Recettes from "./pages/Recettes";
import Favoris from "./pages/Favoris";
import "./styles/Navbar.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Recettes" element={<Recettes />} />
        <Route path="/Favoris" element={<Favoris />} />
      </Routes>
    </div>
  );
}

export default App;
