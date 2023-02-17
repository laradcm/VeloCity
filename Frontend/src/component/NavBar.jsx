import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie"; // cookies
import { useEffect, useState } from "react";

export function NavBar() {
  // when loading the page, this will check if there's a cookie under the name of EMAIL, if
  // there is and its value is no "", then it changes the state that renders the sign in/out tab
  const [cookies, setCookie] = useCookies(["user"]); // cookies
  const [thereIsCookie, setThereIsCookie] = useState(false);

  useEffect(() => {
    function checkIfThereIsCookie() {
      if (cookies.email !== undefined) {
        setThereIsCookie(true);
      } else {
        setThereIsCookie(false);
      }
    }
    checkIfThereIsCookie();
  }, []);
  // end of checking if there's a cookie under the name EMAIL

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
            {thereIsCookie ? null: (<Nav.Link href="/">Home</Nav.Link>)}
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            {thereIsCookie ? (<Nav.Link href="/main">Dashboard</Nav.Link>) : null}
            {/* <Nav.Link href="/main">Dashboard</Nav.Link> */}
            {thereIsCookie ? (<Nav.Link href="/profile">Profile</Nav.Link>) : null}
            {/* <Nav.Link href="/profile">Profile</Nav.Link> */}
            {thereIsCookie ? (<Nav.Link href="/rides">Book a Ride</Nav.Link>) : null}
            {/* <Nav.Link href="/rides">Book a Ride</Nav.Link> */}
            {thereIsCookie ? (<Nav.Link href="/endride">Ride Status</Nav.Link>) : null}
            {/* <Nav.Link href="/endride">Ride Status</Nav.Link> */}
            <Nav.Link href="/reportbike">Support</Nav.Link>
          </Nav>
          <Nav id="NavCenter">
            {thereIsCookie ? null : (<Nav.Link href="/signup">Sign Up</Nav.Link>)}
            {/* <Nav.Link href="/signup">Sign Up</Nav.Link> */}
            {thereIsCookie ? (<Nav.Link href="/signout">Sign Out</Nav.Link>) : (<Nav.Link href="/signin">Sign In</Nav.Link>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
