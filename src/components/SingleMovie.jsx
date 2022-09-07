import {Image, Button, Link} from "react-bootstrap"
import { Component } from "react";

class SingleMovie extends Component {
 


    render() {
        return (
        <>
              <div className='image-container d-flex justify-content-start m-3' >

                <Image src={this.props.movie.Poster}   />
      
              </div>
              <Link to={'/details/' + this.props.movie.imdbID}>
              <Button > Details </Button>
                
            </Link>
        </>
    
        )
    }
}

export default SingleMovie