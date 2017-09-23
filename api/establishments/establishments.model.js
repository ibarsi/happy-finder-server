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
        coords: Array,
        formatted: String,
        google: Schema.Types.Mixed
    },
    deals: [ DealSchema ]
});

EstablishmentSchema.index({ 'address.coords': '2d' });

module.exports = mongoose.model('Establishment', EstablishmentSchema);
