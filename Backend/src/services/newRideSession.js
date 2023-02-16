const db = require("./db");
const genValRef = require("../utils/generateValuesReferences");
const genKeyVal = require("../utils/generateInKeysValues");
const services = require("../services/services");

async function getAvailableBicycle(station){
  const text = `SELECT id FROM bicycles WHERE station_id = $1;`;
  const values = [station];
  const result = await db.query(text, values);
  const data = result.rows[0];

  return data.id;
}

async function getStationId(station){
  const text = `SELECT id FROM stations WHERE name = $1;`;
  const values = [station];
  const result = await db.query(text, values);
  const data = result.rows[0];

  return data.id;
}

async function getNextTicket(){
  const text = `select ticket from ride_sessions ORDER BY ticket DESC limit 1;`;
  const result = await db.query(text);
  const data = result.rows[0];
  const newTicket = (data.ticket.slice(0,2) + ( Number(data.ticket.slice(2)) + 1 ))
  return newTicket;
}

async function updateBicycle(bicycle_id){
  const text = `select * from bicycles where id = $1;`;
  const values = [bicycle_id]
  const result = await db.query(text, values);
  const old = result.rows[0];
  const id = old.id;
  delete old.id;
  const data = { ...old, status: "In use", station_id: null};
  services.update("bicycles", id, data);
  return;
}

async function updateStation(station){
  const text = `select * from stations where id = $1;`;
  const values = [station]
  const result = await db.query(text, values);
  const old = result.rows[0];
  const id = old.id;
  delete old.id;
  const data = { ...old, available_bicycles: old.available_bicycles-1};
  services.update("stations", id, data);
  return;
}

/*
 * Begining of function to be exported
*/
async function initiateRideSession(rideObject) {
  let message = "";
  if (rideObject.id) {
    message = `Error in updating ride_sessions, id should not be provided`;
    return { message };
  }
  if (rideObject.bicycle_id) {
    message = `Error in updating ride_sessions, bicycle_id should not be provided`;
    return { message };
  }
  if (rideObject.return_station) {
    message = `Error in updating ride_sessions, return_station should not be provided`;
    return { message };
  }
  if (rideObject.arrival_time) {
    message = `Error in updating ride_sessions, arrival_time should not be provided`;
    return { message };
  }
  if (rideObject.ticket) {
    message = `Error in updating ride_sessions, ticket should not be provided`;
    return { message };
  }
  if (rideObject.returned_successfully) {
    message = `Error in updating ride_sessions, returned_successfully should not be provided`;
    return { message };
  }
  if (rideObject.start_time) {
    message = `Error in updating ride_sessions, start_time should not be provided`;
    return { message };
  }

  rideObject.origin_station = await getStationId(rideObject.origin_station);
  rideObject.bicycle_id = await getAvailableBicycle(rideObject.origin_station);
  rideObject.ticket = await getNextTicket();
  rideObject.returned_successfully = false;
  rideObject.start_time = "NOW()";

  const input = genKeyVal(rideObject);
  const valueReferences = genValRef(input.size);

  const text = `INSERT INTO ride_sessions(${input.keys.join(",")})
                VALUES(${valueReferences});`;

  const values = input.values;
  const result = await db.query(text, values);

  if (result.rowCount) {
    updateStation(rideObject.origin_station); // should be done along with creation as a transaction
    updateBicycle(rideObject.bicycle_id); // should be done along with creation as a transaction
    message = `ride_sessions updated successfully`;
  } else {
    return { message: `Error in updating ride_sessions` };
  }
}

module.exports = {
  initiateRideSession,
};
