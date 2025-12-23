import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Calendar, Navigation, Search } from 'lucide-react';
import { motion } from 'framer-motion';
// Import the generated image. In a real scenario, this would be moved to the public/assets folder.
// Since we are referencing the artifact directly:
import NoResultsImage from '../assets/no_clinics_found.png';

const FindDentistPage = () => {
    const [location, setLocation] = useState(null);
    const [clinics, setClinics] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    // Initial load: Try to get location, but don't block if user denies
    useEffect(() => {
        // We can start with empty or ask for location. 
        // Let's ask for location initially as "Near You" is the primary feature.
        detectLocation();
    }, []);

    const detectLocation = () => {
        setLoading(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                    fetchClinics({ latitude, longitude });
                },
                (err) => {
                    setLoading(false);
                    // Just show empty state or handle error silently if we want them to use search bar
                    // setError("Location access denied. Please use the search bar.");
                    console.warn("Geolocation denied or error:", err);
                }
            );
        } else {
            setLoading(false);
            // setError("Geolocation is not supported by your browser.");
        }
    };

    const handleSearch = () => {
        fetchClinics({ search: searchQuery });
    };

    const fetchClinics = async ({ latitude, longitude, search }) => {
        setLoading(true);
        setError(null);
        try {
            let url = `${import.meta.env.VITE_API_URL}/api/clinics/nearest?`;

            if (search) {
                url += `search=${encodeURIComponent(search)}`;
            } else if (latitude && longitude) {
                url += `latitude=${latitude}&longitude=${longitude}&maxDistance=30000`; // 30km
            } else {
                // If neither, effectively clear or show all? 
                // Let's stop if nothing is provided
                setLoading(false);
                return;
            }

            const res = await fetch(url);
            const data = await res.json();

            if (res.ok) {
                // Calculate distance manually if we have user location, even for search results
                let processedClinics = data;

                if (location || (latitude && longitude)) {
                    const userLat = latitude || location.latitude;
                    const userLng = longitude || location.longitude;

                    processedClinics = data.map(clinic => {
                        // Only calc if clinic has valid coords
                        if (clinic.location && clinic.location.coordinates) {
                            const distance = getDistanceFromLatLonInKm(userLat, userLng, clinic.location.coordinates[1], clinic.location.coordinates[0]);
                            return { ...clinic, distance: distance.toFixed(1) };
                        }
                        return { ...clinic, distance: 'N/A' };
                    });

                    // If it was a search, sort by distance locally if convenient? 
                    // Or keep text relevance. Let's sort by distance if available.
                    processedClinics.sort((a, b) => {
                        if (a.distance === 'N/A') return 1;
                        if (b.distance === 'N/A') return -1;
                        return parseFloat(a.distance) - parseFloat(b.distance);
                    });
                }

                setClinics(processedClinics);
            } else {
                setError(data.message || "Failed to fetch clinics.");
                setClinics([]);
            }
        } catch (err) {
            console.error("Fetch error:", err);
            setError("Error connecting to server.");
        } finally {
            setLoading(false);
        }
    };

    // Haversine formula to calculate distance
    const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    const deg2rad = (deg) => {
        return deg * (Math.PI / 180)
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-28 pb-12 px-6 font-sans">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Find a Dentist</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                        Search for top-rated dental professionals by name, location, or specialization.
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-xl mx-auto mb-10">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg shadow-blue-500/5 transition-all"
                            placeholder="Try 'Orthodontist', 'Dr. Smith', or 'Hyderabad'..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        />
                        <button
                            onClick={handleSearch}
                            className="absolute inset-y-2 right-2 px-6 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-black transition-colors"
                        >
                            Search
                        </button>
                    </div>

                    {!location && !searchQuery && (
                        <button
                            onClick={detectLocation}
                            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
                        >
                            <MapPin size={18} /> Use my current location
                        </button>
                    )}
                </div>

                {loading && (
                    <div className="flex flex-col items-center justify-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                        <p className="text-slate-500 animate-pulse">Searching...</p>
                    </div>
                )}

                {error && (
                    <div className="bg-red-50 text-red-600 p-6 rounded-2xl border border-red-100 text-center">
                        <p className="font-bold">{error}</p>
                    </div>
                )}

                {/* No Results State with Image */}
                {!loading && !error && clinics.length === 0 && (
                    <div className="bg-white p-12 rounded-3xl shadow-xl shadow-slate-200/50 text-center border border-slate-100 flex flex-col items-center">
                        <img
                            src={NoResultsImage}
                            alt="No Clinics Found"
                            className="w-64 h-64 object-contain mb-6 drop-shadow-md"
                        />
                        <h3 className="text-2xl font-extrabold text-slate-900 mb-2">No Clinics Found</h3>
                        <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
                            We couldn't find any clinics matching your search.
                            Try using different keywords or "Use my current location".
                        </p>
                    </div>
                )}

                <div className="grid gap-6">
                    {clinics.map((clinic) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            key={clinic._id}
                            className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:border-blue-100 transition-all group"
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                                <div className="space-y-4 flex-1">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                {clinic.clinicName}
                                            </h2>
                                            <p className="text-slate-500 font-medium">Dr. {clinic.fullName} <span className="text-slate-300">•</span> {clinic.specialization || 'Dentist'}</p>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold">
                                            <Navigation size={14} />
                                            {clinic.distance} km
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 text-slate-600">
                                        <MapPin className="shrink-0 mt-1 text-slate-400" size={18} />
                                        <p>{clinic.address}, {clinic.district}, {clinic.state} - {clinic.pincode}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-4 pt-2">
                                        <div className="flex items-center gap-2 text-sm font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg">
                                            <Calendar size={16} className="text-blue-500" />
                                            {clinic.days.from} - {clinic.days.to}
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-medium text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg">
                                            <ClockIcon size={16} className="text-amber-500" />
                                            {clinic.timings.from} - {clinic.timings.to}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <a
                                        href={`tel:${clinic.contactPhone}`}
                                        className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-black transition-colors shadow-lg shadow-slate-900/20"
                                    >
                                        <Phone size={18} /> Call Now
                                    </a>
                                    <a
                                        href={`https://www.google.com/maps/dir/?api=1&destination=${clinic.location.coordinates[1]},${clinic.location.coordinates[0]}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-colors"
                                    >
                                        <Navigation size={18} /> Get Directions
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Start Icon helper
const ClockIcon = ({ size, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

export default FindDentistPage;
