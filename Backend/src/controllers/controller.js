const services = require('../services/services');

async function read(req, res, next) {
    try {
        res.json(await services.readAll(req.params.table));

    } catch (err) {
        err.message = `Error while getting ${req.params.table}: `+ err.message;
        next(err);

    }
}

async function create(req, res, next) {
    try {
        res.json(await services.create(req.params.table, req.body));

    } catch (err) {
        err.message = `Error while creating ${req.params.table}: ` + err.message ;
        next(err);
    }
}

async function update(req, res, next) {
    try {
        res.json(await services.update(req.params.table, req.body));

    } catch (err) {
        err.message = `Error while updating ${req.params.table} ` + err.message ;
        next(err);
    }
}


async function deleteRow(req, res, next) {
    try {
        res.json(await services.deleteRow(req.params.table, req.params.id));

    } catch (err) {
        err.message = `Error while deleting ${req.params.table}: ` + err.message ;
        next(err);
    }
}

module.exports = {
    read, 
    create, 
    update,
    deleteRow
}