const users = require("../services/users");

async function readSingle(req, res, next) {
  try {
    console.log(req.params);
    res.json(await users.readSingle("users", req.params.email));
  } catch (err) {
    err.message = `Error while getting users ` + err.message;
    next(err);
  }
}

module.exports = {
  readSingle,
};
