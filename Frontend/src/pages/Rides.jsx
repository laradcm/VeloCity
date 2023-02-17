import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "../Utilities/AddressForm";
import Review from "/src/Utilities/Review";
import { fetchInitiateRideSession } from "../scripts/fetch";
import { useContext } from "react";
import { SessionContext } from "../context/userGlobalContext";

const steps = ["Departure", "Review your ride"];
// const steps = ["Departure", "Payment details", "Review your order"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export function Rides() {
  const { userGlobal, addToGlobalState } = useContext(SessionContext); // global state context
  const [rideSession, setRideSession] = React.useState("");
  const [activeStep, setActiveStep] = React.useState(0);

  async function handleNext() {
    if (activeStep === steps.length - 1) {
      const conf = await fetchInitiateRideSession({
        user_id: "150",
        origin_station: userGlobal.station,
      });
      setRideSession(conf);
    }
    setActiveStep(activeStep + 1);
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleEnd = () => {
    window.location.href = "/endride";
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        component="main"
        maxWidth="sm"
        sx={{ mb: 4 }}
        className="warning"
      >
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Rides
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <React.Fragment>
                <Typography variant="h4" gutterBottom textAlign={"center"}>
                  It's all set. Enjoy your ride🚲💨!
                </Typography>
                <Typography variant="body1" textAlign={"center"}>
                  Your confirmation number is {rideSession.ticket}.<br></br>
                  The code to unlock a bike is: 3850.<br></br>
                  Departing at{" "}
                  {new Date(rideSession.start_time).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  from {userGlobal.neighborhood}, {userGlobal.station} station.
                </Typography>
                <Box className="warning" sx={{ color: "warning.main" }}>
                  <Typography
                    variant="h5"
                    textAlign={"center"}
                    marginTop={"1.5rem"}
                  >
                    Remember to check in the bike through the app when you
                    return it at your destination.
                  </Typography>
                </Box>
              </React.Fragment>
              <React.Fragment>
                <Box marginBottom={"1rem"} marginTop={"2rem"}>
                  <Typography
                    variant="h3"
                    gutterBottom
                    marginTop={"1.5rem"}
                    display="block"
                    align="center"
                  >
                    Have you arrived to your destination?
                  </Typography>
                  <Box align="center" marginBottom={"1.5rem"}>
                    <Button
                      variant="contained"
                      onClick={handleEnd}
                      sx={{ mt: 0.1, ml: 1 }}
                    >
                      End ride
                    </Button>
                  </Box>
                  <Typography
                    variant="h3"
                    color={"grey"}
                    gutterBottom
                    marginTop={"1rem"}
                    display="block"
                    align="center"
                  >
                    Something went wrong?
                  </Typography>
                  <Box align="center">
                    <Button
                      className="white-font-hovering"
                      variant="contained"
                      href="/reportbike"
                      sx={{ mt: 0.1, ml: 1 }}
                    >
                      Contact support
                    </Button>
                  </Box>
                </Box>
              </React.Fragment>
            </>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "2rem",
                }}
              >
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Start ride" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
