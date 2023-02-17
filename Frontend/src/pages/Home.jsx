import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";

export function Home() {
  return (
    <>
      <Paper className="MainContentContainer centereddd" sx={{ maxWidth: 600 }}>
        <Container>
          <Row>
            <Col>
              <h3>Already a member?</h3>
              <p>Book a ride now.</p>
            </Col>
            <Col>
              <h3>Don't have an account?</h3>
              <p>
                Start profiting from a network of thousands of bikes around the
                city.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                href="/signin"
                className="white-font-hovering"
                variant="contained"
              >
                Sign In
              </Button>
            </Col>
            <Col>
              <Button
                href="/signup"
                className="white-font-hovering"
                variant="contained"
              >
                Sign Up
              </Button>
            </Col>
          </Row>
        </Container>
      </Paper>
    </>
  );
}
