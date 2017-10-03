const mongoose = require('mongoose');
const { Schema } = mongoose;

const DealSchema = require('./deal.schema');

const ESTABLISHMENT_TYPES = {
    RESTAURANT: 'restaurant',
    BAR: 'bar'
};

const EstablishmentSchema = new Schema({
    name: String,
    type: { type: String, enum: Object.values(ESTABLISHMENT_TYPES) },
    address: {
        coords: {
            type: { type: String, default: 'Point' },
            coordinates: [ Number ]
        },
        formatted: String,
        google: Schema.Types.Mixed
    },
    deals: [ DealSchema ]
});

EstablishmentSchema.index({ 'address.coords': '2dsphere' });

module.exports = mongoose.model('Establishment', EstablishmentSchema);
