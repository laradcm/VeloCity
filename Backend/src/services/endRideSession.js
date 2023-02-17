const db = require("./db");
const services = require("../services/services");

async function getCurrentRide(ride_id) {
  const text = `SELECT * FROM ride_sessions WHERE id = $1;`;
  const values = [ride_id];
  const result = await db.query(text, values);
  const data = result.rows[0];

  return data;
}

async function getStationInfo(station_id) {
  const text = `SELECT neighborhood, name FROM stations WHERE id = $1;`;
  const values = [station_id];
  const result = await db.query(text, values);
  const data = result.rows[0];

  return data;
}

async function randomReturnStation(neighborhood) {
  const text = `SELECT id FROM stations WHERE neighborhood = $1 AND available_bicycles <> capacity;`;
  const values = [neighborhood];
  const result = await db.query(text, values);
  const data = result.rows[Math.floor(Math.random() * result.rowCount)];
  
  return data.id;
}

async function updateBicycle(bicycle_id, station_id){
  const text = `select * from bicycles where id = $1;`;
  const values = [bicycle_id]
  const result = await db.query(text, values);
  const old = result.rows[0];
  const id = old.id;
  delete old.id;
  const data = { ...old, status: "Available", station_id: station_id};
  services.update("bicycles", id, data);
  return;
}

async function updateStation(station_id){
  const text = `select * from stations where id = $1;`;
  const values = [station_id]
  const result = await db.query(text, values);
  const old = result.rows[0];
  const id = old.id;
  delete old.id;
  const data = { ...old, available_bicycles: old.available_bicycles+1};
  services.update("stations", id, data);
  return;
}

/*
 * Begining of function to be exported
 */
async function endRide(ride_id) {

  const updatedRide = await getCurrentRide(ride_id);
  //console.log("updatedRide", updatedRide)
  
  const station_info = await getStationInfo(updatedRide.origin_station);
  const returnStation = await randomReturnStation(station_info.neighborhood);
  
  const completedRide = (await services.update("ride_sessions", ride_id, {
    "bicycle_id":updatedRide.bicycle_id,
    "origin_station":updatedRide.origin_station,
    "start_time":updatedRide.start_time,
    "ticket":updatedRide.ticket,
    "user_id":updatedRide.user_id,
    "arrival_time":"NOW()",
    "returned_successfully": true,
    "return_station":returnStation
  }));
  console.log("ride_comleteted", completedRide)
  
  updateStation(completedRide.updated_row.return_station); // should be done along with ride_sessions update as a transaction
  updateBicycle(completedRide.updated_row.bicycle_id); // should be done along with ride_sessions update as a transaction
  return completedRide;
}

module.exports = {
  endRide,
};
