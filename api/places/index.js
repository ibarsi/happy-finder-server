const express = require('express');
const controller = require('./places.controller');
const router = express.Router();

router.get('/', controller.index);

module.exports = router;
