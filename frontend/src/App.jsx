import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
