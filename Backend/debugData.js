const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Clinic = require('./models/Clinic');

dotenv.config();

const debugData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const clinics = await Clinic.find({});
        clinics.forEach(c => {
            console.log(`ID: ${c._id}, Role: ${c.role}, Location:`, JSON.stringify(c.location));
        });
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

debugData();
