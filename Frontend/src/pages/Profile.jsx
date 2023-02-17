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
import { useCookies } from "react-cookie"; // cookies
import { Typography } from "@mui/material";

// to try to fetch *******************
function FetchProfileFromDB() {
  const [loadData, setLoadData] = useState(false); // in case there's a problem when fetching
  const [fullProfile, setFullProfile] = useState(null); // new state will be used to render the table

  const [cookies, setCookie] = useCookies(["user"]); // cookies

  const fetchProfile = async () => {
    try {
      const response = await fetchReadSingleUser(cookies.email);
      setFullProfile(response);
      setLoadData(true);
    } catch (error) {
      setLoadData(false);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  // console.log(document.cookie);  // to log the cookie it that was implemented in sign-in page

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
      <TableContainer
        sx={{ maxWidth: 600 }}
        component={Paper}
        className="ccontainer"
      >
        <Box>
          <Typography variant="h1" gutterBottom align="center">
            Personal information
          </Typography>
        </Box>
        <Table sx={{ minWidth: 300 }} aria-label="caption table">
          <caption>
            <Box textAlign="right">
              <Button
                variant="contained"
                className="white-font-hovering"
                href="#"
                sx={{ mt: 0.1, ml: 1 }}
              >
                Modify
              </Button>
            </Box>
          </caption>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
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
              <TableCell align="right">**********</TableCell>
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
