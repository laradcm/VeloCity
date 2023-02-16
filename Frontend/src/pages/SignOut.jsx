import { Button, Container, Row, Col, Card } from "react-bootstrap";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { useCookies } from "react-cookie"; // cookies
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function AlertMessageSuccess() {
  return (
    <>
      <Stack sx={{ width: "100%" }} marginTop="1rem">
        <Alert severity="success">
          There were errors while creating your account, please verify your data
          and try again.
        </Alert>
      </Stack>
    </>
  );
}

export function SignOut() {
  const [displaySuccessAlert, setDisplaySuccessAlert] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]); // cookies

  function deleteCookie() {
    removeCookie("email");
    setDisplaySuccessAlert(true);
    console.log("this was accioned");
  }
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
              <Link href="#" onClick={deleteCookie}>
                <Button>Sign out</Button>
              </Link>
            </Col>
          </Row>
          {displaySuccessAlert ? <AlertMessageSuccess /> : null}
          <Row style={{ paddingTop: "2rem" }}>
            <Link href="/main">
              <Button>No, take me back</Button>
            </Link>
          </Row>
        </Container>
      </Paper>
    </>
  );
}
