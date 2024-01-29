const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = 5000;

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected to mongoDb')
    } catch (error) {
        throw error;
    }
}



app.get('/', (req, res) => {
    const customers = [
        { id: 1, firstName: 'John', lastName: 'Doe' },
        { id: 2, firstName: 'Steve', lastName: 'Smith' },
        { id: 3, firstName: 'Mary', lastName: 'Swanson' },
    ];

    res.json(customers);
});



app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    connect();
});