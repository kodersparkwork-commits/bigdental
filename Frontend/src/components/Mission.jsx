import React from 'react';
import { motion } from 'framer-motion';
import { Search, Activity } from 'lucide-react';

const Mission = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute left-0 top-1/4 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-4 text-center mb-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-gray-900"
                >
                    Spreading <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Smiles</span> Across India
                </motion.h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="h-1 w-24 bg-blue-600 mx-auto mt-4 rounded-full"
                />
            </div>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                    transition={{ duration: 0.4 }}
                    className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-3xl border border-blue-100 shadow-sm text-center group cursor-pointer"
                >
                    <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                        <Search className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Find Dentist Near You</h3>
                    <p className="text-gray-500 mb-8">Locate our nearest clinic from 3000+ locations across the country.</p>
                    <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105">
                        Search Location
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                    transition={{ duration: 0.4 }}
                    className="bg-gradient-to-br from-teal-50 to-white p-10 rounded-3xl border border-teal-100 shadow-sm text-center group cursor-pointer"
                >
                    <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500 transition-colors duration-300">
                        <Activity className="w-10 h-10 text-teal-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">Find by Treatment</h3>
                    <p className="text-gray-500 mb-8">Explore our wide range of dental procedures and specialties.</p>
                    <button className="bg-white text-teal-600 border-2 border-teal-500 px-8 py-3 rounded-full font-bold hover:bg-teal-500 hover:text-white transition-all transform hover:scale-105">
                        View Treatments
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Mission;
