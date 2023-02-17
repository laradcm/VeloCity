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
import { fetchCreate } from "../scripts/fetch";
import { useNavigate } from "react-router-dom"; // this is used to redirect to dashboard
import { useCookies } from "react-cookie"; // cookies
import { fetchReadSingleUser } from "../scripts/fetch";


const theme = createTheme();

export default function ProfileForm() {

  //scroll when mounted
  React.useEffect(() => {
    console.log('got here')
    scrollTo(550,0);
  },[])
  //end of scroll

  // Fetch the user data first ******************
  const [loadData, setLoadData] = useState(false); // in case there's a problem when fetching
  const [fullProfile, setFullProfile] = useState(null); // new state will be used to render the table


  const [cookies, setCookie] = useCookies(["user"]); // cookies

  const fetchProfile = async () => {
    try {
      const response = await fetchReadSingleUser(cookies.email);
      setFullProfile(response);
      setLoadData(true);
    } catch (error) {
      console.log(error.message)
      setLoadData(false);
    }
  };
  React.useEffect(() => {
    fetchProfile();
  }, []);
  // End of Fetch user data *******************************

  // Start of Submitting the form *******************
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formHasErrors, setFormHasErrors] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const inputData = {
      email: data.get("email"),
      password: data.get("password"),
      last_name: data.get("lastName"),
      first_name: data.get("firstName"),
      phone: data.get("phone"),
      address: data.get("address"),
      role: "user",
    };

    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      phoneError ||
      addressError ||
      passwordError ||
      confirmPasswordError
    ) {
      setFormHasErrors(true);
      setIsSubmitted(false);
    } else {
      const result = await fetchCreate("/users", inputData);
      console.log(result.message);

      if (result.message.indexOf("Error") === -1) {
        setIsSubmitted(true);
        setFormHasErrors(false);
      } else {
        setIsSubmitted(false);
        setFormHasErrors(true);
      }
    }
  };
  // End of Submitting the form *************

  // Start of Redirect to Sign In **********************
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        navigate("/SignIn");
      }, 2000);
    }
  }, [isSubmitted]);
  // End of Redirect to Sign In ************************

  // start of handle errors in form ********************
  const [firstNameValue, setFirstNameValue] = useState("abc");
  const [firstNameError, setFirstNameError] = useState(false);
  const handleErrorsFirstName = (event) => {
    setFirstNameValue(event.target.value);

    // Validate the text field
    if (event.target.value.length < 3) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
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

    // Validate the text field for email
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

    // Validate the text field for phone

    const pattern =
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

    // Validate the text field for password

    // Minimum eight and maximum 15 characters,
    // at least one uppercase letter
    // one lowercase letter
    // one number
    // one special character:

    const pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

    if (!pattern.test(event.target.value)) {
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

    // if there's an error while fetching the data
    if (!loadData) {
      return (
        <>
          <h1>Error occurred while fetching data</h1>
        </>
      );
    }

  return (
    <ThemeProvider theme={theme}>
      {/* <Container component="main" maxWidth="xs"> */}
      <Grid container component="main" sx={{ height: "70%" }}>
        {/* MAIN CONTAINER is divided into 2 columns(grids) we're only using the right side thus the first GRID is empty and set to false. 
        Breakpoints:  xs, extra-small: 0px,   sm, small: 600px;  md, medium: 900px;   lg, large: 1200px;   xl, extra-large: 1536px
        Both pairs should add 12 to maintain the same width*/}
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
              marginTop: "-1rem",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: "#000000" }}>
              <LockOutlinedIcon />
            </Avatar> */}

            <Typography component="h3" variant="h5">
              Info to Update
            </Typography>

            {/* FORM */}
            <Box
              component="form"
              validate="true"
              onSubmit={(e) => handleSubmit(e)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={3}>
                {" "}
                {/* FORM INPUTS */}
                <Grid item xs={12} sm={6}>
                  {/* FIRST NAME */}
                  <TextField
                    fullWidth
                    autoComplete="given-name"
                    name="firstName"
                    id="firstName"
                    label="First Name"
                    autoFocus
                    error={firstNameError}
                    value={firstNameValue}
                    onChange={handleErrorsFirstName}
                    helperText={
                      firstNameError
                        ? "Name must be at least 3 characters long."
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* LAST NAME */}
                  <TextField
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    error={lastNameError}
                    value={lastNameValue}
                    onChange={handleErrorsLastName}
                    helperText={
                      lastNameError
                        ? "Name must be at least 3 characters long."
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* EMAIL */}
                  <TextField
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={emailError}
                    value={emailValue}
                    onChange={handleErrorsEmail}
                    helperText={
                      emailError
                        ? "Make sure you are entering a valid email address."
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* PHONE */}
                  <TextField
                    fullWidth
                    id="phone"
                    label="Phone number"
                    name="phone"
                    autoComplete="phone-number"
                    error={phoneError}
                    value={phoneValue}
                    onChange={handlePhoneErrors}
                    helperText={
                      phoneError
                        ? "Use on of the following formats: (123) 456-7890, (123)456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725."
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* ADDRESS */}
                  <TextField
                    fullWidth
                    id="address"
                    label="Billing Address"
                    name="address"
                    autoComplete="civic-address"
                    error={addressError}
                    value={addressValue}
                    onChange={handleErrorsAddress}
                    helperText={
                      addressError
                        ? "Address must be at least 10 characters long and include postal code."
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  {" "}
                  {/* PASSWORD */}
                  <TextField
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    error={passwordError}
                    value={passwordValue}
                    onChange={handlePasswordErrors}
                    helperText={
                      passwordError
                        ? "Password must contain minimum 8 and maximum 15 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character."
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  {" "}
                  {/* PASSWORD CONFIRM */}
                  <TextField
                    fullWidth
                    name="confirmPassword"
                    label="Confirm password"
                    type="password"
                    id="confirm-password"
                    autoComplete="new-password"
                    error={confirmPasswordError}
                    value={confirmPasswordValue}
                    onChange={handleConfirmPasswordErrors}
                    helperText={
                      confirmPasswordError
                        ? "Password must be identical to the previous entered."
                        : ""
                    }
                  />
                </Grid>
              </Grid>

              {/* SUBMIT BUTTON */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save Changes
              </Button>

              {formHasErrors ? (
                <>{<AlertMessageError />}</>
              ) : (
                <>{isSubmitted && <AlertMessageSuccess />}</>
              )}
              <Grid container justifyContent="flex-end">
                <Grid item>
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

//supporting components
function AlertMessageSuccess() {
  return (
    <>
      <Stack sx={{ width: "100%" }} marginTop="1rem">
        <Alert severity="success">
          Account updated successfully.
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
          There were errors while updating your account, please verify your data
          and try again.
        </Alert>
      </Stack>
    </>
  );
}
