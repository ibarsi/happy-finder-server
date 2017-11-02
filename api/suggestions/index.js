const express = require('express');
const controller = require('./suggestions.controller');
const router = express.Router();

router.post('/', controller.create);

module.exports = router;
