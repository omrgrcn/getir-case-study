const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const CountSchema = new Schema({
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: Date.now
    },
    minCount: Number,
    maxCount: Number
});

module.exports = mongoose.model('count', CountSchema);