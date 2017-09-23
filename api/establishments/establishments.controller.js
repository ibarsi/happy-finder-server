const Establishment = require('./establishments.model');
const { InternalError } = require('../../errors');

exports.index = (req, res, next) => {
    return Establishment.find({}).lean().exec()
    .then(establishments => res.json(establishments))
    .catch(error => next(new InternalError(error)));
};

exports.create = (req, res, next) => {
    return Establishment.create(req.body)
    .then(() => res.sendStatus(201))
    .catch(error => next(new InternalError(error)));
};
