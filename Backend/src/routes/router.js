const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const users = require('../controllers/users');

/* GET table. */
router.get('/:table', controller.read);

router.post('/:table', controller.create);

router.put('/:table/:id', controller.update);

router.delete('/:table/:id', controller.deleteRow);

router.get('/users/:id', users.readSingle);

module.exports = router;