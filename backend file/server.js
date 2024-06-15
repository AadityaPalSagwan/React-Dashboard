const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DataModel = require('./Models/data');

const app = express();
app.use(cors());
app.use(express.json());

// Direct configuration options
const mongoUri = "mongodb://127.0.0.1:27017/DashBoard";
// mongodb://127.0.0.1:27017/DashBoard
const port = 3000;

// Improved connection to MongoDB with error handling and retry logic
const connectWithRetry = () => {
    mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.error("Error connecting to MongoDB:", err);
        console.log("Retrying connection in 5 seconds...");
        setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

// API endpoint to get all data from the Data collection
app.get('/getallData', (req, res) => {
    DataModel.find()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err.message }));
});

// API endpoint to get data for a single specified field
app.get('/getFieldData', (req, res) => {
    const field = req.query.field;

    // Check if field is provided and valid
    if (!field) {
        console.error('Field parameter is missing');
        return res.status(400).json({ error: 'Field parameter is required' });
    }

    // Validate the field name to ensure it's a known field
    const validFields = [
        'end_year', 'country', 'intensity', 'sector', 'topic', 'insight',
        'url', 'start_year', 'added', 'published', 'relevance', 'pestel',
        'source', 'title', 'likelihood', 'region','city', 'impact'
    ];

    if (!validFields.includes(field)) {
        console.error(`Invalid field parameter: ${field}`);
        return res.status(400).json({ error: 'Invalid field parameter' });
    }

    // Create a projection object
    const projection = {};
    projection[field] = 1;

    DataModel.find({}, projection)
        .then(data => {
            console.log(`Data for field ${field}:`, data); // Log the fetched data
            res.json(data);
        })
        .catch(err => {
            console.error(`Error fetching data for field ${field}:`, err); // Log the error
            res.status(500).json({ error: err.message });
        });
});


// Start the server on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
