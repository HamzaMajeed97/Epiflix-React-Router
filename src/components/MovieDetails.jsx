import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  console.log("params", params);

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    console.log("componentDidMount chiamato");

    fetchMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.movieID]);

  const fetchMovieDetails = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=300e31da&i=${params.movieID}`
      );
      console.log("RESPONSE: ", response);
      if (response.ok) {
        let data = await response.json();
        setMovie(data);
      } else {
        alert("ERRORE NEL RECUPERO DEL FILM");
      }
    } catch (error) {
      console.log("error happened", error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center my-3">
        <Col className="text-center" xs={12} md={6}>
          <Card style={{ width: "18rem" }} className="detailsCard1">
            <Card.Img variant="top" src={movie.Poster} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>Year: {movie.Year}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Row>
          <Col>
            <Card style={{ width: "30rem" }} className="detailsCard2">
              <Card.Body>
                <Card.Text>Release Date: {movie.Released}</Card.Text>
                <Card.Text>Duration: {movie.Runtime}</Card.Text>
                <Card.Text>Imdb Rating: {movie.imdbRating}</Card.Text>

                <Card.Text>Writers: {movie.Writer}</Card.Text>
                <Card.Text>Actors: {movie.Actors}</Card.Text>

                <Card.Text>Genre: {movie.Genre}</Card.Text>
                <Card.Text>Plot: {movie.Plot}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default MovieDetails;
