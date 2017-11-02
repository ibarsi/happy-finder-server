const mongoose = require('mongoose');
const { Schema } = mongoose;

const AddressSchema = require('./address.schema');

const SuggestionSchema = new Schema({
    name: { type: String, required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    address: AddressSchema,
});

module.exports = mongoose.model('Suggestion', SuggestionSchema);
