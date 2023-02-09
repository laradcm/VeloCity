const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

/* GET table. */
router.get('/:table', controller.read);

router.post('/:table', controller.create);

router.put('/:table', controller.update);

router.delete('/:table/:id', controller.deleteRow);

module.exports = router;