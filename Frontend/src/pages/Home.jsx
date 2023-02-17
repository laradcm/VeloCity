import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";

export function Home() {
    //experiment to refresh the page and finally set the cookie using localstorage (it needs a refresh)
    // refreshes HOME page. This const is created when pressing logout button
    useEffect(() => {
        const alreadyLoaded2 = localStorage.getItem("alreadyLoaded2");
        if (alreadyLoaded2) {
            localStorage.removeItem("alreadyLoaded2");
            window.location.reload();
        }
    }, []);
    // end of experiment**********

    return (
        <>
            <Paper
                className="MainContentContainer MainCenter"
                sx={{ maxWidth: 800 }}
            >
                <Container>
                    <Row>
                        <Col>
                            <h3>Don't have an account?</h3>
                        </Col>
                        <Col>
                            <h3>Already a member?</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                Start profiting from a network of thousands of
                                bikes around the city.
                            </p>
                        </Col>
                        <Col>
                            <p>Book a ride now.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                href="/signup"
                                className="white-font-hovering"
                                variant="contained"
                                sx={{ mt: 2, ml: 0 }}
                            >
                                Sign Up
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                href="/signin"
                                className="white-font-hovering"
                                variant="contained"
                                sx={{ mt: 2, ml: 0 }}
                            >
                                Sign In
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Paper>
        </>
    );
}
