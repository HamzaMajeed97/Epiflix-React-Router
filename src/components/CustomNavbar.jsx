import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png'
import {Link, useLocation} from 'react-router-dom'


const CustomNavbar = () => {


  const location = useLocation()
  console.log('LOCATION', location)




return (
    <Navbar  style={{ backgroundColor: "black"}} >
    <Container>
    <Navbar.Brand >

        <img src= {Logo} style={{width: '100px', height: '55px'}} alt="logo" />
    </Navbar.Brand>
      <Nav  className="me-auto">
        <Nav.Link  style={{ color: "white"}}  href="#home">Home</Nav.Link>
        
        <Link  style={{ color: "white"}} className={location.pathname === '/tv-shows' ? 'nav-link active' : 'nav-link'} to="/tv-shows">TV Shows</Link>
        
        <Nav.Link  style={{ color: "white"}} href="#recentlyadded">Recently Added</Nav.Link>


        
      </Nav>
    </Container>
  </Navbar>
)



}


export default CustomNavbar