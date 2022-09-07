import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";

import Gallery1 from "./components/Gallery1";
import Gallery2 from "./components/Gallery2";
import Gallery3 from "./components/Gallery3";
import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/tv-shows" element={<TVShows/>}   />
<Route path="/detail/:movieid" element={<MovieDetails/>}/>
          
        </Routes>

        <Gallery1 movieSearch="harry%20potter" />
        <Gallery2 />
        <Gallery3 />
      </div>
    </BrowserRouter>
  );
}

export default App;
