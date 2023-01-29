import { Component } from "react";
import SingleMovie from "./SingleMovie";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

class Gallery3 extends Component {
  state = {
    movies: [],
    key: "300e31da",
  };

  componentDidMount() {
    this.fetchfilm();
  }

  fetchfilm = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?s=${this.props.movieSearch}&apikey=${this.state.key}`
      );

      if (response.ok) {
        let film = await response.json();
        this.setState({ movies: film.Search });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
    };

    return (
      <div className="gallery3">
        <Container style={{ maxWidth: "1360px" }}>
          <Slider {...settings}>
            {this.state.movies.map((f) => (
              <SingleMovie className="poster" key={f.imdbID} movie={f} />
            ))}
          </Slider>
        </Container>
      </div>
    );
  }
}

export default Gallery3;
