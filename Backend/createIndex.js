const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Clinic = require('./models/Clinic');

dotenv.config();

const createIndex = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');

        console.log('Creating index...');
        await Clinic.collection.createIndex({ "location": "2dsphere" });
        console.log('Index Created Successfully!');

        process.exit();
    } catch (error) {
        console.error('Error:', JSON.stringify(error, null, 2));
        process.exit(1);
    }
};

createIndex();
