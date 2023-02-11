import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// Start of    select button - drop down ***********************
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { fetchRead } from "../scripts/fetch"
// End of      select button - drop down ***********************


export default function AddressForm() {
  // data to be retrieved from server
  const [stationsData, setStationsData] = React.useState("");
  
  React.useEffect(() => {
    (async()=>{
      const data = await fetchRead("/stations");
      setStationsData(data);
    })()
  }, []);

  // start of the   Neighbourhood   dropdown box
  const [neighbourhood, setNeighbourhood] = React.useState("");
  const handleChange = (event) => {
    setNeighbourhood(event.target.value);
  };
  // end of the   Neighbourhood   dropdown box
  // start of the   Station   dropdown box
  const [station, setSation] = React.useState("");
  const handleChangeStation = (event) => {
    setSation(event.target.value);
  };

  // end of the   Station   dropdown box
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom align="center">
        Set departure
      </Typography>
      <Grid container spacing={1} align="center">
        {/* Above: This is space between rows */}
        {/* neighbourhood */}
        <Grid item xs={12}>
          <div>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="neighbourhood">Neighbourhood</InputLabel>
              <Select
                labelId="neighbourhood"
                id="neighbourhood"
                value={neighbourhood}
                onChange={handleChange}
                autoWidth
                label="neighbourhood"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                { 
                  stationsData && stationsData.map((val)=>{
                    return <MenuItem value={1}>{val?.neighborhood}</MenuItem>
                  })
                }
              </Select>
            </FormControl>
          </div>
        </Grid>
        {/* station */}
        <Grid item xs={12}>
          <div>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="neighbourhood">Station</InputLabel>
              <Select
                labelId="station"
                id="station"
                value={station}
                onChange={handleChangeStation}
                autoWidth
                label="station"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>
                  UdeM&nbsp;&nbsp;
                  <strong>0 bikes available</strong>
                </MenuItem>
                <MenuItem value={20}>
                  Oratory&nbsp;&nbsp;
                  <strong>3 bikes available</strong>
                </MenuItem>
                <MenuItem value={22}>
                  Old Port&nbsp;&nbsp;
                  <strong>4 bikes available</strong>
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
