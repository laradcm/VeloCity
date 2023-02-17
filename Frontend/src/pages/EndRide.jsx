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
import { fetchReadSingleUser } from "../scripts/fetch";
import { fetchCurrentRide } from "../scripts/fetch";
import { useCookies } from "react-cookie"; // cookies

export function EndRide() {
  const { userGlobal, addToGlobalState } = useContext(SessionContext); // global state context
  const [cookies, setCookie] = useCookies(["user"]); // cookies
  const [rideEnded, setRideEnded] = useState(false);
  // start of End ride button ********
  const [shouldShowButton, setShouldShowButton] = useState(true);
  const [rideInfo, setRideInfo] = useState("");
  const endRideButton = () => {
    setRideEnded(true);
    setShouldShowButton(false);
  };
  // End of End ride button **************
  React.useEffect(() => {
    (async () => {
      const user = await fetchReadSingleUser(cookies.email);
      const currentRideData = await fetchCurrentRide(user.id);
      console.log(currentRideData);
      setRideInfo({
        user_id: user.id,
        neighborhood: currentRideData.station.neighborhood,
        station: currentRideData.station.name,
        start_time: new Date(currentRideData.ride_session.start_time).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        start_date: new Date(currentRideData.ride_session.start_time).toLocaleDateString([], {}),
        ticket: currentRideData.ride_session.ticket,
      });
    })();
  }, []);

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
            <>
              <ListItem sx={{ py: 0, px: 19 }}>
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
                  // primary="Neighborhood"
                />
                {rideInfo.neighborhood}
              </ListItem>
              <ListItem sx={{ py: 0, px: 19 }}>
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
                {rideInfo.station}
              </ListItem>
              <ListItem sx={{ py: 0, px: 19 }}>
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
                {rideInfo.start_date}
              </ListItem>
              <ListItem sx={{ py: 0, px: 19 }}>
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
                {rideInfo.start_time}
              </ListItem>
              <ListItem sx={{ py: 0, px: 19 }}>
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
                {rideInfo.ticket}
              </ListItem>
              <ListItem sx={{ py: 0, px: 19 }}>
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
                      // primary="Neighborhood"
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
