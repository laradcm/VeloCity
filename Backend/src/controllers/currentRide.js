const currentRideService = require("../services/currentRide");
const endRideService = require("../services/endRideSession");

async function currentRide(req, res, next) {
  try {
    res.json(await currentRideService.currentRide(req.body.user_id));
  } catch (err) {
    err.message = `Error while getting current ride info ` + err.message;
    next(err);
  }
}

async function endRide(req, res, next) {
  try {
    res.json(await endRideService.endRide(req.body.ride_id));
  } catch (err) {
    err.message = `Error while updating ride info ` + err.message;
    next(err);
  }
}

module.exports = {
  currentRide,
  endRide,
};
