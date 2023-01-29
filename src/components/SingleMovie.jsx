import {
  
  Button,
  Card,
  Container,
  Row,
  Col,

} from "react-bootstrap";
import { Component } from "react";
import { Link } from "react-router-dom";


class SingleMovie extends Component {


  render() {
  

    return (
      <Container>
        <Row className=" my-3">
          <Col className="text-center m-auto">
            <Card
              style={{
             
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              <Card.Img
                src={this.props.movie.Poster}
                alt="Movie Poster"
                className="poster"
              />
              <Card.Body>
                <Link to={"/details/" + this.props.movie.imdbID}>
                  <Button className="detailButton"> Details </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

   
    );
  }
}

export default SingleMovie;
