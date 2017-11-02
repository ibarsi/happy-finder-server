const Suggestion = require('./suggestions.model');
const { InternalError } = require('../../errors');

exports.create = async (req, res, next) => {
    try {
        await Suggestion.create(req.body);

        res.sendStatus(201);
    } catch (error) {
        return next(new InternalError(error));
    }
};
