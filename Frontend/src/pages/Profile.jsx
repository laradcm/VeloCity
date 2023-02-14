import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { fetchReadSingleUser } from "../scripts/fetch";

// to try to fetch *******************
// const url = "http://127.0.0.1:3000/users";
function FetchProfileFromDB() {
  const [loadData, setLoadData] = useState(false);
  const [fullProfile, setFullProfile] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await fetchReadSingleUser("imaddicks47@newsvine.com");
      setFullProfile(response);
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
            <TableRow key={fullProfile.id}>
              <TableCell component="th" scope="row">
                User ID
              </TableCell>
              <TableCell align="right">{fullProfile.id}</TableCell>
            </TableRow>
            <TableRow key={fullProfile.first_name}>
              <TableCell component="th" scope="row">
                First name
              </TableCell>
              <TableCell align="right">{fullProfile.first_name}</TableCell>
            </TableRow>
            <TableRow key={fullProfile.last_name}>
              <TableCell component="th" scope="row">
                Last name
              </TableCell>
              <TableCell align="right">{fullProfile.last_name}</TableCell>
            </TableRow>
            <TableRow key={fullProfile.phone}>
              <TableCell component="th" scope="row">
                Phone number
              </TableCell>
              <TableCell align="right">{fullProfile.phone}</TableCell>
            </TableRow>
            <TableRow key={fullProfile.email}>
              <TableCell component="th" scope="row">
                Email
              </TableCell>
              <TableCell align="right">{fullProfile.email}</TableCell>
            </TableRow>
            <TableRow key={fullProfile.address}>
              <TableCell component="th" scope="row">
                Billing address
              </TableCell>
              <TableCell align="right">{fullProfile.address}</TableCell>
            </TableRow>
            <TableRow key={fullProfile.password}>
              <TableCell component="th" scope="row">
                Password
              </TableCell>
              <TableCell align="right">{fullProfile.password}</TableCell>
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
    </>
  );
}
