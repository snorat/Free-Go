/* eslint-disable import/no-extraneous-dependencies */
import LaSelection from "./components/LaSelection";
import "./styles/LaSelection.css";
import SearchBar from "./components/SearchBar";
import "./styles/searchBar.css";
import Navbar from "./components/Navbar";
import "./styles/Navbar.css";
import "./styles/App.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <LaSelection />
    </div>
  );
}
