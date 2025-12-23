import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Check, X, Shield, Search, Users, Clock, Activity, ChevronRight, Eye, FileText, MapPin, Calendar, Phone, Mail, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminDashboard = () => {
    const [clinics, setClinics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedClinic, setSelectedClinic] = useState(null); // For Modal

    useEffect(() => {
        fetchClinics();
    }, []);

    const fetchClinics = async () => {
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/clinics`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            const data = await res.json();
            if (res.ok) {
                setClinics(data);
            }
        } catch (error) {
            console.error("Error fetching clinics", error);
        } finally {
            setLoading(false);
        }
    };

    const handleApprove = async (id) => {
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/clinics/${id}/approve`, {
                method: 'PUT',
                headers: { Authorization: `Bearer ${token}` }
            });
            if (res.ok) {
                setClinics(clinics.map(c => c._id === id ? { ...c, isVerified: true } : c));
                if (selectedClinic && selectedClinic._id === id) {
                    setSelectedClinic({ ...selectedClinic, isVerified: true });
                }
            } else {
                alert("Approval Failed");
            }
        } catch (error) {
            console.error("Error approving clinic", error);
        }
    };

    const filteredClinics = clinics.filter(clinic =>
        clinic.clinicName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        clinic.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        clinic.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Stats
    const totalClinics = clinics.length;
    const pendingClinics = clinics.filter(c => !c.isVerified).length;
    const verifiedClinics = clinics.filter(c => c.isVerified).length;

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 p-6 md:p-12 md:pt-28 font-sans">
            <div className="max-w-7xl mx-auto space-y-8 mt-20 md:mt-0">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200 pb-8">
                    <div>
                        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Admin Overview</h1>
                        <p className="text-slate-500 mt-2 text-lg">Manage clinic registrations and verify certificates.</p>
                    </div>
                    <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 ring-1 ring-slate-900/5">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm font-semibold text-slate-600">System Active</span>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard
                        title="Total Clinics"
                        value={totalClinics}
                        icon={<Users className="text-blue-600" size={24} />}
                        bg="bg-blue-50"
                        border="border-blue-100"
                    />
                    <StatCard
                        title="Pending Verification"
                        value={pendingClinics}
                        icon={<Clock className="text-amber-600" size={24} />}
                        bg="bg-amber-50"
                        border="border-amber-100"
                    />
                    <StatCard
                        title="Verified Partners"
                        value={verifiedClinics}
                        icon={<Check className="text-green-600" size={24} />}
                        bg="bg-green-50"
                        border="border-green-100"
                    />
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                    {/* Table Header / Toolbar */}
                    <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50">
                        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                            <Activity size={20} className="text-slate-400" />
                            Recent Registrations
                        </h2>
                        <div className="relative w-full md:w-96 group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                            <input
                                type="text"
                                placeholder="Search by name, email or clinic..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                                    <th className="px-8 py-5">Clinic Details</th>
                                    <th className="px-8 py-5">Contact Info</th>
                                    <th className="px-8 py-5">Status</th>
                                    <th className="px-8 py-5 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredClinics.map((clinic) => (
                                    <tr
                                        key={clinic._id}
                                        className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                                        onClick={() => setSelectedClinic(clinic)}
                                    >
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/20">
                                                    {clinic.clinicName ? clinic.clinicName.charAt(0) : '?'}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{clinic.clinicName || 'Unnamed Clinic'}</div>
                                                    <div className="text-sm text-slate-500">Dr. {clinic.fullName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="text-sm font-medium text-slate-700">{clinic.email}</div>
                                            <div className="text-sm text-slate-500">{clinic.contactPhone}</div>
                                        </td>
                                        <td className="px-8 py-6">
                                            {clinic.isVerified ? (
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-100 ring-1 ring-green-500/10">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Verified
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-100 ring-1 ring-amber-500/10">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> Pending
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <button
                                                className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors"
                                                onClick={(e) => { e.stopPropagation(); setSelectedClinic(clinic); }}
                                            >
                                                <Eye size={16} /> View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Clinic Details Modal */}
            <AnimatePresence>
                {selectedClinic && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
                        onClick={() => setSelectedClinic(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden my-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="p-8 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">{selectedClinic.clinicName}</h2>
                                    <p className="text-slate-500 mt-1 flex items-center gap-2">
                                        <MapPin size={16} /> {selectedClinic.address}, {selectedClinic.district}, {selectedClinic.state}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedClinic(null)}
                                    className="p-2 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-colors text-slate-500 hover:text-red-500"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4">Doctor Details</h3>

                                    <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                                                <User size={20} />
                                            </div>
                                            <div>
                                                <div className="text-sm text-slate-500 font-semibold">Doctor Name</div>
                                                <div className="text-lg font-bold text-slate-800">{selectedClinic.fullName}</div>
                                                <div className="text-sm text-slate-600 mt-1">{selectedClinic.specialization || "General Dentist"}</div>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                                                <FileText size={20} />
                                            </div>
                                            <div>
                                                <div className="text-sm text-slate-500 font-semibold">Registration</div>
                                                <div><span className="font-semibold">Council:</span> {selectedClinic.councilName}</div>
                                                <div><span className="font-semibold">Number:</span> {selectedClinic.councilNumber}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="font-bold text-slate-900">Contact Information</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-4 rounded-xl border border-slate-100 flex items-center gap-3">
                                                <Phone className="text-green-500" size={18} />
                                                <span className="font-medium text-slate-700">{selectedClinic.contactPhone}</span>
                                            </div>
                                            <div className="p-4 rounded-xl border border-slate-100 flex items-center gap-3 overflow-hidden">
                                                <Mail className="text-blue-500" size={18} />
                                                <span className="font-medium text-slate-700 truncate" title={selectedClinic.email}>{selectedClinic.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2 mb-4">Certificates & Proofs</h3>

                                    {selectedClinic.councilCertificate ? (
                                        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm group relative">
                                            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold">
                                                Council Certificate
                                            </div>
                                            <img
                                                src={selectedClinic.councilCertificate}
                                                alt="Council Certificate"
                                                className="w-full h-64 object-cover object-top hover:object-contain bg-slate-100 transition-all duration-300"
                                            />
                                        </div>
                                    ) : (
                                        <div className="h-48 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400">
                                            <FileText size={32} className="mb-2" />
                                            <p>No Certificate Uploaded</p>
                                        </div>
                                    )}

                                    {/* Action Footer in Modal */}
                                    <div className="pt-4 flex gap-4">
                                        {!selectedClinic.isVerified ? (
                                            <button
                                                onClick={() => handleApprove(selectedClinic._id)}
                                                className="flex-1 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-black transition-all shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2"
                                            >
                                                <Check size={20} /> Approve Registration
                                            </button>
                                        ) : (
                                            <div className="flex-1 bg-green-50 text-green-700 py-4 rounded-xl font-bold border border-green-200 flex items-center justify-center gap-2">
                                                <Check size={20} /> Already Verified
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const StatCard = ({ title, value, icon, bg, border }) => (
    <motion.div
        whileHover={{ y: -4 }}
        className={`p-6 rounded-3xl bg-white border ${border} shadow-sm relative overflow-hidden group`}
    >
        <div className={`absolute top-0 right-0 w-24 h-24 ${bg} rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 opacity-50`}></div>
        <div className="relative">
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl ${bg}`}>{icon}</div>
            </div>
            <div className="text-3xl font-black text-slate-900 mb-1">{value}</div>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-wide">{title}</div>
        </div>
    </motion.div>
);

export default AdminDashboard;
