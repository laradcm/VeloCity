import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import { Player, Controls } from "@lottiefiles/react-lottie-player"; // sund and cloud pictures
import { useCookies } from "react-cookie"; // cookies
import { fetchReadSingleUser } from "../scripts/fetch"; // fetch
import { useState, useEffect } from "react";

export function Main() {
    // to retrieve the cookie
    const [cookies, setCookie] = useCookies(["user"]);

    //experiment to refresh the page and finally set the cookie using localstorage (it needs a refresh)
    // this refreshes dashboard. This const is removed when pressing the signout button
    useEffect(() => {
        const alreadyLoaded = localStorage.getItem("alreadyLoaded");
        if (!alreadyLoaded) {
            localStorage.setItem("alreadyLoaded", true);
            window.location.reload();
        }
    }, []);
    // end of experiment**********

    // in case there's a problem when fetching
    const [loadData, setLoadData] = useState(false);

    // to store the fetch name
    const [fetchedFirstName, setFetchedFirstName] = useState("");

    // fetch user profile for the name
    const fetchProfile = async () => {
        try {
            const response = await fetchReadSingleUser(cookies.email);
            setFetchedFirstName(response.first_name);
            setLoadData(true);
        } catch (error) {
            setLoadData(false);
        }
    };
    useEffect(() => {
        fetchProfile();
    }, []);

    // if there's an error while fetching the data
    if (!loadData) {
        return (
            <>
                <h6>
                    Error occurred while fetching data, please refresh the page
                </h6>
            </>
        );
    }

    // data was fetched correctly
    return (
        <>
            <Paper
                className="MainContentContainer MainCenter"
                sx={{ maxWidth: 600 }}
            >
                <Container>
                    <Box textAlign="center">
                        <Typography component="h3" align="center">
                            <Row>
                                <Col>
                                    <h3>Hi, {fetchedFirstName}!</h3>
                                </Col>
                                <Col>
                                    <h3>Profile</h3>
                                </Col>
                            </Row>
                        </Typography>
                        <Row>
                            <Col>
                                <Player
                                    autoplay
                                    loop
                                    src="https://assets1.lottiefiles.com/datafiles/ugFV3T9Zi676bvx/data.json"
                                    style={{ height: "150px", width: "150px" }}
                                >
                                    <Controls
                                        visible={false}
                                        buttons={[
                                            "play",
                                            "repeat",
                                            "frame",
                                            "debug",
                                        ]}
                                    />
                                </Player>
                            </Col>
                            <Col>
                                <Button
                                    className="white-font-hovering"
                                    variant="contained"
                                    href="/profile"
                                    sx={{ mt: 5, ml: 0.1, mb: 0.1 }}
                                >
                                    Go to profile
                                </Button>
                            </Col>
                        </Row>
                    </Box>
                    <Box textAlign="center">
                        <Typography variant="h3" align="center">
                            <Row>
                                <Col>
                                    <h3>Where are you going today?</h3>
                                </Col>
                                <Col>
                                    <h3> Something not working?</h3>
                                </Col>
                            </Row>
                        </Typography>
                    </Box>
                    <Box textAlign="center">
                        <Typography variant="h3" align="center">
                            <Row>
                                <Col>
                                    <Button
                                        className="white-font-hovering"
                                        variant="contained"
                                        href="/rides"
                                        sx={{ mt: 5, ml: 0, mb: 2.5 }}
                                    >
                                        Book a Ride
                                    </Button>
                                </Col>
                                <Col>
                                    <Button
                                        className="white-font-hovering"
                                        variant="contained"
                                        href="/reportbike"
                                        sx={{ mt: 5, ml: 0, mb: 2.5 }}
                                    >
                                        Contact Support
                                    </Button>
                                </Col>
                            </Row>
                        </Typography>
                    </Box>
                </Container>
            </Paper>
        </>
    );
}
