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
import { fetchReadSingleUser } from "../scripts/fetch";
import { useCookies } from "react-cookie"; // cookies

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
  const [cookies, setCookie] = useCookies(["user"]); // cookies
  const [rideInfo, setRideInfo] = React.useState("");
  const date = new Date();

  React.useEffect(() => {
    (async () => {
      const user = await fetchReadSingleUser(cookies.email);
      setRideInfo({
        userID: user.id,
        neighborhood: userGlobal.neighborhood,
        station: userGlobal.station,
        date: date.toLocaleDateString("fr-CA"),
        time: date.toLocaleTimeString("default", { timeStyle: "short" }),
      });
    })();
  }, []);

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
            <>
                <ListItem sx={{ py: 0, px: 0 }}>
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
                  {rideInfo.neighborhood}
                </ListItem>
                <ListItem sx={{ py: 0, px: 0 }}>
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
                  {rideInfo.station}
                </ListItem>
                <ListItem sx={{ py: 0, px: 0 }}>
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
                  {rideInfo.date}
                </ListItem>
                <ListItem sx={{ py: 0, px: 0 }}>
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
                  {rideInfo.time}
                </ListItem>
              </>
          </List>
        </Box>
      </React.Fragment>
    </Box>
  );
}
