const mongoose = require('mongoose');
const { Schema } = mongoose;

const DealSchema = require('./deal.schema');

const ESTABLISHMENT_TYPES = {
    RESTOURANT: 'restourant',
    BAR: 'bar'
};

const EstablishmentSchema = new Schema({
    name: String,
    type: { type: String, enum: Object.values(ESTABLISHMENT_TYPES) },
    address: {
        coords: {
            lat: Number,
            lng: Number
        },
        formatted: String,
        google: Schema.Types.Mixed
    },
    rating: { type: Number, min: 0, max: 5 },
    distance: { type: Number, min: 0 }, // Kilometers
    deals: [ DealSchema ]
});

module.exports = mongoose.model('Establishment', EstablishmentSchema);
