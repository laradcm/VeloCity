import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { useCookies } from "react-cookie"; // cookies
import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom"; // to redirect
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function AlertMessageSuccess() {
  return (
    <>
      <Stack sx={{ width: "100%" }} marginTop="1rem" alignItems={"center"}>
        <Alert severity="success">
          You are succesfully logged out.<br></br> You'll be redirected to our
          home page in a 3 seconds
        </Alert>
      </Stack>
      {/* <Box marginTop="2rem">
        <Row>
          <Col>
            <h6>Do you want to sign in again?</h6>
          </Col>
        </Row>
        <Row style={{ paddingTop: "0.5rem" }}>
          <Col>
            <Button
              className="white-font-hovering"
              variant="contained"
              href="/signin"
            >
              Sign in
            </Button>
          </Col>
        </Row>
      </Box> */}
    </>
  );
}

export function SignOut() {
  const [displaySuccessAlert, setDisplaySuccessAlert] = useState(false); // display alert
  const [cookies, setCookie, removeCookie] = useCookies(["user"]); // cookies
  const [readyToRedirect, setReadyToRedirect] = useState(false); // trigger redirect

  function deleteCookie() {
    removeCookie("email");
    localStorage.removeItem("alreadyLoaded");
    setDisplaySuccessAlert(true);
    localStorage.setItem("alreadyLoaded2", true);
    setReadyToRedirect(true);
  }

  const navigateTo = useNavigate();
  useEffect(() => {
    if (readyToRedirect) {
      setTimeout(() => {
        navigateTo("/");
      }, 3000);
    }
  }, [readyToRedirect]);

  return (
    <>
      <Paper className="MainContentContainer centereddd" sx={{ maxWidth: 600 }}>
        <Container style={{ textAlign: "center" }}>
          <Row>
            <Col>
              <h3>Are you sure you want to sign out?</h3>
            </Col>
          </Row>
          <Row style={{ paddingTop: "0.5rem" }}>
            <Col>
              <Button
                className="white-font-hovering"
                variant="contained"
                href="#"
                onClick={deleteCookie}
              >
                Sign out
              </Button>
            </Col>
          </Row>
          {displaySuccessAlert ? <AlertMessageSuccess /> : null}
        </Container>
      </Paper>
    </>
  );
}
