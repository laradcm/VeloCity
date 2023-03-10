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
import ProfileForm from "../Utilities/ProfileForm";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Typography from "@mui/material/Typography";

const theme = createTheme();

// to try to fetch *******************
function FetchProfileFromDB() {
    const [loadData, setLoadData] = useState(false); // in case there's a problem when fetching
    const [fullProfile, setFullProfile] = useState(null); // new state will be used to render the table
    const [modify, setModify] = useState(false);

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
        if (!modify) {
            fetchProfile();
        }
    }, [modify]);

    const updateModify = () => {
        modify ? setModify(false) : setModify(true);
    };

    // console.log(document.cookie);  // to log the cookie it that was implemented in sign-in page

    // if there's an error while fetching the data
    if (!loadData) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        );
    }

    // data was fetched correctly
    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid
                    container
                    component="main"
                    sx={{ height: "70%" }}
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                >
                    <CssBaseline />
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{}}>
                        <TableContainer
                            sx={{ maxWidth: 600 }}
                            component={Paper}
                            className="MainContentContainer"
                        >
                            <Box>
                                <Typography
                                    component="h2"
                                    variant="h4"
                                    align="center"
                                >
                                    Personal Information
                                </Typography>
                            </Box>
                            <Table
                                sx={{ minWidth: 300 }}
                                aria-label="caption table"
                            >
                                <caption>
                                    <Box textAlign="right">
                                        <Button
                                            variant="contained"
                                            sx={{ mt: 0.1, ml: 1 }}
                                            onClick={() => {
                                                updateModify();
                                            }}
                                        >
                                            {!modify && "Modify"}
                                            {modify && "Cancel"}
                                        </Button>
                                    </Box>
                                </caption>
                                <TableHead>
                                    <TableRow fullwidth>
                                        <TableCell align="center"></TableCell>
                                        <TableCell align="center"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={fullProfile.id}>
                                        <TableCell component="th" scope="row">
                                            User ID:
                                        </TableCell>
                                        <TableCell align="right">
                                            {fullProfile.id}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key={"firstName"}>
                                        <TableCell component="th" scope="row">
                                            First Name:
                                        </TableCell>
                                        <TableCell align="right">
                                            {fullProfile.first_name}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key={"lastName"}>
                                        <TableCell component="th" scope="row">
                                            Last Name:
                                        </TableCell>
                                        <TableCell align="right">
                                            {fullProfile.last_name}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key={"phone"}>
                                        <TableCell component="th" scope="row">
                                            Phone Number:
                                        </TableCell>
                                        <TableCell align="right">
                                            {fullProfile.phone}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key={"email"}>
                                        <TableCell component="th" scope="row">
                                            Email:
                                        </TableCell>
                                        <TableCell align="right">
                                            {fullProfile.email}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key={"address"}>
                                        <TableCell component="th" scope="row">
                                            Billing Address:
                                        </TableCell>
                                        <TableCell align="right">
                                            {fullProfile.address}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key={"password"}>
                                        <TableCell component="th" scope="row">
                                            Password:
                                        </TableCell>
                                        <TableCell align="right">
                                            **********
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    {modify && (
                        <Grid item xs={12} sm={12} md={6} lg={6} sx={{}}>
                            <Box
                                sx={{ maxWidth: 600 }}
                                component={Paper}
                                className="MainContentContainer"
                            >
                                <ProfileForm
                                    user_id={fullProfile.id}
                                    first_name={fullProfile.first_name}
                                    last_name={fullProfile.last_name}
                                    phone={fullProfile.phone}
                                    email={fullProfile.email}
                                    address={fullProfile.address}
                                    password={fullProfile.password}
                                    updateModify={updateModify}
                                />
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </ThemeProvider>
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
