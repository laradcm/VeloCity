import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Container } from "react-bootstrap";
import Button from "@mui/material/Button";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export function Main() {
  return (
    <>
      <Paper className="MainContentContainer" sx={{ maxWidth: 600 }}>
        <Container>
          <Box textAlign="center">
            <Typography component="h1" align="center">
              Hi, Username!
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
              variant="contained"
              href="/rides"
              // onClick={}
              sx={{ mt: 0.1, ml: 1, mb: 3 }}
            >
              Book a Ride
            </Button>
          </Box>
          <Box textAlign="center">
            <Typography variant="h2" align="center">
              Profile and ride
            </Typography>
            <Button
              variant="contained"
              href="/profile"
              // onClick={}
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
              variant="contained"
              href="/reportbike"
              // onClick={}
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
