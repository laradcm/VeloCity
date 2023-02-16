const newRideSession = require("../services/newRideSession");

async function initiateRideSession(req, res, next) {
  try {
    res.json(await newRideSession.initiateRideSession(req.body));
  } catch (err) {
    err.message = `Error while getting users ` + err.message;
    next(err);
  }
}

module.exports = {
  initiateRideSession,
};