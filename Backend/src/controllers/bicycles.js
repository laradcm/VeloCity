const bicycles = require('../services/bicycles');

async function read(req, res, next) {
    try {
        res.json(await bicycles.readAll());

    } catch (err) {
        err.message = `Error while getting bicycles: `+ err.message;
        next(err);

    }
}

async function create(req, res, next) {
    try {
        res.json(await bicycles.create(req.body));

    } catch (err) {
        err.message = `Error while creating bicycles: ` + err.message ;
        next(err);
    }
}

async function update(req, res, next) {
    try {
        res.json(await bicycles.update(req.body));

    } catch (err) {
        err.message = `Error while updating bicycles: ` + err.message ;
        next(err);
    }
}


async function deleteRow(req, res, next) {
    try {
        res.json(await bicycles.deleteRow(req.params.id));

    } catch (err) {
        err.message = `Error while deleting bicycles: ` + err.message ;
        next(err);
    }
}

module.exports = {
    read, 
    create, 
    update,
    deleteRow
}