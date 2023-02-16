import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie"; // cookies

export function NavBar() {
  const [cookies, setCookie] = useCookies(["user"]); // cookies
  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      className="navbar navbar-dark color-nav"
      expand="lg"
    >
      {/* prettier-ignore */}
      <Container>
        <Nav>
          <Navbar.Brand href="/" id="RaleNav">Vélocity</Navbar.Brand>
        </Nav>
        {/* Hamburger menu */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id="NavCenter">
            {/* <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link to="/main" as={NavLink}>Dashboard</Nav.Link>
            <Nav.Link to="/profile" as={NavLink}>Profile</Nav.Link>
            <Nav.Link to="/rides" as={NavLink}>Book a Ride</Nav.Link>
            <Nav.Link to="/endride" as={NavLink}>Ride Status</Nav.Link>
            <Nav.Link to="/reportbike" as={NavLink}>Support</Nav.Link> */}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/main">Dashboard</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/rides">Book a Ride</Nav.Link>
            <Nav.Link href="/endride">Ride Status</Nav.Link>
            <Nav.Link href="/reportbike">Support</Nav.Link>
          </Nav>
          <Nav id="NavCenter">
            {/* <Nav.Link to="/signup" as={NavLink}>Sign Up</Nav.Link>
            <Nav.Link to="/signin" as={NavLink}>Sign In</Nav.Link> */}
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            {!cookies.email ? (<Nav.Link href="/signin">Sign In</Nav.Link>) : (<Nav.Link href="/signout">Sign Out</Nav.Link>)}
            {/* <Nav.Link href="/signin">Sign In</Nav.Link>
            <Nav.Link href="/signout">Sign Out</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
