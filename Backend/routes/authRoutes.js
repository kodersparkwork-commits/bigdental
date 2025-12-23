const express = require('express');
const router = express.Router();
const { registerClinic, authClinic, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { upload } = require('../config/cloudinary');

// Register Route with File Upload
router.post('/register', upload.fields([
    { name: 'councilCertificate', maxCount: 1 },
    { name: 'clinicPhotos', maxCount: 5 }
]), registerClinic);

// Admin Registration (API Only)
const { registerAdmin } = require('../controllers/authController');
router.post('/admin/register', registerAdmin);

// Login Route
router.post('/login', authClinic);

router.get('/me', protect, getMe);

module.exports = router;
