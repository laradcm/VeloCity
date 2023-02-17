import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Container } from "react-bootstrap";
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
        <h6>Error occurred while fetching data, please refresh the page</h6>
      </>
    );
  }

  // data was fetched correctly
  return (
    <>
      <Paper className="MainContentContainer ccontainer" sx={{ maxWidth: 600 }}>
        <Container>
          <Box textAlign="center">
            <Typography component="h1" align="center">
              Hi, {fetchedFirstName}!
            </Typography>
            <Player
              autoplay
              loop
              src="https://assets1.lottiefiles.com/datafiles/ugFV3T9Zi676bvx/data.json"
              style={{ height: "150px", width: "150px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
            <Typography variant="h2" align="center">
              Where are you going today?
            </Typography>
            <Button
              className="white-font-hovering"
              variant="contained"
              href="/rides"
              sx={{ mt: 0.1, ml: 1, mb: 3 }}
            >
              Book a Ride
            </Button>
          </Box>
          <Box textAlign="center">
            <Typography variant="h2" align="center">
              Profile
            </Typography>
            <Button
              className="white-font-hovering"
              variant="contained"
              href="/profile"
              sx={{ mt: 0.1, ml: 1, mb: 3 }}
            >
              Go to profile
            </Button>
          </Box>
          <Box textAlign="center">
            <Typography variant="h2" align="center">
              Something not working?
            </Typography>
            <Button
              className="white-font-hovering"
              variant="contained"
              href="/reportbike"
              sx={{ mt: 0.1, ml: 1, mb: 3 }}
            >
              Contact Support
            </Button>
          </Box>
        </Container>
      </Paper>
    </>
  );
}
