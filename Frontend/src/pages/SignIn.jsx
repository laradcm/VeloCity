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
import { fetchReadSingleUser } from "../scripts/fetch";
import Cookies from "js-cookie"; // cookies
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

  // LOG IN *****  this is grabbing data from input that came with MUI *******************
  const { userGlobal, logIn, logOut } = useContext(SessionContext); // global state context
  const [tempProfile, setTempProfile] = useState({});
  const [enteredUserEmail, setEnteredUserEmail] = useState(null); // this only serves to render the dummy page
  const navigateTo = useNavigate(); // this is to redirect to dashboard
  const [thereIsEmailToFetch, setThereIsEmailToFetch] = useState(false); // state to activate fetch
  const handleSubmit = (event) => {
    event.preventDefault();
    // this grabs a whole HTML thing
    const data = new FormData(event.currentTarget); // console.log({email: data.get("email"), password: data.get("password"),});
    const enteredEmail = data.get("email");
    const enteredPassword = data.get("password");
    setEnteredUserEmail(enteredEmail); // carries email entered
    // Here goes the authorization VALIDATION MUST OCURR   maybe a try catch. TRY = succesfull log ing. Catch = please try again
    setThereIsEmailToFetch(true); // to trigger the fetch
    Cookies.set("user", "LogInTrue"); // cookie
    // navigateTo("/main"); // this redirects to dashboard ******* commented out at the moment
  };
  // END of LOG IN ************************

  // Start of fetching user by email
  const fetchProfile = async () => {
    try {
      const response = await fetchReadSingleUser(enteredUserEmail);
      console.log("here goes the fetch");
      // console.log(response);s
      setTempProfile(response);
    } catch (error) {
      console.log("error fetching user");
    }
  };
  useEffect(() => {
    fetchProfile();
  }, [thereIsEmailToFetch]);

  // updating the global state
  logIn(tempProfile);
  console.log("this is the global user state");
  console.log(userGlobal);

  return (
    <ThemeProvider theme={theme}>
      {enteredUserEmail === null ? (
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
          <h1>Welcome</h1>
          <h3>
            This is a dummy page that will disappear when{" "}
            <em>i re-activate the auto redirect function</em>
            .... that once we figure out authorization and storage in cookies.
          </h3>
          <h2>Go to profile page now you should be able to see your info</h2>
        </Box>
      )}
    </ThemeProvider>
  );
}
