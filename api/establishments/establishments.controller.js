const Establishment = require('./establishments.model');
const { InternalError } = require('../../errors');

exports.index = async (req, res, next) => {
    const projection = {
        $project: {
            name: 1,
            type: 1,
            distance: 1,
            deals: 1
        }
    };

    const aggregateQuery = [];

    try {
        if (req.query.lat && req.query.lng) {
            const query = {
                $geoNear: {
                    near: {
                        type: 'Point',
                        coordinates: [ Number(req.query.lng), Number(req.query.lat) ]
                    },
                    distanceField: 'distance',
                    distanceMultiplier: 1 / 1000, // Ms -> KMs
                    maxDistance: 5000, // 5km
                    spherical: true,
                    num: 10
                }
            };

            aggregateQuery.push(query);
        }

        aggregateQuery.push(projection);

        const establishments = await Establishment.aggregate(aggregateQuery).exec();

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
