import { Component } from "react";
import { Card, Row, Col, Container, } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import { Carousel } from "react-bootstrap";

class Gallery1 extends Component {
  state = {
    movieslist: [],
  };

  componentDidMount() {
    this.fetchfilm();
  }

  fetchfilm = async () => {
    try {
      let response = await fetch("http://www.omdbapi.com/?apikey=9a069d0a&s=harry%20potter"
      );

      if (response.ok) {
        let film = await response.json();
        this.setState({ movieslist: film.Search });
        console.log(this.state.movieslist);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <h2 className="title">{this.props.title}</h2>
                <Container fluid className=' d-flex align-items-center justify-content-center'>
                    {this.state.movieslist.map((f) => (
                        <Col className='poster'key={f.imdbID}>
                            <SingleMovie movie={f} />
                        </Col>
                    ))}
                </Container>
      </div>
    );
  }
}

export default Gallery1;
