import { Button, Container, Row, Col, Card } from "react-bootstrap";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";

export function Home() {
  return (
    <>
      <Paper className="MainContentContainer">
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
              <Link href="/signin">
                <Button>Sign In</Button>
              </Link>
            </Col>
            <Col>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Paper>
    </>
  );
}
