const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const users = require("../controllers/users");
const newRideSession = require("../controllers/ride_session");
const currentRideController = require("../controllers/currentRide")

/* GET table. */
router.post("/singleUser", users.readSingle);

router.post("/initiateRide", newRideSession.initiateRideSession);

router.post('/currentRide', currentRideController.currentRide);

router.get("/:table", controller.read);

router.post("/:table", controller.create);

router.put("/:table/:id", controller.update);

router.delete("/:table/:id", controller.deleteRow);

module.exports = router;
