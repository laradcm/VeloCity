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
import { fetchRead } from "../scripts/fetch";

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

// to try to fetch *******************
const url = "http://127.0.0.1:3000/users";
function FetchProfileFromDB() {
  const [loadData, setLoadData] = useState(false);
  const [coco, setCoco] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await fetchRead("/users");
      console.log(response);
      const oneProfile = response[0];
      setCoco(oneProfile);
      setLoadData(true);
    } catch (error) {
      setLoadData(false);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  // if there's an error while fetching the data
  if (!loadData) {
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
            <TableRow key={coco.first_name}>
              <TableCell component="th" scope="row">
                First name
              </TableCell>
              <TableCell align="right">{coco.first_name}</TableCell>
            </TableRow>
            <TableRow key={coco.last_name}>
              <TableCell component="th" scope="row">
                Last name
              </TableCell>
              <TableCell align="right">{coco.last_name}</TableCell>
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

export function Profile() {
  return (
    <>
      <FetchProfileFromDB />
      <Box paddingTop={3}>
        <Copyright />
      </Box>
    </>
  );
}
