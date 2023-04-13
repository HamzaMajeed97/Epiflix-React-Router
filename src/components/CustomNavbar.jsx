import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <Navbar style={{ backgroundColor: "black" }}>
      <Container>
        <Link to="/">
          <Navbar.Brand
            style={{
              color: "red",
              fontSize: "2rem",
              text: "bold",
              fontWeight: "500",
              fontStyle: "italic",
            }}
          >
            Epiflix
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
