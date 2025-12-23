const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Clinic = require('./models/Clinic');

dotenv.config();

const fixData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');

        // Delete users with invalid location (missing coordinates)
        // Check for location.type == Point AND location.coordinates is null/empty
        // Or just finding the one I saw: {"type":"Point"}
        const invalidUsers = await Clinic.find({ "location.coordinates": { $exists: false } });
        console.log(`Found ${invalidUsers.length} invalid users.`);

        if (invalidUsers.length > 0) {
            await Clinic.deleteMany({ "location.coordinates": { $exists: false } });
            console.log('Deleted invalid users.');
        }

        process.exit();
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

fixData();
