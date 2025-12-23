const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const clinicSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    age: { type: Number },
    sex: { type: String },
    dob: { type: Date },
    clinicName: { type: String },
    address: { type: String },
    state: { type: String },
    district: { type: String },
    pincode: { type: String },
    timings: {
        from: { type: String },
        to: { type: String }
    },
    days: {
        from: { type: String },
        to: { type: String }
    },
    website: { type: String },
    contactEmail: { type: String },
    contactPhone: { type: String },
    email: { type: String, required: true, unique: true }, // loginEmail
    password: { type: String, required: true },
    councilName: { type: String },
    councilNumber: { type: String },
    specialization: { type: String },
    councilCertificate: { type: String }, // Cloudinary URL
    clinicPhotos: [{ type: String }], // Cloudinary URLs
    location: {
        type: {
            type: String,
            enum: ['Point'],
            // default: 'Point' - Removed to prevent invalid empty location objects
        },
        coordinates: {
            type: [Number],
            index: '2dsphere' // Important for geospatial queries
        }
    },
    isVerified: { type: Boolean, default: false },
    role: { type: String, enum: ['clinic', 'admin'], default: 'clinic' }
}, {
    timestamps: true
});

// Encrypt password before saving
clinicSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Match user password to hashed password in database
clinicSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const Clinic = mongoose.model('Clinic', clinicSchema);

module.exports = Clinic;
