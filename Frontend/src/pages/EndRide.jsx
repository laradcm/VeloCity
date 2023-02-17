import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { SessionContext } from "../context/userGlobalContext";
import Stack from "@mui/material/Stack";

export function EndRide() {
  const { userGlobal, addToGlobalState } = useContext(SessionContext); // global state context
  // start of End ride button ********
  const [rideEnded, setRideEnded] = useState(false);
  const [shouldShowButton, setShouldShowButton] = useState(true);
  const endRideButton = () => {
    setRideEnded(true);
    setShouldShowButton(false);
  };
  // End of End ride button **************
  const date = new Date();
  const rideInfo = [
    {
      user_id: "150",
      neighborhood: userGlobal.neighborhood,
      station: userGlobal.station,
      date: date.toLocaleDateString("fr-CA"),
      time: date.toLocaleTimeString("default", { timeStyle: "short" }),
    },
  ];

  return (
    <>
      <Paper className="MainContentContainer centereddd" sx={{ maxWidth: 600 }}>
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
            Departure
          </Typography>
          <Box
            sx={{
              maxWidth: 310,
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <List disablePadding>
              {rideInfo.map((ride) => (
                <>
                  <ListItem key={ride.user_id} sx={{ py: 0, px: 0 }}>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          variant="body1"
                          style={{
                            color: "#46505A",
                            fontWeight: 600,
                          }}
                        >
                          Neighborhood
                        </Typography>
                      }
                    />
                    Hochelaga-Maisonneuve
                    {/* {ride.neighborhood} */}
                  </ListItem>
                  <ListItem key={ride.user_id} sx={{ py: 0, px: 0 }}>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          variant="body1"
                          style={{
                            color: "#46505A",
                            fontWeight: 600,
                          }}
                        >
                          Station
                        </Typography>
                      }
                      // primary="Neighborhood"
                    />
                    Weeping Birch
                    {/* {ride.station} */}
                  </ListItem>
                  <ListItem key={ride.user_id} sx={{ py: 0, px: 0 }}>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          variant="body1"
                          style={{
                            color: "#46505A",
                            fontWeight: 600,
                          }}
                        >
                          Date
                        </Typography>
                      }
                      // primary="Neighborhood"
                    />

                    {ride.date}
                  </ListItem>
                  <ListItem key={ride.user_id} sx={{ py: 0, px: 0 }}>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          variant="body1"
                          style={{
                            color: "#46505A",
                            fontWeight: 600,
                          }}
                        >
                          Time
                        </Typography>
                      }
                      // primary="Neighborhood"
                    />
                    {ride.time}
                  </ListItem>
                  <ListItem key={ride.user_id} sx={{ py: 0, px: 0 }}>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          variant="body1"
                          style={{
                            color: "#46505A",
                            fontWeight: 600,
                          }}
                        >
                          Confirmation code
                        </Typography>
                      }
                      // primary="Neighborhood"
                    />
                    #2001539
                  </ListItem>
                  <ListItem key={ride.user_id} sx={{ py: 0, px: 0 }}>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography
                          variant="body1"
                          style={{
                            color: "#46505A",
                            fontWeight: 600,
                          }}
                        >
                          Unlock code
                        </Typography>
                      }
                      // primary="Neighborhood"
                    />
                    3850
                  </ListItem>
                </>
              ))}
            </List>
          </Box>
        </React.Fragment>
        <React.Fragment>
          <Box
            textAlign="center"
            paddingTop={"2rem"}
            className={shouldShowButton ? "" : "hidden"}
          >
            <Typography variant="h2" color={"grey"} gutterBottom>
              Have you arrived to your destination?
            </Typography>
            <Button
              variant="contained"
              onClick={endRideButton}
              // href="/endride"
              sx={{ mt: 0.1, ml: 1 }}
            >
              Confirm end of ride
            </Button>
          </Box>
          {/* SHOW RETURN/ARRIVAL INFORMATION****************************** */}
          <Box
            sx={{
              maxWidth: 310,
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
                    Arrival
                  </Typography>
                  <List disablePadding>
                    <ListItem key={1} sx={{ py: 0, px: 0 }}>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography
                            variant="body1"
                            style={{
                              color: "#46505A",
                              fontWeight: 600,
                            }}
                          >
                            Arrival time
                          </Typography>
                        }
                        // primary="Neighborhood"
                      />
                      15:30
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
                              color: "#46505A",
                              fontWeight: 600,
                            }}
                          >
                            Total time of ride
                          </Typography>
                        }
                        // primary="Neighborhood"
                      />
                      0 h 30 min
                    </ListItem>
                  </List>
                  <Typography
                    variant="body1"
                    color={"grey"}
                    gutterBottom
                    marginTop={"1rem"}
                  >
                    Your confirmation number was succesfully updated.
                    <br></br>Keep it for future references.
                  </Typography>
                  <Box marginTop={"1rem"}>
                    <Typography variant="h3" gutterBottom>
                      That's all!<br></br>
                      Thank you for choosing Vélocity!<br></br>
                      🥳
                    </Typography>
                  </Box>
                </>
              ) : (
                <></>
              )}
              {/* END OF SHOW RETURN/ARRIVAL INFORMATION ***************** */}
            </Box>
          </Box>
          <Box textAlign="center" paddingTop={"1rem"} paddingBottom={"2rem"}>
            <Typography
              variant="h2"
              gutterBottom
              style={{ textalign: "center" }}
            >
              Something went wrong?
            </Typography>
            <Button
              className="white-font-hovering"
              variant="contained"
              href="/reportbike"
              sx={{ mt: 0.1, ml: 1 }}
            >
              Contact Support
            </Button>
          </Box>
        </React.Fragment>
      </Paper>
    </>
  );
}
