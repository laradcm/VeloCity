import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <Navbar sticky="top" className="navbar navbar-dark bg-dark">
      <Container>
        {/* prettier-ignore */}
        <Nav>
            <Navbar.Brand href="/" id="RaleNav">Vélocity</Navbar.Brand>
        </Nav>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/main" as={NavLink}>
            Dashboard
          </Nav.Link>
          <Nav.Link to="/profile" as={NavLink}>
            Profile
          </Nav.Link>
          <Nav.Link to="/rides" as={NavLink}>
            Book a Ride
          </Nav.Link>
          <Nav.Link to="/endride" as={NavLink}>
            Ride Status
          </Nav.Link>
          <Nav.Link to="/reportbike" as={NavLink}>
            Support
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link to="/signin" as={NavLink}>
            Sign In
          </Nav.Link>
          <Nav.Link to="/signup" as={NavLink}>
            Sign Up
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
