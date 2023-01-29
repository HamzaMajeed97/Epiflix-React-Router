import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const CustomNavbar = () => {
  const location = useLocation();
  console.log("LOCATION", location);

  return (
    <Navbar style={{ backgroundColor: "black" }}>
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img
              src={Logo}
              style={{ width: "100px", height: "55px" }}
              alt="logo"
            />
          </Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Link to="/">
            <div
              className="nav-link"
              style={{ color: "white", underline: "none" }}
            >
              Home
            </div>
          </Link>

          <Nav.Link style={{ color: "white" }}>TV Shows</Nav.Link>

          <Nav.Link style={{ color: "white" }}>Recently Added</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
