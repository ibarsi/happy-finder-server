const Establishment = require('./establishments.model');
const { InternalError } = require('../../errors');

exports.index = async (req, res, next) => {
    try {
        const establishments = await Establishment.find({}).lean().exec();

        res.json(establishments);
    } catch (error) {
        return next(new InternalError(error));
    }
};

exports.create = async (req, res, next) => {
    try {
        await Establishment.create(req.body);

        res.sendStatus(201);
    } catch (error) {
        return next(new InternalError(error));
    }
};
