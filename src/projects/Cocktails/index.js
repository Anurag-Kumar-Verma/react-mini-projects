import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { CocktailProvider } from "./context";
import Navbar from "./Components/Navbar";
import SingleCocktail from "./SingleCocktail";
import CocktailAbout from "./About";
import ErrorPage from "./Components/Error";
import './style.css';

const CocktailApp = () => {
  return (
    <CocktailProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<CocktailAbout />} />
          <Route path="cocktail/:id" element={<SingleCocktail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </CocktailProvider>
  );
};

export default CocktailApp;
