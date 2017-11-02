const mongoose = require('mongoose');
const { Schema } = mongoose;

const AddressSchema = new Schema({
    coords: {
        type: { type: String, default: 'Point' },
        coordinates: [ Number ]
    },
    formatted: String,
    google: Schema.Types.Mixed
});

module.exports = AddressSchema;
