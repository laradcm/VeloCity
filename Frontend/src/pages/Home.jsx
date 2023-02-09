import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <br></br>
      <Card>
        <Card.Body>
          <Container>
            <Row>
              <Col>
                <h2>Welcome to</h2>
                <h1>Vélocity</h1>
                <h4>Already a member? Sign in</h4>
                <Link to="/signin">
                  <Button>Sign in</Button>
                </Link>
              </Col>
              <Col>
                <h4>
                  Start profiting from a network of thousands of bikes around
                  the city. Sign up below
                </h4>
                <Link to="/signup">
                  <Button>Sign up</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
  
    </>
  );
}
