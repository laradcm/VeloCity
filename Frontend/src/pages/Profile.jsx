import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("UserID", "12345"),
  createData("First Name", "Harry"),
  createData("Last Name", "Potter"),
  createData("Email", "kittycat@example.ca"),
  createData("Phone Number", "1234567890"),
  createData("Billing Address", "P. Sherman, 42 Wallaby Way, Sydney"),
  createData("Password", "********"),
];

// const dummyProfile = [
//   { userID: "12345" },
//   { firstName: "Harry" },
//   { lastName: "Potter" },
//   { phone: "1234567890" },
//   { email: "kittycat@example.ca" },
//   { address: "P. Sherman, 42 Wallaby Way, Sydney" },
//   { password: "*******" },
// ];

const dummyProfile = {
  userID: "12345",
  firstName: "Harry",
  lastName: "Potter",
  phone: "1234567890",
  email: "kittycat@example.ca",
  address: "P. Sherman, 42 Wallaby Way, Sydney",
  password: "*******",
};

// let keys = Object.keys(dummyProfile);
// let values = Object.values(dummyProfile);

// const dummyArray = [
//   "12345",
//   "Harry",
//   "Potter",
//   "1234567890",
//   "kittycat@example.ca",
//   "P. Sherman, 42 Wallaby Way, Sydney",
//   "*******",
// ];

export function Profile() {
  return (
    <>
      <TableContainer component={Paper} className="ccontainer">
        <Table sx={{ minWidth: 300 }} aria-label="caption table">
          <caption>
            <Box textAlign="right">
              <Button variant="contained" href="#" sx={{ mt: 0.1, ml: 1 }}>
                Modify
              </Button>
            </Box>
          </caption>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong style={{ textTransform: "uppercase" }}>
                  Personal information
                </strong>
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          {/* <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
          <TableBody>
            <TableRow key={dummyProfile.userID}>
              <TableCell component="th" scope="row">
                User ID
              </TableCell>
              <TableCell align="right">{dummyProfile.userID}</TableCell>
            </TableRow>
            <TableRow key={dummyProfile.firstName}>
              <TableCell component="th" scope="row">
                First name
              </TableCell>
              <TableCell align="right">{dummyProfile.firstName}</TableCell>
            </TableRow>
            <TableRow key={dummyProfile.lastName}>
              <TableCell component="th" scope="row">
                Last name
              </TableCell>
              <TableCell align="right">{dummyProfile.lastName}</TableCell>
            </TableRow>
            <TableRow key={dummyProfile.phone}>
              <TableCell component="th" scope="row">
                Phone number
              </TableCell>
              <TableCell align="right">{dummyProfile.phone}</TableCell>
            </TableRow>
            <TableRow key={dummyProfile.email}>
              <TableCell component="th" scope="row">
                Email
              </TableCell>
              <TableCell align="right">{dummyProfile.email}</TableCell>
            </TableRow>
            <TableRow key={dummyProfile.address}>
              <TableCell component="th" scope="row">
                Billing address
              </TableCell>
              <TableCell align="right">{dummyProfile.address}</TableCell>
            </TableRow>
            <TableRow key={dummyProfile.password}>
              <TableCell component="th" scope="row">
                Password
              </TableCell>
              <TableCell align="right">{dummyProfile.password}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box paddingTop={3}>
        <Copyright />
      </Box>
    </>
  );
}
