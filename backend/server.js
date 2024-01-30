const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const mainRoute = require('./routes/index');
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

//Middleware
app.use(express.json());



app.use('/api', mainRoute)


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
    connect();
});