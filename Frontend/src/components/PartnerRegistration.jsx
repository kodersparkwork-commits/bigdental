import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Upload, Calendar, ChevronDown, Check, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

// Fix for default marker icon in React-Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const PartnerRegistration = () => {
    const navigate = useNavigate();
    const [showTerms, setShowTerms] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        sex: '',
        dob: '',
        clinicName: '',
        address: '',
        state: '',
        district: '',
        pincode: '',
        timingsFrom: '',
        timingsTo: '',
        daysFrom: '',
        daysTo: '',
        website: '',
        contactEmail: '',
        contactPhone: '',
        loginEmail: '',
        password: '',
        councilName: '',
        latitude: '',
        longitude: '',
        councilCertificate: null,
        clinicPhotos: [],
        acceptedTerms: false
    });

    const specializationOptions = [
        "General Dentist",
        "Orthodontist",
        "Periodontist",
        "Endodontist",
        "Prosthodontist",
        "Pedodontist",
        "Oral Surgeon"
    ];

    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'file') {
            if (name === 'clinicPhotos') {
                setFormData(prev => ({ ...prev, [name]: Array.from(files) }));
            } else {
                setFormData(prev => ({ ...prev, [name]: files[0] }));
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const LocationMarker = () => {
        const map = useMapEvents({
            click(e) {
                setFormData(prev => ({
                    ...prev,
                    latitude: e.latlng.lat,
                    longitude: e.latlng.lng
                }));
            },
        });

        useEffect(() => {
            if (!formData.latitude && !formData.longitude && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        setFormData(prev => ({
                            ...prev,
                            latitude,
                            longitude
                        }));
                        map.flyTo([latitude, longitude], 13);
                    },
                    (error) => {
                        console.error("Error getting location detected:", error);
                    }
                );
            }
        }, [map]);

        return formData.latitude && formData.longitude ? (
            <Marker position={[formData.latitude, formData.longitude]} />
        ) : null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const lat = parseFloat(formData.latitude);
        const lng = parseFloat(formData.longitude);

        if (isNaN(lat) || isNaN(lng)) {
            alert("Please detect your clinic location using the map.");
            return;
        }

        const data = new FormData();
        Object.keys(formData).forEach(key => {
            if (key === 'clinicPhotos') {
                formData.clinicPhotos.forEach(file => data.append('clinicPhotos', file));
            } else if (key === 'councilCertificate') {
                if (formData.councilCertificate) data.append('councilCertificate', formData.councilCertificate);
            } else {
                data.append(key, formData[key]);
            }
        });

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                body: data
            });

            const result = await response.json();

            if (response.ok) {
                alert('Registration Successful! Please Login.');
                console.log(result);
                navigate('/');
            } else {
                alert(result.message || 'Registration Failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-body py-20">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Header Card */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-t-3xl p-8 text-white relative overflow-hidden shadow-xl"
                >
                    <Link to="/franchise" className="absolute top-8 left-8 text-white/80 hover:text-white transition-colors">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="mt-8">
                        <h1 className="text-3xl font-bold font-heading">Clinic Registration</h1>
                    </div>
                </motion.div>

                {/* Form Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-b-3xl shadow-xl p-8 md:p-12 border border-t-0 border-slate-100"
                >
                    <form onSubmit={handleSubmit} className="space-y-12">

                        {/* Personal Details */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
                                <h2 className="text-2xl font-bold text-slate-800 font-heading">Personal Details</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-700">Full Name *</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Responsible person / Doctor name"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-700">Age *</label>
                                    <input
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleInputChange}
                                        placeholder="Age"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-700">Sex *</label>
                                    <div className="relative">
                                        <select
                                            name="sex"
                                            value={formData.sex}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white appearance-none"
                                            required
                                        >
                                            <option value="">Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-700">Date of Birth *</label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            name="dob"
                                            value={formData.dob}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                            required
                                        />
                                        <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Business Details */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-1.5 h-8 bg-green-600 rounded-full"></div>
                                <h2 className="text-2xl font-bold text-slate-800 font-heading">Business Details</h2>
                            </div>

                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-700">Clinic Name *</label>
                                    <input
                                        type="text"
                                        name="clinicName"
                                        value={formData.clinicName}
                                        onChange={handleInputChange}
                                        placeholder="Clinic / Practice name"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-700">Address *</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        placeholder="Full address"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-slate-700">State *</label>
                                        <div className="relative">
                                            <select
                                                name="state"
                                                value={formData.state}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white appearance-none"
                                                required
                                            >
                                                <option value="">Select state</option>
                                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                <option value="Telangana">Telangana</option>
                                                <option value="Karnataka">Karnataka</option>
                                                <option value="Tamil Nadu">Tamil Nadu</option>
                                                {/* Add more states */}
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-slate-700">District *</label>
                                        <input
                                            type="text"
                                            name="district"
                                            value={formData.district}
                                            onChange={handleInputChange}
                                            placeholder="District"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-slate-700">Pincode *</label>
                                        <input
                                            type="text"
                                            name="pincode"
                                            value={formData.pincode}
                                            onChange={handleInputChange}
                                            placeholder="Pin / ZIP code"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-700">Clinic Location *</label>
                                    <div className="h-[300px] w-full rounded-xl overflow-hidden border border-slate-200 z-0">
                                        <MapContainer
                                            center={[20.5937, 78.9629]}
                                            zoom={5}
                                            scrollWheelZoom={true}
                                            style={{ height: '100%', width: '100%' }}
                                        >
                                            <TileLayer
                                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            />
                                            <LocationMarker />
                                        </MapContainer>
                                    </div>

                                    {(formData.latitude && formData.longitude) ? (
                                        <span className="text-sm text-green-600 font-medium flex items-center gap-1 mt-2">
                                            <Check className="w-4 h-4" /> Location Selected: {formData.latitude.toFixed(4)}, {formData.longitude.toFixed(4)}
                                        </span>
                                    ) : (
                                        <span className="text-sm text-slate-500 mt-2 block">
                                            Click on the map to pin your clinic location.
                                        </span>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-slate-700">Available Timings *</label>
                                        <div className="flex gap-4">
                                            <select
                                                name="timingsFrom"
                                                value={formData.timingsFrom}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white appearance-none"
                                            >
                                                <option value="">From</option>
                                                <option value="9:00 AM">9:00 AM</option>
                                                <option value="10:00 AM">10:00 AM</option>
                                            </select>
                                            <select
                                                name="timingsTo"
                                                value={formData.timingsTo}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white appearance-none"
                                            >
                                                <option value="">To</option>
                                                <option value="5:00 PM">5:00 PM</option>
                                                <option value="6:00 PM">6:00 PM</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-slate-700">Available Days *</label>
                                        <div className="flex gap-4">
                                            <select
                                                name="daysFrom"
                                                value={formData.daysFrom}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white appearance-none"
                                            >
                                                <option value="">From</option>
                                                <option value="Monday">Monday</option>
                                            </select>
                                            <select
                                                name="daysTo"
                                                value={formData.daysTo}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white appearance-none"
                                            >
                                                <option value="">To</option>
                                                <option value="Saturday">Saturday</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-700">Website</label>
                                    <input
                                        type="url"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleInputChange}
                                        placeholder="https://"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Contact & Login */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-1.5 h-8 bg-purple-600 rounded-full"></div>
                                <h2 className="text-2xl font-bold text-slate-800 font-heading">Contact & Login Information</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-700">Contact Email *</label>
                                    <input
                                        type="email"
                                        name="contactEmail"
                                        value={formData.contactEmail}
                                        onChange={handleInputChange}
                                        placeholder="contact@you.com"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-700">Contact Phone *</label>
                                    <input
                                        type="tel"
                                        name="contactPhone"
                                        value={formData.contactPhone}
                                        onChange={handleInputChange}
                                        placeholder="Phone number"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-700">Login Email *</label>
                                    <input
                                        type="email"
                                        name="loginEmail"
                                        value={formData.loginEmail}
                                        onChange={handleInputChange}
                                        placeholder="email@domain.com"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-700">Password *</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Minimum 6 characters"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                        required
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Registration Details */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-1.5 h-8 bg-orange-600 rounded-full"></div>
                                <h2 className="text-2xl font-bold text-slate-800 font-heading">Registration Details</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-700">Registering Authority / Council Name *</label>
                                    <input
                                        type="text"
                                        name="councilName"
                                        value={formData.councilName}
                                        onChange={handleInputChange}
                                        placeholder="Council or authority"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-700">Registration / Council Number *</label>
                                    <input
                                        type="text"
                                        name="councilNumber"
                                        value={formData.councilNumber}
                                        onChange={handleInputChange}
                                        placeholder="Registration number"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-slate-700">Specialization *</label>
                                <div className="relative">
                                    <select
                                        name="specialization"
                                        value={formData.specialization}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-slate-50 focus:bg-white appearance-none"
                                        required
                                    >
                                        <option value="">Select specialization</option>
                                        {specializationOptions.map((opt, i) => (
                                            <option key={i} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                </div>
                            </div>
                        </section>

                        {/* Document Uploads */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-1.5 h-8 bg-red-600 rounded-full"></div>
                                <h2 className="text-2xl font-bold text-slate-800 font-heading">Document Uploads</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-700">Council Certificate (Required)</label>
                                    <div className="relative border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer group">
                                        <div className="w-12 h-12 rounded-full bg-slate-100 mx-auto flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                            <Upload className="w-6 h-6 text-slate-400 group-hover:text-blue-600" />
                                        </div>
                                        <p className="text-slate-600 text-sm">Click to upload certificate</p>
                                        <input
                                            type="file"
                                            name="councilCertificate"
                                            onChange={handleInputChange}
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                            accept="image/*,application/pdf"
                                        />
                                    </div>
                                    {formData.councilCertificate && <p className="text-sm text-green-600 mt-2">{formData.councilCertificate.name}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-slate-700">Clinic Photos (Required - you may upload multiple)</label>
                                    <div className="relative border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer group">
                                        <div className="w-12 h-12 rounded-full bg-slate-100 mx-auto flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                            <Upload className="w-6 h-6 text-slate-400 group-hover:text-blue-600" />
                                        </div>
                                        <p className="text-slate-600 text-sm">Click to upload available photos</p>
                                        <input
                                            type="file"
                                            name="clinicPhotos"
                                            onChange={handleInputChange}
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                            multiple
                                            accept="image/*"
                                        />
                                    </div>
                                    {formData.clinicPhotos.length > 0 && <p className="text-sm text-green-600 mt-2">{formData.clinicPhotos.length} files selected</p>}
                                </div>
                            </div>
                        </section>



                        {/* Terms */}
                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        name="acceptedTerms"
                                        checked={formData.acceptedTerms}
                                        onChange={handleInputChange}
                                        className="peer w-6 h-6 border-2 border-slate-300 rounded-md checked:bg-blue-600 checked:border-blue-600 appearance-none transition-colors"
                                    />
                                    <Check className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                                </div>
                                <span className="text-slate-700 font-medium">I accept the <button type="button" onClick={() => setShowTerms(true)} className="text-blue-600 underline font-bold">Terms and Conditions</button></span>
                            </label>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col md:flex-row gap-4 pt-4">
                            <button type="submit" className="flex-1 bg-violet-400 text-white py-4 rounded-xl font-bold text-lg hover:bg-violet-500 transition-colors shadow-lg shadow-violet-200">
                                Submit Registration
                            </button>
                            <button type="reset" className="md:w-auto px-8 py-4 rounded-xl font-bold text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors">
                                Reset Form
                            </button>
                        </div>

                    </form>
                </motion.div>
            </div>

            {/* Terms Modal */}
            {showTerms && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
                    >
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                            <h3 className="text-xl font-bold text-slate-800 font-heading">Terms and Conditions</h3>
                            <button
                                onClick={() => setShowTerms(false)}
                                className="p-2 hover:bg-slate-200 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-slate-500" />
                            </button>
                        </div>

                        <div className="p-8 overflow-y-auto space-y-6 text-slate-600 text-sm leading-relaxed">
                            <p className="font-bold text-slate-800">ADDITIONAL TERMS OF USE FOR MCPs</p>
                            <p>These terms and conditions specific to MCPs ("MCP Terms") form a legally binding agreement between MEDICOSTSAVER, india ("We" or "Us" or Our or "MEDICOSTSAVER" or "Company"), having its registered office Hyderabad, india and You ("You" or "Your"), as an MCP User of Our Website, System and Services.</p>
                            <p>You and We are hereinafter collectively referred to as the "Parties".</p>
                            <p>By clicking "sign up" or "start my free trial" or "get started for free" or the 'I accept' tab at the time of registration, or by entering into an agreement with MEDICOSTSAVER to provide committed services as set out in these MCP Terms, or through the continued use of the System and/or Services, or by Accessing the System and/or Services through any medium, including but not limited to accessing the System through mobile phones, smart phones and tablets, You agree to be subject to these MCP Terms.</p>
                            <p>We request You to please read these MCP Terms carefully and do not click "sign up" or "start my free trial" or "get started for free" "I accept" or continue the use of the Website, System and Service unless You agree fully with these MCP Terms.</p>
                            <p>These MCP Terms are in addition to the Terms of Use of the Website available at https://www.medicostsaver.com/terms, the Privacy Policy https://www.medicostsaver.com/privacy and any other policy which may govern the use of the Website, System and Services (referred to as the "Other Terms" and collectively with the MCP Terms referred to as "Agreement")</p>

                            <h4 className="font-bold text-slate-800 text-lg mt-6">1. Definitions</h4>
                            <p>As used in these MCP Terms, the following terms shall have the meaning set forth below:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>"Account" means credit or debit balance maintained by You with the Website;</li>
                                <li>"Effective Date" means the Date on which You accept these MCP Terms by clicking 'Sign Up' or "start my free trial" or "get started for free" or 'I Accept';</li>
                                <li>"User Information" means information regarding Registered Users/Members which includes personal and medical information and any other information which may be provided by a Registered Users/Members to You or may be transferred to You by MEDICOSTSAVER;</li>
                                <li>"Services" means the services offered to You by MEDICOSTSAVER that involves use of the System, which may include the practice management service, electronic medical records service and other services as may be introduced by MEDICOSTSAVER from time to time;</li>
                                <li>"Website" means www.medicostsaver.com</li>
                                <li>"System" means the technology platform provided as part of the Website consisting of hardware and / or software used or provided by Us for the purpose of providing the Services to You;</li>
                            </ul>
                            <p>All other capitalized terms shall have the meaning ascribed to them in the Other Terms.</p>

                            <h4 className="font-bold text-slate-800 text-lg mt-6">2. Grant of Rights</h4>
                            <p>(i) Subject to the terms of the Agreement, we grant to You and You accept a non-exclusive, personal, non-transferable, limited right to have access to and to use the System for the duration of Your engagement with Us.</p>
                            <p>The aforementioned right does not extend to:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>use the System for time-sharing, rental or service bureau purposes;</li>
                                <li>make the System, in whole or in part, available to any other person, entity or business;</li>
                                <li>modify the contents of the Systems and the Website or use such content for any commercial purpose, or any public display, performance, sale or rental other than envisaged in the Agreement;</li>
                                <li>copy, reverse engineer, decompile or disassemble the System or the Website, in whole or in part, or otherwise attempt to discover the source code to the software used in the System; or</li>
                                <li>modify the System or associated software or combine the System with any other software or services not provided or approved by Us.</li>
                            </ul>
                            <p>You will obtain no rights to the System except for the limited rights to use the System expressly granted by these MCP Terms.</p>
                            <p>(ii) The System/Website may links or references which direct you to third party websites / applications / content or service providers, including advertisers and e-commerce websites (collectively referred to as "Third Party Websites"). Links to such Third Party Websites are provided for your convenience only. Please exercise your independent judgment and prudence when visiting / using any Third Party Websites via a link available on the System / Website. Should You decide to click on the links to visit such Third Party Website, You do so of Your own volition. Your usage of such Third Party Websites and all content available on such Third Party Websites is subject to the terms of use of the respective Third Party Website and we are not responsible for Your use of any Third Party Websites</p>

                            <h4 className="font-bold text-slate-800 text-lg mt-6">3. Implementation Requirements</h4>
                            <p>By accepting these MCP Terms, You agree that:</p>
                            <p>(i) You will acquire, install, configure and maintain all hardware, software and communications systems necessary to access the System ("Implementation") and receive the Services. To the extent possible, such an assessment should be done before making advance payment for the Service. Your Implementation will comply with the specifications from time to time established by Us. You will ensure that Your Implementation is compatible with the System and Services. If We notify You that Your Implementation is incompatible with the System and / or Services, You will rectify such incompatibility, and We will have the right to suspend Services to You until such rectification has been implemented. Under no circumstances will You be eligible for any refund or any financial assistance in relation to Implementation.</p>

                            <h4 className="font-bold text-slate-800 text-lg mt-6">4. Engagement of MCPs by MEDICOSTSAVER</h4>
                            <p>(i) In certain cases, You and MEDICOSTSAVER may agree that You will commit to providing information and responses on the Website for a specific period of time (such as a specific number of hours per day / week/ month). In such a case, while all the terms of the Agreement will continue to apply to You, there may be some additional terms which will apply to You which will be agreed between You and MEDICOSTSAVER.</p>

                            <h4 className="font-bold text-slate-800 text-lg mt-6">5. Access to the System and Use of Services</h4>
                            <p>(i) Verification. You agree that Your receipt of Services is subject to verification by Us of Your identity and credentials as a health care practitioner and to Your ongoing qualification as such. As part of the registration process and at any time thereafter, You may be required to provide Us with various information such as Your Photo Id, Your medical registration details (as recognized by your Medical Council), Your qualifications and other information in order to prove that You are a valid health care practitioner in the field that You claim ("Credential Information"). We may verify such Credential Information or may ask You for additional information. We may also make enquiries from third parties to verify the authenticity of Your Credential Information. You authorize Us to make such enquiries from such third parties, and You agree to hold them and Us harmless from any claim or liability arising from the request for or disclosure of such information. You agree that We may terminate Your access to or use of the System and Services at any time if We are unable at any time to determine or verify Your Credential Information. We reserve the right to carry out re-verification of Credential Information as and when required, and the above rights and commitments will extend to re-verification as well.</p>
                            <p>(ii) Safeguards. You will implement and maintain appropriate administrative, physical and technical safeguards to protect the System from access, use or alteration; and You will always use the User ID assigned to You. You will immediately notify Us of any breach or suspected breach of the security of the System of which You become aware, or any unauthorized use or disclosure of information within or obtained from the System, and You will take such action to mitigate the breach or suspected breach as We may direct, and will cooperate with Us in investigating and mitigating such breach.</p>
                            <p>(iii) No Third-Party Access. You will not permit any third party to have access to the System or to use the System or the Services without Our prior written consent. You will not allow any third party to access the System or provide information to Registered Users/ Non-Registered Users on the Website. You will promptly notify Us of any order or demand for compulsory disclosure of health information if the disclosure requires access to or use of the System or Services.</p>

                            <h4 className="font-bold text-slate-800 text-lg mt-6">6. Compliance</h4>
                            <p>(i) You are solely responsible for ensuring that Your use of the System and the Services complies with applicable law. You will also ensure that Your use of the System, the Website and the Services in always in accordance with the terms of the Agreement. You will not undertake or permit any unlawful use of the System or Services, or take any action that would render the operation or use of the System or Services by us.</p>
                            <p>(ii) Without limiting the generality of the foregoing, You represent that You shall not use the System in violation of any applicable laws including Medical Ethics Regulations or any other code of conduct governed by your council. Notwithstanding the generality of the foregoing, You shall not use the System to:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Interact with a Registered Users at the time of medical emergencies.</li>
                                <li>Discriminate in any way between appointments booked in the ordinary course and appointments booked through MEDICOSTSAVER.</li>
                                <li>Boast of cases, operations, cures or remedies through System, Services or Website.</li>
                                <li>Directly or indirectly solicit Registered Users for consultation.</li>
                                <li>Claim to be a specialist, through System, Services or Website, unless You have a special qualification in that branch.</li>
                                <li>Give any positive assertion or representation regarding the risk-free nature of communicating over online media.</li>
                            </ul>
                            <p>(iii) You shall keep Your Credential Information updated and will inform Us immediately should any portion of Your Credential Information be revoked, is cancelled or expires.</p>

                            <h4 className="font-bold text-slate-800 text-lg mt-6">7. User Information</h4>
                            <p>(i) You hereby acknowledge that You may get access to User Information including identifiable health related information.</p>
                            <p>(ii) You represent and warrant that You will not use the User Information of Registered Users and Non-Registered Users for any other purpose than for providing information to such Registered Users and Non-Registered Users and /or fixing appointments with the Registered Users. You represent and warrant that You will, at all times during the use of the Services and thereafter, comply with all laws directly or indirectly applicable to You that may now or hereafter govern the collection, use, transmission, processing, receipt, reporting, disclosure, maintenance, and storage of User Information, including but not limited to the Information Technology Act, 2000 and The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 made thereunder.</p>
                            <p>(iii) Notwithstanding the generality of the aforementioned provision: You acknowledge that You have read, understood and agree to comply with MEDICOSTSAVER's Privacy Policy available at https://www.medicostsaver.com/privacy when dealing with User Information.</p>

                            <h4 className="font-bold text-slate-800 text-lg mt-6">8. Cooperation</h4>
                            <p>(i) You will cooperate with Us in the administration of the System, including providing reasonable assistance in evaluating the System and collecting and reporting data requested by Us for the purposes of administering the System.</p>
                            <p>(ii) We may provide Your reference to other potential users of the system as a referral to Our Services. In case You would not like to be contacted by potential users, You can send Us an email at medicostsaver@gmail.com regarding the same. We shall cease providing Your reference to potential users within 48 hours of receipt of such written request.</p>

                            <h4 className="font-bold text-slate-800 text-lg mt-6">9. Providing Physician Data</h4>
                            <p>You agree that We may provide de-identified health information and other information including Your personal information and information concerning Your practice to any medical group, independent practice associations, health plan or other organization including any organization with which You have a contract to provide medical services, or to whose members or enrollees You provide dental services. Such information may identify You, but will not identify any individual to whom You provide services. Such information may include (without limitation) aggregate data concerning Your patients, diagnoses, procedures, orders etc.</p>

                            <h4 className="font-bold text-slate-800 text-lg mt-6">10. Intellectual Property Rights</h4>
                            <p>All intellectual property rights in and title to the System, the present or future modifications / upgradations thereof and standard enhancements thereto shall remain the property of MEDICOSTSAVER and its licensors. These MCP Terms or the Agreement do not and shall not transfer any ownership or proprietary interest in the System from MEDICOSTSAVER to You, except as may be otherwise expressly provided in these MCP Terms or as may be agreed to by and between MEDICOSTSAVER and You.</p>

                            <h4 className="font-bold text-slate-800 text-lg mt-6">11. Fees and Charges</h4>
                            <p>You understand that MEDICOSTSAVER provides various Services to its members for free with minimal fees and you agreed to provide those services for free.</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>we wont charge any fees from MCPS for joining as a Provider.</li>
                                <li>You are responsible for any charges you collect it from Users outside the platform (website)</li>
                            </ul>

                            <h4 className="font-bold text-slate-800 text-lg mt-6">12. Confidential Information</h4>
                            <p>(a) You will treat all information received from Us as confidential. You may not disclose Our confidential information to any other person, and You may not use any confidential information except as provided herein. You will disclose confidential information only to your employees, agents or contractors who have a need to use it for the purposes permitted under the MCP Terms and Other Terms only. You will inform all such recipients of the confidential nature of confidential information and will instruct them to deal with confidential information in accordance with these MCP Terms.</p>
                            <p>(b) You agree that We will suffer irreparable harm if You fail to comply with the obligations set forth in this Section 12, and You further agree that monetary damages will be inadequate to compensate Us for any such breach. Accordingly, You agree that We will, in addition to any other remedies available to Us at law or in equity, be entitled to seek injunctive relief to enforce the provisions hereof, immediately and without the necessity of posting a bond.</p>

                            <h4 className="font-bold text-slate-800 text-lg mt-6">13. Disclaimer and Exclusion of Warranties</h4>
                            <p>(b) The services, the website the system, access to the system and the information contained on the system is provided "as is" and "as available" basis without any warranty of any kind, expressed or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
                            <p>(d) We are not responsible for unauthorized access to your, data, facilities or equipment by individuals or entities using the system or for unauthorized access to, alteration, theft. corruption, loss or destruction of your, data files, programs, procedures, or information through the system, whether by accident, fraudulent means or devices, or any other means.</p>

                            <h4 className="font-bold text-slate-800 text-lg mt-6">14. Limitation Of Liability</h4>
                            <p>Notwithstanding the other Terms of these MCP terms, in the event Medicostsaver should have any liability to you or any third party for any loss, harm or damage, you and Medicostsaver agree that such liability shall under no circumstances exceed the value of any fees received by Medicostsaver from you in the preceding twelve months or inr 5000 whichever is lower.</p>

                            <h4 className="font-bold text-slate-800 text-lg mt-6">15. Indemnification</h4>
                            <p>You agree to indemnify, defend, and hold harmless MEDICOSTSAVER, Our and their affiliates, officers, directors, and agents, from and against any claim, cost or liability, including reasonable attorneys' fees, arising out of: (a) the use of the Services; (b) any breach by You of any representations, warranties or agreements contained in these MCP Terms; (c) the actions of any person gaining access to the System under a User ID assigned to You; (d) the actions of anyone using a User ID, password or other unique identifier assigned to You that adversely affects the System or any information accessed through the System;</p>

                            <div className="flex justify-end pt-6">
                                <button
                                    onClick={() => {
                                        setShowTerms(false);
                                        setFormData(prev => ({ ...prev, acceptedTerms: true }));
                                    }}
                                    className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
                                >
                                    I Accept
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default PartnerRegistration;
