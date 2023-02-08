import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        {/* prettier-ignore */}
        <Nav>
          <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
          <Nav.Link to="/login" as={NavLink}>Log in</Nav.Link>
          <Nav.Link to="/signup" as={NavLink}>Sign up</Nav.Link>
          <Nav.Link to="/main" as={NavLink}>Main</Nav.Link>
          <Nav.Link to="/profile" as={NavLink}>Profile</Nav.Link>
          <Nav.Link to="/rides" as={NavLink}>Rides</Nav.Link>
          <Nav.Link to="/endride" as={NavLink}>End Ride</Nav.Link>
          <Nav.Link to="/reportbike" as={NavLink}>Report Bike</Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}
