import Gallery1 from "./Gallery1";
import Gallery2 from "./Gallery2";
import Gallery3 from "./Gallery3";

const Home = () => {
  return (
    <div className="moviesList">
      <div>
        <Gallery1 movieSearch="avengers" className="gallery1" />
        <Gallery2 movieSearch="Star+Wars" className="gallery2" />
        <Gallery3 movieSearch="batman" className="gallery3" />
      </div>
    </div>
  );
};

export default Home;
