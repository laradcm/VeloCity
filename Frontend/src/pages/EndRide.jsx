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
  const date = new Date;
  const rideInfo = [
    {
      user_id: "150",
      neighbourhood: userGlobal.neighbourhood,
      station: userGlobal.station,
      date: date.toLocaleDateString("fr-CA"),
      time: date.toLocaleTimeString("default", {"timeStyle":"short"}),
    },
  ];
  
  return (
    <>
      <Paper className="MainContentContainer">
        <React.Fragment>
          <Typography variant="h1" gutterBottom align="center">
            Current Ride
          </Typography>
          <Typography variant="h2" gutterBottom align="center">
            Departure
          </Typography>
          <List disablePadding>
            {rideInfo.map((ride) => (
              <>
                <ListItem key={ride.user_id} sx={{ py: 0, px: 19 }}>
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
                        Neighbourhood
                      </Typography>
                    }
                    // primary="Neighbourhood"
                  />
                  {ride.neighbourhood}
                </ListItem>
                <ListItem key={ride.user_id} sx={{ py: 0, px: 19 }}>
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
                    // primary="Neighbourhood"
                  />
                  {ride.station}
                </ListItem>
                <ListItem key={ride.user_id} sx={{ py: 0, px: 19 }}>
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
                    // primary="Neighbourhood"
                  />
                  {ride.date}
                </ListItem>
                <ListItem key={ride.user_id} sx={{ py: 0, px: 19 }}>
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
                    // primary="Neighbourhood"
                  />
                  {ride.time}
                </ListItem>
                <ListItem key={ride.user_id} sx={{ py: 0, px: 19 }}>
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
                    // primary="Neighbourhood"
                  />
                  #2001539
                </ListItem>
                <ListItem key={ride.user_id} sx={{ py: 0, px: 19 }}>
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
                    // primary="Neighbourhood"
                  />
                  3850
                </ListItem>
              </>
            ))}
          </List>
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
                  <ListItem key={1} sx={{ py: 0, px: 19 }}>
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
                      // primary="Neighbourhood"
                    />
                    15:30
                  </ListItem>
                </List>
                <List>
                  <ListItem key={1} sx={{ py: 0, px: 19 }}>
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
                      // primary="Neighbourhood"
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
                <Typography variant="h3" gutterBottom>
                  That's all!<br></br>
                  Thank you for choosing Vélocity!<br></br>
                  🥳
                </Typography>
              </>
            ) : (
              <></>
            )}
            {/* END OF SHOW RETURN/ARRIVAL INFORMATION ***************** */}
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
