import { Container, Nav, Navbar } from "react-bootstrap";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography color="#ffffff" align="center" id="Foot">
      <Link color="#ffffff" href="/">
        Vélocity
      </Link>
      &nbsp;{"©"}&nbsp;
      {new Date().getFullYear()}&nbsp;
    </Typography>
  );
}

export function FootBar() {
  return (
    <Navbar className="navbar navbar-dark color-nav">
      {/* this will make the footer stick to the bottom of the page className="fixed-bottom" */}
      <Container>
        <Nav>
          <Copyright />
        </Nav>
        <Nav></Nav>
        <Nav>
          <img src="/wheel-logo-white.png" height="50px"></img>
        </Nav>
      </Container>
    </Navbar>
  );
}
