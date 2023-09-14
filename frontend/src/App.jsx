/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from "react";
import axios from "axios";
import LaSelection from "./components/LaSelection";
import "./styles/LaSelection.css";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        setData(response.data.meals[0]);
      });
  }, []);

  return (
    <div className="laSelection">
      <LaSelection meals={data} />
    </div>
  );
}

export default App;
