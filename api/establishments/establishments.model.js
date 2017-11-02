const mongoose = require('mongoose');
const { Schema } = mongoose;

const DealSchema = require('./deal.schema');
const AddressSchema = require('../suggestions/address.schema');

const ESTABLISHMENT_TYPES = {
    RESTAURANT: 'restaurant',
    BAR: 'bar'
};

const EstablishmentSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, enum: Object.values(ESTABLISHMENT_TYPES), required: true },
    address: AddressSchema,
    deals: [ DealSchema ]
});

EstablishmentSchema.index({ 'address.coords': '2dsphere' });

module.exports = mongoose.model('Establishment', EstablishmentSchema);
