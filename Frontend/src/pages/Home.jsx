import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Vélocity
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export function Home() {
  return (
    <>
      <br></br>
      <Paper className="ccontainer cccontainer">
        {/* <Card>
          <Card.Body> */}
        <Container>
          <h1>Welcome to Vélocity</h1>
          <Card.Body></Card.Body>
          <Row>
            <Col>
              <h3>Already a member?</h3>
              <p>Book a ride now.</p>
              <Link to="/signin">
                <Button>Sign In</Button>
              </Link>
            </Col>
            <Col>
              <h3>Don't have an account?</h3>
              <p>
                Start profiting from a network of thousands of bikes around the
                city.
              </p>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </Col>
          </Row>
          <Card.Body></Card.Body>
        </Container>
        {/* </Card.Body>
        </Card> */}
      </Paper>
      <Box paddingTop={3}>
        <Copyright />
      </Box>
    </>
  );
}
