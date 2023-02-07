const express = require('express');
const router = express.Router();
const bicycles = require('../controllers/bicycles');

/* GET bicycles. */
router.get('/', bicycles.read);

router.post('/', bicycles.create);

router.delete('/:id', bicycles.deleteRow);

module.exports = router;