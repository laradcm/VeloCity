import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { fontSize } from "@mui/system";
import { useContext } from "react";
import { SessionContext } from "../context/userGlobalContext";

// const products = [
//   {
//     name: "Departing neighbourhood",
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
  const rideInfo = [
    {
      userID: "150",
      neighbourhood: userGlobal.neighbourhood,
      station: userGlobal.station,
      date: "2023/02/31",
      time: "14:05",
    },
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom align="center">
        Depart summary
      </Typography>
      {/* <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{}}>
            <ListItemText primary={product.name} secondary={product.desc} />
          </ListItem>
        ))}
      </List> */}
      <List disablePadding>
        {rideInfo.map((ride) => (
          <>
            <ListItem key={ride.userID} sx={{ py: 0, px: 19 }}>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    variant="body1"
                    style={{ color: "#46505A", fontWeight: 600 }}
                  >
                    Neighbourhood
                  </Typography>
                }
                // primary="Neighbourhood"
              />
              {ride.neighbourhood}
            </ListItem>
            <ListItem key={ride.userID} sx={{ py: 0, px: 19 }}>
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
                // primary="Neighbourhood"
              />
              {ride.station}
            </ListItem>
            <ListItem key={ride.userID} sx={{ py: 0, px: 19 }}>
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
                // primary="Neighbourhood"
              />
              {ride.date}
            </ListItem>
            <ListItem key={ride.userID} sx={{ py: 0, px: 19 }}>
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
                // primary="Neighbourhood"
              />
              {ride.time}
            </ListItem>
          </>
        ))}
      </List>
    </React.Fragment>
  );
}
