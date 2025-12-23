const Clinic = require('../models/Clinic');

// @desc    Get nearest clinics
// @route   GET /api/clinics/nearest
// @access  Public
const getNearestClinics = async (req, res) => {
    const { latitude, longitude, maxDistance = 50000, search } = req.query; // maxDistance in meters

    try {
        let query = {
            isVerified: true
        };

        // Text Search Logic
        if (search) {
            const searchRegex = new RegExp(search, 'i'); // Case-insensitive regex
            query.$or = [
                { clinicName: searchRegex },
                { specialization: searchRegex },
                { address: searchRegex },
                { district: searchRegex },
                { state: searchRegex },
                { "timings.from": searchRegex },
                // Add more fields if needed
            ];
        }

        // Geospatial Logic (only if lat/long provided AND no conflicting text search that naturally overrides it, 
        // though typically we can combine. If user searches "Dentist", we still want nearest.
        // However, $near cannot be used with other complex queries easily in some versions without aggregate.
        // For simplicity: If lat/lng exists, we use it. If search exists, we allow it to filter results.
        // But standard find with $near and $or might conflict. 
        // Let's use standard find with manual distance calc OR simple find if search is present.)

        if (latitude && longitude && !search) {
            // Pure "Near Me" button press
            const clinics = await Clinic.find({
                location: {
                    $near: {
                        $geometry: {
                            type: 'Point',
                            coordinates: [parseFloat(longitude), parseFloat(latitude)]
                        },
                        $maxDistance: parseInt(maxDistance)
                    }
                },
                isVerified: true
            }).select('-password');
            return res.json(clinics);
        }

        // If search is present, we prioritize the text match. 
        // We can't easily use $near with $or in a simple find query in some contexts without aggregate.
        // So we default to text search if 'search' is present.

        const clinics = await Clinic.find(query).select('-password');
        res.json(clinics);

    } catch (error) {
        console.error('Error fetching clinics:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Get all clinics (Admin)
// @route   GET /api/clinics
// @access  Private/Admin
const getAllClinics = async (req, res) => {
    try {
        // Sort by newest first
        const clinics = await Clinic.find({ role: 'clinic' }).sort({ createdAt: -1 }).select('-password');
        res.json(clinics);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Get clinic profile
// @route   GET /api/clinics/profile
// @access  Private
const getClinicProfile = async (req, res) => {
    try {
        const clinic = await Clinic.findById(req.user._id).select('-password');
        if (clinic) {
            res.json(clinic);
        } else {
            res.status(404).json({ message: 'Clinic not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Update clinic profile
// @route   PUT /api/clinics/profile
// @access  Private
const updateClinicProfile = async (req, res) => {
    try {
        const clinic = await Clinic.findById(req.user._id);

        if (clinic) {
            // Update fields that are allowed to be updated
            clinic.fullName = req.body.fullName || clinic.fullName;
            clinic.age = req.body.age || clinic.age;
            clinic.sex = req.body.sex || clinic.sex;
            clinic.clinicName = req.body.clinicName || clinic.clinicName;
            clinic.address = req.body.address || clinic.address;
            clinic.state = req.body.state || clinic.state;
            clinic.district = req.body.district || clinic.district;
            clinic.pincode = req.body.pincode || clinic.pincode;
            clinic.website = req.body.website || clinic.website;
            clinic.contactEmail = req.body.contactEmail || clinic.contactEmail;
            clinic.contactPhone = req.body.contactPhone || clinic.contactPhone;
            clinic.councilName = req.body.councilName || clinic.councilName;
            clinic.councilNumber = req.body.councilNumber || clinic.councilNumber;
            clinic.specialization = req.body.specialization || clinic.specialization;

            // Timings and Days update logic (simple replacement for now)
            if (req.body.timingsFrom) clinic.timings.from = req.body.timingsFrom;
            if (req.body.timingsTo) clinic.timings.to = req.body.timingsTo;
            if (req.body.daysFrom) clinic.days.from = req.body.daysFrom;
            if (req.body.daysTo) clinic.days.to = req.body.daysTo;

            const updatedClinic = await clinic.save();

            res.json({
                _id: updatedClinic._id,
                fullName: updatedClinic.fullName,
                clinicName: updatedClinic.clinicName,
                isVerified: updatedClinic.isVerified,
                role: updatedClinic.role
            });
        } else {
            res.status(404).json({ message: 'Clinic not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Approve clinic
// @route   PUT /api/clinics/:id/approve
// @access  Private/Admin
const approveClinic = async (req, res) => {
    try {
        const clinic = await Clinic.findById(req.params.id);

        if (clinic) {
            clinic.isVerified = true;
            await clinic.save();
            res.json({ message: 'Clinic approved' });
        } else {
            res.status(404).json({ message: 'Clinic not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getNearestClinics,
    getAllClinics,
    getClinicProfile,
    updateClinicProfile,
    approveClinic
};
