import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <Navbar sticky="top" className="navbar navbar-dark bg-dark">
      <Container>
        {/* prettier-ignore */}
        <Nav>
          <Navbar.Brand href="/" id="Rale">Vélocity</Navbar.Brand>
          <Nav.Link to="/main" as={NavLink}>Dashboard</Nav.Link>
          <Nav.Link to="/profile" as={NavLink}>Profile</Nav.Link>
          <Nav.Link to="/rides" as={NavLink}>Rides</Nav.Link>
          <Nav.Link to="/endride" as={NavLink}>End Ride</Nav.Link>
          <Nav.Link to="/reportbike" as={NavLink}>Report Bike</Nav.Link>
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
