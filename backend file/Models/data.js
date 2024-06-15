const mongoose = require('mongoose');

// Define the schema for the data
const DataSchema = new mongoose.Schema({
    end_year: {
        type: Number,
        required: false
    },
    intensity: {
        type: Number,
        required: false
    },
    sector: {
        type: String,
        required: false
    },
    topic: {
        type: String,
        required: false
    },
    insight: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: false
    },
    start_year: {
        type: Number,
        required: false
    },
    added: {
        type: String,
        required: false
    },
    published: {
        type: String,
        required: false
    },
    relevance: {
        type: Number,
        required: false
    },
    pestel: {
        type: String,
        required: false
    },
    source: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    likelihood: {
        type: Number,
        required: false
    },
    region: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    impact: {
        type: Number,
        required: false
    }
}, {
    collection: 'Data' // Explicitly specify the collection name
});

// Create the model for the Data collection
const DataModel = mongoose.model("Data", DataSchema);

module.exports = DataModel;
