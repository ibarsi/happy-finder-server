const express = require('express');
const controller = require('./establishments.controller');
const router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);

module.exports = router;
