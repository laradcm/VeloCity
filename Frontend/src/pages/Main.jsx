import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Container } from "react-bootstrap";
import Button from "@mui/material/Button";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/main">
        Vélocity
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export function Main() {
  return (
    <>
      <Paper className="ccontainer">
        <Container>
          <Box textAlign="center">
            <Typography component="h1" variant="h4" align="center">
              Hi, username!
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
            <Typography variant="h6" align="center" marginTop={1}>
              Where are you going today?
            </Typography>
            <Button
              variant="contained"
              href="/rides"
              // onClick={}
              sx={{ mt: 0.1, ml: 1, mb: 3 }}
            >
              Book a ride
            </Button>
          </Box>
          <Box textAlign="center">
            <Typography variant="h6" align="center">
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
            <Typography variant="h6" align="center">
              Something not working?
            </Typography>
            <Button
              variant="contained"
              href="/reportbike"
              // onClick={}
              sx={{ mt: 0.1, ml: 1, mb: 3 }}
            >
              Contact support
            </Button>
          </Box>
        </Container>
      </Paper>
      <Box paddingTop={3}>
        <Copyright />
      </Box>
    </>
  );
}
