const currentRideService = require("../services/currentRide");

async function currentRide(req, res, next) {
  try {
    res.json(await currentRideService.currentRide(req.body.user_id));
  } catch (err) {
    err.message = `Error while getting current ride info ` + err.message;
    next(err);
  }
}

module.exports = {
  currentRide,
};
