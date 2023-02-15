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
  //const { userGlobal, addToGlobalState } = useContext(SessionContext); // global state context
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Let's set your ride
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
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
                <Typography variant="h5" gutterBottom>
                  It's all set. Enjoy your ride🚲💨!
                </Typography>
                <Typography variant="subtitle1">
                  Your confirmation number is #2001539.<br></br>
                  The code to unlock a bike is: 3850.<br></br>
                  Departing at 14:30 from Hochelaga, Stadium station.
                </Typography>
                <Typography variant="subtitle2" color={"red"}>
                  {`Remember to check in the bike through the app when you return it at your destination.`}
                </Typography>
              </React.Fragment>
              <React.Fragment>
                <Typography variant="h6" color={"grey"} gutterBottom>
                  Have you arrived to your destination?
                </Typography>
                <Button
                  variant="contained"
                  // onClick={handleNext}
                  href="/endride"
                  sx={{ mt: 0.1, ml: 1 }}
                >
                  End ride
                </Button>
                <Typography variant="h6" color={"grey"} gutterBottom>
                  Something went wrong?
                </Typography>
                <Button
                  variant="contained"
                  href="/reportbike"
                  sx={{ mt: 0.1, ml: 1 }}
                >
                  Contact support
                </Button>
              </React.Fragment>
            </>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
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
