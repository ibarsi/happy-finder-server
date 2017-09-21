const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const http = require('http');
const mongoose = require('mongoose');
mongoose.Promise = Promise;

const config = require('./config/environment');
const routes = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

const server = http.createServer(app);

mongoose.connect(config.mongo.uri, config.mongo.options).then(() => {
    server.listen(config.port, config.ip, () => {
        console.log(`Express server listening on ${ config.port }, in ${ app.get('env') } mode.`);
    });
});

module.exports = app;
