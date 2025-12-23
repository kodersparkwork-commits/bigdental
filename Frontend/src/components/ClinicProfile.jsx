import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Edit2, Save, X } from 'lucide-react';

const ClinicProfile = () => {
    const { user, login } = useAuth(); // We might need a refresh function instead of login
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/clinics/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await res.json();
            if (res.ok) {
                setProfileData(data);
            }
        } catch (error) {
            console.error("Error fetching profile", error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/clinics/profile`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(profileData)
            });
            const data = await res.json();
            if (res.ok) {
                setIsEditing(false);
                alert("Profile Updated Successfully!");
                fetchProfile(); // Refresh data
            } else {
                alert(data.message || "Update Failed");
            }
        } catch (error) {
            console.error("Error updating profile", error);
            alert("Update Failed");
        }
    };

    if (loading) return <div className="p-8 text-center">Loading...</div>;

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-12 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-slate-900 p-8 flex justify-between items-center text-white">
                    <div>
                        <h1 className="text-3xl font-bold font-heading">{profileData.clinicName}</h1>
                        <p className="opacity-80">Profile Management</p>
                    </div>
                    {!isEditing ? (
                        <button onClick={() => setIsEditing(true)} className="flex items-center gap-2 bg-blue-600 px-6 py-2.5 rounded-xl hover:bg-blue-700 transition-colors font-bold">
                            <Edit2 size={18} /> Edit Profile
                        </button>
                    ) : (
                        <button onClick={() => setIsEditing(false)} className="flex items-center gap-2 bg-slate-700 px-6 py-2.5 rounded-xl hover:bg-slate-600 transition-colors font-bold">
                            <X size={18} /> Cancel
                        </button>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Basic Info */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Basic Information</h3>
                            <InputField label="Full Name" name="fullName" value={profileData.fullName} onChange={handleInputChange} disabled={!isEditing} />
                            <InputField label="Clinic Name" name="clinicName" value={profileData.clinicName} onChange={handleInputChange} disabled={!isEditing} />
                            <div className="grid grid-cols-3 gap-4">
                                <InputField label="Age" name="age" type="number" value={profileData.age} onChange={handleInputChange} disabled={!isEditing} />
                                <div className="col-span-2">
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Sex</label>
                                    <select
                                        name="sex"
                                        value={profileData.sex}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none bg-slate-50 disabled:opacity-70"
                                    >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Contact Details</h3>
                            <InputField label="Contact Email" name="contactEmail" type="email" value={profileData.contactEmail} onChange={handleInputChange} disabled={!isEditing} />
                            <InputField label="Contact Phone" name="contactPhone" type="tel" value={profileData.contactPhone} onChange={handleInputChange} disabled={!isEditing} />
                            <InputField label="Website" name="website" type="url" value={profileData.website} onChange={handleInputChange} disabled={!isEditing} />
                        </div>

                        {/* Address */}
                        <div className="md:col-span-2 space-y-4">
                            <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Location</h3>
                            <InputField label="Address" name="address" value={profileData.address} onChange={handleInputChange} disabled={!isEditing} />
                            <div className="grid grid-cols-3 gap-4">
                                <InputField label="State" name="state" value={profileData.state} onChange={handleInputChange} disabled={!isEditing} />
                                <InputField label="District" name="district" value={profileData.district} onChange={handleInputChange} disabled={!isEditing} />
                                <InputField label="Pincode" name="pincode" value={profileData.pincode} onChange={handleInputChange} disabled={!isEditing} />
                            </div>
                        </div>

                        {/* Professional Info */}
                        <div className="md:col-span-2 space-y-4">
                            <h3 className="text-lg font-bold text-slate-800 border-b pb-2">Professional Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <InputField label="Council Name" name="councilName" value={profileData.councilName} onChange={handleInputChange} disabled={!isEditing} />
                                <InputField label="Council Number" name="councilNumber" value={profileData.councilNumber} onChange={handleInputChange} disabled={!isEditing} />
                                <InputField label="Specialization" name="specialization" value={profileData.specialization} onChange={handleInputChange} disabled={!isEditing} />
                            </div>
                        </div>
                    </div>

                    {isEditing && (
                        <div className="mt-8 flex justify-end">
                            <button type="submit" className="flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-200">
                                <Save size={20} /> Save Changes
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

const InputField = ({ label, name, type = "text", value, onChange, disabled }) => (
    <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">{label}</label>
        <input
            type={type}
            name={name}
            value={value || ''}
            onChange={onChange}
            disabled={disabled}
            className={`w-full px-4 py-3 rounded-xl border border-slate-200 outline-none transition-all ${disabled ? 'bg-slate-100 text-slate-500' : 'bg-slate-50 focus:bg-white focus:border-blue-500 ring-4 ring-transparent focus:ring-blue-500/10'}`}
        />
    </div>
);

export default ClinicProfile;
