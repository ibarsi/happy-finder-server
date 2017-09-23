const mongoose = require('mongoose');
const { Schema } = mongoose;

const ITEM_TYPES = {
    DRINK: 'drink',
    FOOD: 'food'
};

const DealSchema = new Schema({
    price: { type: Number, min: 0 }, // Dollars
    description: String,
    startTime: String, // 4:00PM
    endTime: String, // 6:00PM
    items: [
        {
            type: { type: String, enum: Object.values(ITEM_TYPES) },
            name: String
        }
    ]
});

module.exports = DealSchema;
