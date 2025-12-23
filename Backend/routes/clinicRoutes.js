const express = require('express');
const router = express.Router();
const {
    getNearestClinics,
    getAllClinics,
    getClinicProfile,
    updateClinicProfile,
    approveClinic
} = require('../controllers/clinicController');
const { protect, admin } = require('../middleware/authMiddleware');

// Search Nearest Clinics
router.get('/nearest', getNearestClinics);
router.route('/profile')
    .get(protect, getClinicProfile)
    .put(protect, updateClinicProfile);
router.get('/', protect, admin, getAllClinics);
router.put('/:id/approve', protect, admin, approveClinic);

module.exports = router;
