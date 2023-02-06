const bicycles = require('../services/bicycles');

async function read(req, res, next) {
    try {
        res.json(await bicycles.readAll());

    } catch (err) {
        console.error(`Error while getting programming languages`, err.message);
        next(err);
    }
}

module.exports = {
    read
}