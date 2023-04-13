import React, { Component } from "react";
import { Container } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import Slider from "react-slick";

class Gallery1 extends Component {
  state = {
    movies: [],
    key: process.env.REACT_APP_API_KEY,
  };

  fetchfilm = async () => {
    try {
      let response = await fetch(
        `https://www.omdbapi.com/?s=${this.props.movieSearch}&apikey=${this.state.key}`
      );
      if (response.ok) {
        let film = await response.json();
        console.log(film); // funziona
        this.setState({ movies: film.Search });
      }
    } catch (error) {
      // console.log(error);
    }
  };

  componentDidMount() {
    this.fetchfilm();
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
    };

    return (
      <div className="gallery1">
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

export default Gallery1;
