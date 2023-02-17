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
import { useCookies } from "react-cookie"; // cookies
import { fetchReadSingleUser } from "../scripts/fetch";

//supporting components
function AlertMessageSuccess() {
  return (
    <>
      <Stack sx={{ width: "100%" }} marginTop="1rem">
        <Alert severity="success">
          Welcome to Vélocity! You'll be redirected in 2 seconds
        </Alert>
      </Stack>
    </>
  );
}

function AlertMessageError() {
  return (
    <>
      <Stack sx={{ width: "100%" }} marginTop="1rem">
        <Alert severity="error">
          Credentials don't match, please try again.
        </Alert>
      </Stack>
    </>
  );
}
function AlertMessage() {
  return (
    <>
      <Stack sx={{ width: "100%" }} marginTop="1rem">
        <Alert severity="success">
          An email was sent to you, please check your inbox
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

  //setup Alert Messages state & Submit text input
  const [credentialsMatch, setCredentialsMatch] = useState(false);
  const [thereIsErrorInCredentials, setThereIsErrorInCredentials] =
    useState(false);
  //end of alert messages state

  // Setup for Cookies
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  // end of setup for cookies

  // setup of State that will trigger and control the fetch
  const [fetchedPassword, setFetchedPassword] = useState({});
  const [thereIsEmailToFetch, setThereIsEmailToFetch] = useState(false);
  const [isFetchOver, setIsFetchOver] = useState(false);
  // end of State that will trigger the fetch

  // LOG IN *****  this is grabbing data from input that came with MUI *******************
  const [enteredUserEmail, setEnteredUserEmail] = useState("");
  const [enteredUserPassword, setEnteredUserPassword] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget); // this grabs a whole HTML thing
    const enteredEmail = data.get("email");
    const enteredPassword = data.get("password");
    setEnteredUserEmail(enteredEmail); // state carries the email
    setEnteredUserPassword(enteredPassword); // state carries the password

    // to trigger the fetch
    setThereIsEmailToFetch(true);
    // end of triggering the fetch

    console.log("this is the end of this section");
  };
  // END of LOG IN ************************

  // start of FETCH user by email
  const fetchProfile = async () => {
    try {
      const response = await fetchReadSingleUser(enteredUserEmail);
      setFetchedPassword(response.password);
      setIsFetchOver(true);
    } catch (error) {
      console.log("there was a problem with the fetch");
    }
  };

  useEffect(() => {
    if (thereIsEmailToFetch) {
      fetchProfile();
      setThereIsEmailToFetch(false);
    }
  }, [thereIsEmailToFetch]);
  // end of fetch user by email

  //when the fetch, and everything written before, ends. Here's the validation of both passwords
  useEffect(() => {
    function comparePasswords() {
      console.log("comparison of passwords");
      console.log("this is the password fetched");
      console.log(fetchedPassword);
      console.log("this is the password entered");
      console.log(enteredUserPassword);

      if (fetchedPassword === enteredUserPassword) {
        console.log("Both passwords are the same");
        setCookie("email", enteredUserEmail); // cookie
        setCredentialsMatch(true);
        setThereIsErrorInCredentials(false);
      } else {
        console.log("Passwords don't match");
        setThereIsErrorInCredentials(true);
        setCredentialsMatch(false);
      }
    }
    if (isFetchOver) {
      comparePasswords();
      setIsFetchOver(false);
    }
  }, [isFetchOver]);

  // start of handle errors in form ********************
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState(false);
  const handleErrorsEmail = (event) => {
    setEmailValue(event.target.value);
    // Validate the text field
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!pattern.test(event.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  // end of handle errors in form ***********

  // start of REDIRECTING to dashboard
  const navigateTo = useNavigate();
  useEffect(() => {
    if (credentialsMatch) {
      setTimeout(() => {
        navigateTo("/main");
      }, 2000);
    }
  }, [credentialsMatch]);
  // end of REDIRECTING to dashboard

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "70%" }}>
        <CssBaseline />
        <Grid item xs={false} sm={false} md={2} lg={7} sx={{}} />
        <Grid
          item
          xs={12}
          sm={12}
          md={10}
          lg={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            className="MainContentContainer"
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
                emailError={emailError}
                emailValue={emailValue}
                onChange={handleErrorsEmail}
                helperText={
                  emailError
                    ? "Make sure you are entering a valid email address."
                    : ""
                }
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
              {credentialsMatch ? <AlertMessageSuccess /> : null}
              {thereIsErrorInCredentials ? <AlertMessageError /> : null}
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
    </ThemeProvider>
  );
}
