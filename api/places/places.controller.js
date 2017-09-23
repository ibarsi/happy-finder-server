const { InternalError, BadRequest } = require('../../errors');
const { places } = require('../../utils/google');

exports.index = async (req, res, next) => {
    if (!req.query.lat || !req.query.lng || !req.query.keyword) {
        return next(new BadRequest('Places search requires latitude, longitude and keyword.'));
    }

    try {
        const coords = {
            lat: req.query.lat,
            lng: req.query.lng
        };

        const results = await places.searchPlacesByKeyword(coords, req.query.keyword);

        res.json(results);
    } catch (error) {
        return next(new InternalError(error));
    }
};
