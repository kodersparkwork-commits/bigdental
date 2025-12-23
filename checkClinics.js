const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Clinic = require('./Backend/models/Clinic');

dotenv.config({ path: './Backend/.env' });

const checkData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
        const count = await Clinic.countDocuments();
        console.log(`Total Clinics: ${count}`);
        const verifiedCount = await Clinic.countDocuments({ isVerified: true });
        console.log(`Verified Clinics: ${verifiedCount}`);
        
        if (verifiedCount > 0) {
            const sample = await Clinic.findOne({ isVerified: true });
            console.log('Sample Clinic Location:', JSON.stringify(sample.location, null, 2));
        }
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

checkData();
