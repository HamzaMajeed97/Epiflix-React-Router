import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/details/:movieID" element={<MovieDetails />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
