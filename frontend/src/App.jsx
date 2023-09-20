import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/app.css";
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
