import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useContext } from "react";
import { SessionContext } from "../context/userGlobalContext";
import { fetchReadSingleUser } from "../scripts/fetch";
import { fetchCurrentRide } from "../scripts/fetch";
import { fetchEndRide } from "../scripts/fetch";
import { useCookies } from "react-cookie"; // cookies
import { Container, Row, Col } from "react-bootstrap";

export function EndRide() {
    const { userGlobal, addToGlobalState } = useContext(SessionContext); // global state context
    const [cookies, setCookie] = useCookies(["user"]); // cookies
    const [rideEnded, setRideEnded] = useState(false);
    // start of End ride button ********
    const [shouldShowButton, setShouldShowButton] = useState(true);
    const [rideInfo, setRideInfo] = useState("");
    const [completeRideInfo, setCompleteRideInfo] = useState("");
    const endRideButton = async () => {
        setCompleteRideInfo((await fetchEndRide(rideInfo.ride_id)).updated_row);
        setRideEnded(true);
        setShouldShowButton(false);
    };

    // End of End ride button **************
    React.useEffect(() => {
        (async () => {
            const user = await fetchReadSingleUser(cookies.email);
            const currentRideData = await fetchCurrentRide(user.id);
            setRideInfo({
                user_id: user.id,
                ride_id: currentRideData.ride_session.id,
                neighborhood: currentRideData.station.neighborhood,
                station: currentRideData.station.name,
                timestamp: new Date(currentRideData.ride_session.start_time),
                start_time: new Date(
                    currentRideData.ride_session.start_time
                ).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
                start_date: new Date(
                    currentRideData.ride_session.start_time
                ).toLocaleDateString([], {}),
                ticket: currentRideData.ride_session.ticket,
            });
        })();
    }, []);

    return (
        <>
            <Paper
                className="MainContentContainer MainCenter"
                sx={{ maxWidth: 600 }}
            >
                <React.Fragment>
                    <Typography variant="h1" gutterBottom align="center">
                        Current Ride
                    </Typography>
                    <Typography
                        variant="body1"
                        color={"blue"}
                        gutterBottom
                        align="center"
                        marginTop={"1rem"}
                    >
                        <h4>
                            <u>Departure</u>
                        </h4>
                    </Typography>
                    <Box
                        sx={{
                            maxWidth: 420,
                            marginRight: "auto",
                            marginLeft: "auto",
                        }}
                    >
                        <List disablePadding>
                            <>
                                <ListItem sx={{ py: 0, px: 0 }}>
                                    <ListItemText
                                        disableTypography
                                        primary={
                                            <Typography
                                                variant="body1"
                                                style={{
                                                    color: "#000000",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                Neighborhood:
                                            </Typography>
                                        }
                                    />
                                    {rideInfo.neighborhood}
                                </ListItem>
                                <ListItem sx={{ py: 0, px: 0 }}>
                                    <ListItemText
                                        disableTypography
                                        primary={
                                            <Typography
                                                variant="body1"
                                                style={{
                                                    color: "#000000",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                Station:
                                            </Typography>
                                        }
                                    />
                                    {rideInfo.station}
                                </ListItem>
                                <ListItem sx={{ py: 0, px: 0 }}>
                                    <ListItemText
                                        disableTypography
                                        primary={
                                            <Typography
                                                variant="body1"
                                                style={{
                                                    color: "#000000",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                Date:
                                            </Typography>
                                        }
                                    />
                                    {rideInfo.start_date}
                                </ListItem>
                                <ListItem sx={{ py: 0, px: 0 }}>
                                    <ListItemText
                                        disableTypography
                                        primary={
                                            <Typography
                                                variant="body1"
                                                style={{
                                                    color: "#000000",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                Time:
                                            </Typography>
                                        }
                                    />
                                    {rideInfo.start_time}
                                </ListItem>
                                <ListItem sx={{ py: 0, px: 0 }}>
                                    <ListItemText
                                        disableTypography
                                        primary={
                                            <Typography
                                                variant="body1"
                                                style={{
                                                    color: "#000000",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                Confirmation Code:
                                            </Typography>
                                        }
                                    />
                                    {rideInfo.ticket}
                                </ListItem>
                                <ListItem sx={{ py: 0, px: 0 }}>
                                    <ListItemText
                                        disableTypography
                                        primary={
                                            <Typography
                                                variant="body1"
                                                style={{
                                                    color: "#000000",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                Unlock Code:
                                            </Typography>
                                        }
                                    />
                                    3850
                                </ListItem>
                            </>
                        </List>
                    </Box>
                </React.Fragment>
                <React.Fragment>
                    <Box
                        textAlign="center"
                        paddingTop={"2rem"}
                        className={shouldShowButton ? "" : "hidden"}
                        sx={{
                            maxWidth: 470,
                            marginRight: "auto",
                            marginLeft: "auto",
                        }}
                    >
                        <Row>
                            <Col>
                                <h5>Have you arrived to your destination?</h5>
                            </Col>
                            <Col>
                                <Button
                                    variant="contained"
                                    onClick={endRideButton}
                                    sx={{ mt: 1, ml: 2 }}
                                >
                                    Confirm end of ride
                                </Button>
                            </Col>
                        </Row>

                        <Typography
                            variant="h3"
                            color={"grey"}
                            gutterBottom
                        ></Typography>
                    </Box>
                    {/* SHOW RETURN/ARRIVAL INFORMATION****************************** */}
                    <Box
                        sx={{
                            maxWidth: 420,
                            marginRight: "auto",
                            marginLeft: "auto",
                        }}
                    >
                        <Box textAlign="center" paddingTop={"0.1rem"}>
                            {rideEnded ? (
                                <>
                                    <Typography
                                        variant="body1"
                                        gutterBottom
                                        align="center"
                                        paddingTop={"0.8rem"}
                                    >
                                        <h4>
                                            <u>Arrival</u>
                                        </h4>
                                    </Typography>
                                    <List disablePadding>
                                        <ListItem key={1} sx={{ py: 0, px: 0 }}>
                                            <ListItemText
                                                disableTypography
                                                primary={
                                                    <Typography
                                                        variant="body1"
                                                        style={{
                                                            color: "#000000",
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        Arrival Time:
                                                    </Typography>
                                                }
                                            />
                                            {completeRideInfo
                                                ? new Date(
                                                      completeRideInfo.arrival_time
                                                  ).toLocaleTimeString([], {
                                                      hour: "2-digit",
                                                      minute: "2-digit",
                                                  })
                                                : null}
                                        </ListItem>
                                    </List>
                                    <List>
                                        <ListItem key={1} sx={{ py: 0, px: 0 }}>
                                            <ListItemText
                                                disableTypography
                                                primary={
                                                    <Typography
                                                        variant="body1"
                                                        style={{
                                                            color: "#000000",
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        Total Time of Ride:
                                                    </Typography>
                                                }
                                            />
                                            {completeRideInfo
                                                ? Math.floor(
                                                      (new Date(
                                                          completeRideInfo.arrival_time
                                                      ).getTime() -
                                                          rideInfo.timestamp.getTime()) /
                                                          3600000
                                                  ) +
                                                  " h " +
                                                  (
                                                      0 +
                                                      Math.floor(
                                                          ((new Date(
                                                              completeRideInfo.arrival_time
                                                          ).getTime() -
                                                              rideInfo.timestamp.getTime()) %
                                                              3600000) /
                                                              60000
                                                      ).toString()
                                                  ).slice(-2) +
                                                  " min"
                                                : null}
                                        </ListItem>
                                    </List>
                                    <Typography
                                        variant="body1"
                                        color={"grey"}
                                        gutterBottom
                                        marginTop={"1rem"}
                                        align="justify"
                                    >
                                        Your confirmation number has been
                                        updated. Keep it for future reference.
                                        Thank you for choosing Vélocity!
                                    </Typography>
                                </>
                            ) : (
                                <></>
                            )}
                            {/* END OF SHOW RETURN/ARRIVAL INFORMATION ***************** */}
                        </Box>
                    </Box>
                    <Box
                        textAlign="center"
                        paddingTop={"1.5rem"}
                        paddingBottom={"0.5rem"}
                        sx={{
                            maxWidth: 470,
                            marginRight: "auto",
                            marginLeft: "auto",
                        }}
                    >
                        <Row>
                            <Col>
                                <h5>Did something go wrong?</h5>
                            </Col>
                            <Col>
                                <Button
                                    className="white-font-hovering"
                                    variant="contained"
                                    href="/reportbike"
                                    sx={{ mt: 1, ml: 2 }}
                                >
                                    Contact Support
                                </Button>
                            </Col>
                        </Row>
                    </Box>
                </React.Fragment>
            </Paper>
        </>
    );
}
