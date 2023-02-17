import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { fontSize } from "@mui/system";
import { useContext } from "react";
import { SessionContext } from "../context/userGlobalContext";
import { Box } from "@mui/material";

// const products = [
//   {
//     name: "Departing neighborhood",
//     desc: "Hochelaga",
//   },
//   {
//     name: "Departing Station",
//     desc: "Stadium",
//   },
//   {
//     name: "Departure date and time",
//     desc: "2023/02/31" + " " + "14:05",
//   },
// ];

export default function Review() {
  const { userGlobal, addToGlobalState } = useContext(SessionContext); // global state context
  const date = new Date();
  const rideInfo = [
    {
      userID: "150",
      neighborhood: userGlobal.neighborhood,
      station: userGlobal.station,
      date: date.toLocaleDateString("fr-CA"),
      time: date.toLocaleTimeString("default", { timeStyle: "short" }),
    },
  ];

  return (
    <Box sx={{ minWidth: 300 }}>
      <React.Fragment>
        <Typography variant="h3" gutterBottom align="center">
          Depart summary
        </Typography>
        <Box
          sx={{
            maxWidth: 310,
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <List>
            {rideInfo.map((ride) => (
              <>
                <ListItem key={ride.userID} sx={{ py: 0, px: 0 }}>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        variant="body1"
                        style={{ color: "#46505A", fontWeight: 600 }}
                      >
                        Neighborhood
                      </Typography>
                    }
                    // primary="Neighborhood"
                  />
                  Hochelaga-Maisonneuve
                  {/* {ride.neighborhood} */}
                </ListItem>
                <ListItem key={ride.userID} sx={{ py: 0, px: 0 }}>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        variant="body1"
                        style={{ color: "#46505A", fontWeight: 600 }}
                      >
                        Station
                      </Typography>
                    }
                    // primary="Neighborhood"
                  />
                  Weeping Birch
                  {/* {ride.station} */}
                </ListItem>
                <ListItem key={ride.userID} sx={{ py: 0, px: 0 }}>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        variant="body1"
                        style={{ color: "#46505A", fontWeight: 600 }}
                      >
                        Date
                      </Typography>
                    }
                    // primary="Neighborhood"
                  />
                  {ride.date}
                </ListItem>
                <ListItem key={ride.userID} sx={{ py: 0, px: 0 }}>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography
                        variant="body1"
                        style={{ color: "#46505A", fontWeight: 600 }}
                      >
                        Time
                      </Typography>
                    }
                    // primary="Neighborhood"
                  />
                  {ride.time}
                </ListItem>
              </>
            ))}
          </List>
        </Box>
      </React.Fragment>
    </Box>
  );
}
