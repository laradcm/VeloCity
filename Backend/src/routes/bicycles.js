const express = require('express');
const router = express.Router();
const bicycles = require('../controllers/bicycles');

/* GET programming languages. */
router.get('/', bicycles.read);

module.exports = router;