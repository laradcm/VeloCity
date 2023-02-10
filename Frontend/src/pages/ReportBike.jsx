import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { fontSize } from "@mui/system";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Card } from "react-bootstrap";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

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

export function ReportBike() {
  return (
    <>
      <Paper className="ccontainer">
        <Typography component="h1" variant="h4" align="center">
          Contact support
        </Typography>
        <Container>
          Something not working well? <br></br>
          Do you want to share feedback to improve our service?<br></br>
          Send us a message and we’ll get in touch with you very soon!
        </Container>
      </Paper>
      <Copyright />
    </>
  );
}
