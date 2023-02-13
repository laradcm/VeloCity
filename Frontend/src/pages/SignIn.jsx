import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom"; // this is used to redirect to dashboard
import { useContext } from "react"; // global sate
import { SessionContext } from "../context/userGlobalContext"; //global state

function AlertMessage() {
  return (
    <>
      <Stack sx={{ width: "100%" }} marginTop="1rem">
        <Alert severity="success">
          An email was sent to you, plese check your inbox
        </Alert>
      </Stack>
    </>
  );
}

const theme = createTheme();

export function SignIn() {
  // start of   Forgot password   message *************
  const [forgotPassword, setForgotPassword] = useState(false);
  const recuperatePassword = () => {
    setForgotPassword(true);
    setTimeout(() => {
      setForgotPassword(false);
    }, 3000);
  };
  // end of     Forgot password   message *************

  //start of experiment for context****************
  const { userGlobal, logIn, logOut } = useContext(SessionContext);
  // logIn(); // moving this to below
  //end of experiment for context****************

  // LOG IN **********************************
  // this is grabbing data from input that came with MUI
  const [session, setSession] = useState({});
  const navigateTo = useNavigate(); // this is to redirect to dashboard
  const handleSubmit = (event) => {
    event.preventDefault();
    // this grabs a whole HTML thing
    const data = new FormData(event.currentTarget);
    // console.log({email: data.get("email"), password: data.get("password"),});

    // passing the values into an object
    const credentialsObject = {
      fakeName: "NAME_PLACEHOLDER",
      email: data.get("email"),
      password: data.get("password"),
    };
    // aorund this area: after event.preventDefault() and before changing the state VALIDATION MUST OCURR
    //maybe a try catch. TRY = succesfull log ing. Catch = please try again
    setSession(credentialsObject);
    logIn(credentialsObject.email, credentialsObject.password);
    // navigateTo("/main"); // this redirects to dashboard ******* commented out for the moment
  };
  // END of LOG IN ************************

  return (
    <ThemeProvider theme={theme}>
      {Object.keys(session).length === 0 ? (
        <Grid container component="main" sx={{ height: "70%" }}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} sx={{}} />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              ClassName="MainContentContainer"
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#000000" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign In
              </Typography>
              <Box
                component="form"
                // noValidate
                validate="true"
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2" onClick={recuperatePassword}>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      Don't have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
                {forgotPassword ? (
                  <>
                    <AlertMessage />
                  </>
                ) : null}
              </Box>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Box paddingTop={3} textAlign="center">
          <h1>Welcome USER</h1>
          <h3>
            This is a dummy page that will disappear when{" "}
            <em>i re-activate the auto redirect function</em>
            .... that once i figure out something else.
          </h3>
          <h5>
            In the meantime, here's the data the user just entered in the sign
            in form:
          </h5>
          <h6>
            email entered: <strong>{session.email}</strong>
          </h6>
          <h6>
            password entered: <strong>{session.password}</strong>
          </h6>
          <h5>This is what the global state will integrate</h5>
          <h6>email: {userGlobal.email}</h6>
          <h6>password: {userGlobal.password}</h6>
          <h6>Go to PROFILE to see the data displaying</h6>
        </Box>
      )}
    </ThemeProvider>
  );
}
