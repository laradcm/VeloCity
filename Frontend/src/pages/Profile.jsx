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
import { useState, useEffect } from "react";

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

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("UserID", "12345"),
//   createData("First Name", "Harry"),
//   createData("Last Name", "Potter"),
//   createData("Email", "kittycat@example.ca"),
//   createData("Phone Number", "1234567890"),
//   createData("Billing Address", "P. Sherman, 42 Wallaby Way, Sydney"),
//   createData("Password", "********"),
// ];

// const dummyProfile = {
//   id: "12345",
//   firstname: "Harry",
//   lastname: "Potter",
//   phone: "1234567890",
//   email: "kittycat@example.ca",
//   address: "P. Sherman, 42 Wallaby Way, Sydney",
//   password: "*******",
// };

// ****************************************************************
// to try to fetch *******************
const url = "http://127.0.0.1:3000/users";
function FetchProfileFromDB() {
  const [loadData, setLoadData] = useState(false);
  const [coco, setCoco] = useState(null);

  let copy;
  const fetchProfile = async () => {
    try {
      const response = await fetch(url);
      const profileJSON = await response.json();
      const oneProfile = profileJSON[0];
      // to see the data fetched in the console
      // console.log(oneProfile);
      copy = JSON.parse(JSON.stringify(oneProfile));
      setCoco(copy);
      console.log(
        "FETCH IS SUPPOSEDLY HAPPENING HERE, this is first in the code"
      );
      console.log("the real fetch just happened and its below");
      console.log(copy);
      setLoadData(true);
      return copy;
    } catch (error) {
      setLoadData(false);
    }
  };
  useEffect(() => {
    fetchProfile();
    console.log(
      "FETCH IS SUPPOSED TO END HERE ACCORDING TO THE CODE BUT IT HASN'T HAPPENED YET"
    );
  }, []);

  console.log(
    "no timeout, page renders at this moment BEFORE THE FETCH HAPPENS, browser skipped the fetch to render"
  );

  console.log(copy);

  setTimeout(() => {
    console.log("setting a time out of 0.1 s");
    console.log(copy);
  }, 100);

  setTimeout(() => {
    console.log("setting a time out of 0.2 s");
    console.log(copy);
  }, 200);

  setTimeout(() => {
    console.log("setting a time out of 0.3 s");
    console.log(copy);
  }, 300);
  setTimeout(() => {
    console.log("setting a time out of 0.4 s");
    console.log(copy);
  }, 400);
  setTimeout(() => {
    if (loadData) {
      console.log("Harry Potter");
    } else {
      console.log("Hermione Granger");
    }
  }, 1000);

  // if there's an error while fetching the data
  while (!loadData) {
    return (
      <>
        <h1>Error occurred while fetching data</h1>
      </>
    );
  }

  // data was fetched correctly
  return (
    <>
      {/* <h1>data -bikes- fetched correctly</h1> */}
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
          <TableBody>
            <TableRow key={coco.id}>
              <TableCell component="th" scope="row">
                User ID
              </TableCell>
              <TableCell align="right">{coco.id}</TableCell>
            </TableRow>
            <TableRow key={coco.firstname}>
              <TableCell component="th" scope="row">
                First name
              </TableCell>
              <TableCell align="right">{coco.firstname}</TableCell>
            </TableRow>
            <TableRow key={coco.lastname}>
              <TableCell component="th" scope="row">
                Last name
              </TableCell>
              <TableCell align="right">{coco.lastname}</TableCell>
            </TableRow>
            <TableRow key={coco.phone}>
              <TableCell component="th" scope="row">
                Phone number
              </TableCell>
              <TableCell align="right">{coco.phone}</TableCell>
            </TableRow>
            <TableRow key={coco.email}>
              <TableCell component="th" scope="row">
                Email
              </TableCell>
              <TableCell align="right">{coco.email}</TableCell>
            </TableRow>
            <TableRow key={coco.address}>
              <TableCell component="th" scope="row">
                Billing address
              </TableCell>
              <TableCell align="right">{coco.address}</TableCell>
            </TableRow>
            <TableRow key={coco.password}>
              <TableCell component="th" scope="row">
                Password
              </TableCell>
              <TableCell align="right">{coco.password}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
// end of Trying to fetch *********************************
// ****************************************************************

export function Profile() {
  return (
    <>
      {/* <TableContainer component={Paper} className="ccontainer">
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
          </TableHead> */}
      {/* **************  this BELOW was already commented out please don-t touch **************** */}
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
      {/* ****************** This ABOVE was already commente out please don-t touch ********************* */}
      {/* <TableBody>
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
      </TableContainer> */}
      <FetchProfileFromDB />
      <Box paddingTop={3}>
        <Copyright />
      </Box>
    </>
  );
}
