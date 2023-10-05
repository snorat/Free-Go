import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/SearchBar.css";

export default function SearchBar() {
  const [userResearch, setUserResearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/search/${userResearch}`);
  };

  const handleSearch = (event) => {
    setUserResearch(event.target.value);
  };

  return (
    <form className="main_searchbar" onSubmit={handleSubmit}>
      <h2>Find what you're looking for on Free-Go, and much more!</h2>
      <div className="both_input">
        <input
          className="input_search"
          type="text"
          placeholder="search on free-go"
          onChange={handleSearch}
        />
        <input className="input_button" type="submit" value="Search" />
      </div>
    </form>
  );
}
