const request = require('axios');

const config = require('../../config/environment');

const searchPlacesByKeyword = async (coords, keyword) => {
    const base = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
    const options = [
        `key=${ config.googleApiKey }`,
        `location=${ coords.lat },${ coords.lng }`,
        'radius=5000',
        `keyword=${ keyword }`
    ];
    const url = `${ base }?${ options.join('&') }`;

    const response = await request(url);

    return response.data.results;
};

module.exports = {
    searchPlacesByKeyword
};
