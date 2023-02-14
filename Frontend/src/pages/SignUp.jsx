import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const theme = createTheme();

function AlertMessageSucces() {
  return (
    <>
      <Stack sx={{ width: "100%" }} marginTop="1rem">
        <Alert severity="error">
          There's a problem in the form, please verify the data entered.
        </Alert>
      </Stack>
    </>
  );
}

function AlertMessageError() {
  return (
    <>
      <Stack sx={{ width: "100%" }} marginTop="1rem">
        <Alert severity="success">
          Everything's in order, welcome to Vélocity.
        </Alert>
      </Stack>
    </>
  );
}

export function SignUp() {
  // Start of Submitting the form *******************
  const [formHasErrors, setFormHasErrors] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
      lastName: data.get("lastName"),
      firstName: data.get("firstName"),
      phone: data.get("phone"),
      address: data.get("address"),
    });
    // setFormHasErrors(false);
  };
  // End of Submitting the form *************

  // start of handle errors in form ********************
  const [nameValue, setNameValue] = useState("");
  const [error, setError] = useState(false);
  const handleErrorsFirstName = (event) => {
    setNameValue(event.target.value);

    // Validate the text field
    if (event.target.value.length < 3) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const [lastNameValue, setLastNameValue] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const handleErrorsLastName = (event) => {
    setLastNameValue(event.target.value);

    // Validate the text field
    if (event.target.value.length < 3) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
  };

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

  const [phoneValue, setPhoneValue] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const handlePhoneErrors = (event) => {
    setPhoneValue(event.target.value);

    // Validate the text field
    const pattern = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    // supported Format: (123) 456-7890 or 123-456-7890
    const pattern2 =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    // Fomats supported: (123) 456-7890, (123)456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725
    if (!pattern.test(event.target.value)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
  };

  const [addressValue, setAddressValue] = useState("");
  const [addressError, setAddressError] = useState(false);
  const handleErrorsAddress = (event) => {
    setAddressValue(event.target.value);

    // Validate the text field
    if (event.target.value.length < 10) {
      setAddressError(true);
    } else {
      setAddressError(false);
    }
  };

  const [passwordValue, setPasswordValue] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const handlePasswordErrors = (event) => {
    setPasswordValue(event.target.value);

    // Validate the text field
    // Minimum eight characters, at least one letter and one number:
    const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // Minimum eight characters, at least one letter, one number and one special character:
    const pattern2 =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
    const pattern3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    const pattern4 =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // Minimum eight and maximum 15 characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    const pattern5 =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    // At least one upper case English letter, (?=.*?[A-Z])
    // At least one lower case English letter, (?=.*?[a-z])
    // At least one digit, (?=.*?[0-9])
    // At least one special character, (?=.*?[#?!@$%^&*-])
    //Minimum eight in length .{8,} (with the anchors)
    const pattern6 =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!pattern5.test(event.target.value)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const handleConfirmPasswordErrors = (event) => {
    setConfirmPasswordValue(event.target.value);

    if (event.target.value !== passwordValue) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  };
  // end of handle errors in form **************

  return (
    <ThemeProvider theme={theme}>
      {/* <Container component="main" maxWidth="xs"> */}
      <Grid container component="main" sx={{ height: "70%" }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} sx={{}} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
              Sign Up
            </Typography>
            <Box
              component="form"
              // noValidate
              validate="true"
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    error={error}
                    nameValue={nameValue}
                    onChange={handleErrorsFirstName}
                    helperText={
                      error ? "Name must be at least 3 characters long." : ""
                    }
                  />
                  {/* <FormHelperText error>
                    {error ? "Name is required" : ""}
                  </FormHelperText> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    lastNameError={lastNameError}
                    lastNameValue={lastNameValue}
                    onChange={handleErrorsLastName}
                    helperText={
                      lastNameError
                        ? "Name must be at least 3 characters long."
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    emailError={emailError}
                    emailValue={emailValue}
                    onChange={handleErrorsEmail}
                    helperText={
                      emailError
                        ? "Make sure you are entering a valid email address."
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    label="Phone number"
                    name="phone"
                    autoComplete="phone-number"
                    phoneError={phoneError}
                    phoneValue={phoneValue}
                    onChange={handlePhoneErrors}
                    helperText={
                      phoneError
                        ? "Use the following format: (123)456-7890 or 123-456-7890."
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="address"
                    label="Billing Address"
                    name="address"
                    autoComplete="civic-address"
                    addressError={addressError}
                    addressValue={addressValue}
                    onChange={handleErrorsAddress}
                    helperText={
                      addressError
                        ? "Address must be at least 10 characters long and include postal code."
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    passwordError={passwordError}
                    passwordValue={passwordValue}
                    onChange={handlePasswordErrors}
                    helperText={
                      passwordError
                        ? "Password must contain minimum 8 and maximum 15 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character."
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm password"
                    type="password"
                    id="confirm-password"
                    autoComplete="new-password"
                    confirmPasswordError={confirmPasswordError}
                    confirmPasswordValue={confirmPasswordValue}
                    onChange={handleConfirmPasswordErrors}
                    helperText={
                      confirmPasswordError
                        ? "Password must be identical to the previous entered."
                        : ""
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              {formHasErrors ? (
                <>
                  <AlertMessageSucces />
                </>
              ) : (
                <AlertMessageError />
              )}
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* </Container> */}
    </ThemeProvider>
  );
}

// export function SignUp() {
//   return <h1>Sign up page</h1>;
// }
