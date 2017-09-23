const Establishment = require('./establishments.model');
const { InternalError } = require('../../errors');

exports.index = async (req, res, next) => {
    try {
        let query = {};

        if (req.query.lat && req.query.lng) {
            query = {
                $geoNear: {
                    near: [ Number(req.query.lat), Number(req.query.lng) ],
                    distanceField: 'distance',
                    distanceMultiplier: 6371,
                    spherical: true,
                    num: 5000
                }
            };
        }

        const aggregateQuery = [
            query,
            {
                $project: {
                    name: 1,
                    type: 1,
                    distance: 1
                }
            }
        ];

        const establishments = await Establishment.collection.aggregate(aggregateQuery).get();

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
