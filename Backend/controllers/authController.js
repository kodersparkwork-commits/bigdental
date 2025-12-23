const Clinic = require('../models/Clinic');
const jwt = require('jsonwebtoken');

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

// @desc    Register a new clinic
// @route   POST /api/auth/register
// @access  Public
const registerClinic = async (req, res) => {
    try {
        const {
            fullName, age, sex, dob, clinicName, address, state, district, pincode,
            timingsFrom, timingsTo, daysFrom, daysTo, website,
            contactEmail, contactPhone, loginEmail, password,
            councilName, councilNumber, specialization, longitude, latitude
        } = req.body;

        console.log('Register Body:', JSON.stringify(req.body, null, 2));
        if (req.files) console.log('Register Files:', Object.keys(req.files));

        // Check if clinic already exists
        const clinicExists = await Clinic.findOne({ email: loginEmail });

        if (clinicExists) {
            return res.status(400).json({ message: 'Clinic already registered with this email' });
        }

        // Handle File Uploads
        let councilCertificate = '';
        let clinicPhotos = [];

        if (req.files) {
            if (req.files.councilCertificate) {
                councilCertificate = req.files.councilCertificate[0].path;
            }
            if (req.files.clinicPhotos) {
                clinicPhotos = req.files.clinicPhotos.map(file => file.path);
            }
        }

        // Create Clinic
        const clinic = await Clinic.create({
            fullName, age, sex, dob, clinicName, address, state, district, pincode,
            timings: { from: timingsFrom, to: timingsTo },
            days: { from: daysFrom, to: daysTo },
            website, contactEmail, contactPhone,
            email: loginEmail,
            role: 'clinic', // Force role to be clinic
            password,
            councilName, councilNumber, specialization,
            councilCertificate,
            clinicPhotos,
            location: {
                type: 'Point',
                coordinates: [parseFloat(longitude), parseFloat(latitude)]
            }
        });

        if (clinic) {
            res.status(201).json({
                _id: clinic._id,
                clinicName: clinic.clinicName,
                email: clinic.email,
                token: generateToken(clinic._id),
            });
        } else {
            res.status(400).json({ message: 'Invalid clinic data' });
        }
    } catch (error) {
        console.error('Registration Error:', error.message);
        if (error.errors) {
            console.error('Validation Errors:', JSON.stringify(error.errors, null, 2));
        }
        res.status(500).json({ message: 'Server Error: ' + error.message });
    }
};

// @desc    Auth clinic & get token
// @route   POST /api/auth/login
// @access  Public
const authClinic = async (req, res) => {
    const { email, password } = req.body;

    try {
        const clinic = await Clinic.findOne({ email });

        if (clinic && (await clinic.matchPassword(password))) {
            res.json({
                _id: clinic._id,
                fullName: clinic.fullName,
                email: clinic.email,
                role: clinic.role,
                token: generateToken(clinic._id),
            });
        } else {
            res.status(401);
            throw new Error('Invalid email or password');
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Get current user profile
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
    try {
        const clinic = await Clinic.findById(req.user._id);
        if (clinic) {
            res.json({
                _id: clinic._id,
                fullName: clinic.fullName,
                email: clinic.email,
                role: clinic.role,
                clinicName: clinic.clinicName, // Add other necessary fields
                isVerified: clinic.isVerified
            });
        } else {
            res.status(404);
            throw new Error('User not found');
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}

const registerAdmin = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        const userExists = await Clinic.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await Clinic.create({
            fullName,
            email,
            password,
            role: 'admin',
            isVerified: true
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                role: user.role,
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { registerClinic, authClinic, getMe, registerAdmin };
