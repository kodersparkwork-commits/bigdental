const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Clinic = require('./models/Clinic');

dotenv.config();

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');

        const email = process.argv[2]; // Get email from command line

        if (!email) {
            console.log('Please provide an email to promote to admin. Usage: node seedAdmin.js <email>');
            process.exit(1);
        }

        const clinic = await Clinic.findOne({ email });

        if (clinic) {
            clinic.role = 'admin';
            clinic.isVerified = true; // Admins should be verified
            await clinic.save();
            console.log(`User ${clinic.email} is now an Admin!`);
        } else {
            console.log(`User with email ${email} not found.`);
        }

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedAdmin();
