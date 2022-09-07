import { Component } from "react";
import SingleMovie from "./SingleMovie";
import { Container, Col } from "react-bootstrap";



class Gallery2 extends Component {

    state = {
        movieslist: [],
      };

    componentDidMount() {
        this.fetchfilm();
      }
    
      fetchfilm = async () => {
        try {
          let response = await fetch("http://www.omdbapi.com/?s=Star+Wars&apikey=9a069d0a"
          
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




render () {
    return (
        <div>
  
        <h2 className="title">{this.props.title}</h2>
                <Container fluid className=' overlay d-flex align-items-center justify-content-center'>
                    {this.state.movieslist.map((f) => (
                        <Col className='poster'key={f.imdbID}>
                            <SingleMovie movie={f} />
                        </Col>
                    ))}
                </Container> 
  
        </div>
    )
}



}


export default Gallery2