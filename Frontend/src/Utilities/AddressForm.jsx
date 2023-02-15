import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// Start of    select button - drop down ***********************
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// End of      select button - drop down ***********************
import { fetchRead } from "../scripts/fetch";
import { useContext } from "react";
import { SessionContext } from "../context/userGlobalContext";
import { useState, useEffect } from "react";

export default function AddressForm() {
  //global context session user
  const { userGlobal, addToGlobalState } = useContext(SessionContext); // global state context
  const [isDepartureReady, setIsDepartureReady] = useState(false); // final data

  // data to be retrieved from server
  const [stationsData, setStationsData] = React.useState("");
  const [neighborhoodData, setNeighborhoodData] = React.useState("");
  const [selectedNeighborhood, setSelectedNeighborhood] = React.useState("");

  React.useEffect(() => {
    (async () => {
      const data = await fetchRead("/stations");
      setStationsData(data);
      const neighborhoods = data.map((val) => val.neighborhood);
      const uniqueNeighborhoodsSet = new Set(neighborhoods);
      setNeighborhoodData(Array.from(uniqueNeighborhoodsSet));
    })();
  }, []);

  // start of the   Neighborhood   dropdown box
  const [neighborhood, setNeighborhood] = React.useState("");
  const handleChange = (event) => {
    setNeighborhood(event.target.value);
    setSelectedNeighborhood(event.target.value);
  };
  // end of the   Neighborhood   dropdown box
  // start of the   Station   dropdown box
  const [station, setSation] = React.useState("");
  const handleChangeStation = (event) => {
    setSation(event.target.value);
    setIsDepartureReady(true);
  };
  useEffect(() => {
    addToGlobalState(neighborhood, station); // test
  }, [isDepartureReady]);

  console.log(userGlobal);
  // end of the   Station   dropdown box
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom align="center">
        Set departure
      </Typography>
      <Grid container spacing={1} align="center">
        {/* Above: This is space between rows */}
        {/* neighborhood */}
        <Grid item xs={12}>
          <div>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="neighborhood">Neighborhood</InputLabel>
              <Select
                labelId="neighborhood"
                id="neighborhood"
                value={neighborhood}
                onChange={handleChange}
                autoWidth
                label="neighborhood"
              >
                <MenuItem value="" key="">
                  <em>None</em>
                </MenuItem>
                {neighborhoodData &&
                  neighborhoodData.map((val) => {
                    return (
                      <MenuItem value={val} key={val}>
                        {val}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          </div>
        </Grid>
        {/* station */}
        <Grid item xs={12}>
          <div>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="neighborhood">Station</InputLabel>
              <Select
                labelId="station"
                id="station"
                value={station}
                onChange={handleChangeStation}
                autoWidth
                label="station"
              >
                <MenuItem value="" key="">
                  <em>None</em>
                </MenuItem>
                {stationsData &&
                  stationsData.map((val) => {
                    return (
                      val.neighborhood === selectedNeighborhood && (
                        <MenuItem value={val.name} key={val.id}>
                          {val.name}&nbsp;&nbsp;
                          <strong>
                            {val.available_bicycles} bikes available
                          </strong>
                        </MenuItem>
                      )
                    );
                  })}
              </Select>
            </FormControl>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
