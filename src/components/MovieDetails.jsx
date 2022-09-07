import { useParams, useEffect, useState } from "react-router-dom"
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap'

const MovieDetails = () => {
    
    const params = useParams()
    console.log('params', params)
    
    
    const [movie, setMovie] = useState(null)





    const fetchMovieDetails = async () => {
        try {
          let response = await fetch(
            'http://www.omdbapi.com/?apikey=9a069d0a&i=' + movieId
          ) 
          console.log('RESPONSE: ', response)
          if (response.ok) {
           
            let data = await response.json() 
            console.log(data)
          
            setMovie(data.Search[0])
          } else {
            alert('ERRORE NEL RECUPERO DEL FILM')
          }
        } catch (error) {
          console.log('error happened', error)
        }
      }
    
    
      useEffect(() => {
        console.log('componentDidMount chiamato')
        fetchMovieDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    
   
    
    
    
    
    
    
    
    return (
<div>
<Container>
      <Row className="justify-content-center my-3">
        <Col className="text-center" xs={12} md={6}>
          
        </Col>
      </Row>
    </Container>
</div>
    )
}


export default MovieDetails