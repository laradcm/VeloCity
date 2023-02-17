const db = require("./db");

async function getCurrentRide(user_id) {
  const text = `SELECT * FROM ride_sessions WHERE arrival_time IS NULL AND user_id = $1 ORDER BY ticket DESC;`;
  const values = [user_id];
  const result = await db.query(text, values);
  const data = result.rows[0];
  console.log(user_id)

  return data;
}

async function getStationInfo(station_id) {
  const text = `SELECT neighborhood, name FROM stations WHERE id = $1;`;
  const values = [station_id];
  const result = await db.query(text, values);
  const data = result.rows[0];

  return data;
}

/*
 * Begining of function to be exported
 */
async function currentRide(user_id) {
  const returnObject = {};

  returnObject.ride_session = await getCurrentRide(user_id);
  returnObject.station = await getStationInfo(
    returnObject.ride_session.origin_station
  );

  return returnObject;
}

module.exports = {
  currentRide,
};
