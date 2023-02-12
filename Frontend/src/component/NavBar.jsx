import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function NavBar() {
    return (
        <Navbar
            sticky="top"
            className="navbar navbar-dark color-nav"
            expand="lg"
        >
            <Container>
                <Nav>
                    <Navbar.Brand href="/" id="RaleNav">
                        Vélocity
                    </Navbar.Brand>
                </Nav>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" id="NavCenter">
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
                    <Nav id="NavCenter">
                        <Nav.Link to="/signin" as={NavLink}>
                            Sign In
                        </Nav.Link>
                        <Nav.Link to="/signup" as={NavLink}>
                            Sign Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
