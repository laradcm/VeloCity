import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <br></br>
            <Card>
                <Card.Body>
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
                                    Start profiting from a network of thousands
                                    of bikes around the city.
                                </p>
                                <Link to="/signup">
                                    <Button>Sign Up</Button>
                                </Link>
                            </Col>
                        </Row>
                        <Card.Body></Card.Body>
                    </Container>
                </Card.Body>
            </Card>
        </>
    );
}
