import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Fisrt Name", "Harry"),
  createData("Last Name", "Potter"),
  createData("Email", "kittycat@example.ca"),
  createData("Phone Number", "123-456-7890"),
  createData("Billing Address", "P. Sherman, 42 Wallaby Way, Sydney"),
  createData("Password", "********"),
];

export function Profile() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>
          <em>Modify</em>
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
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
