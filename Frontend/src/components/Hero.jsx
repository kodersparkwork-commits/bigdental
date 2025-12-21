import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-slate-50 overflow-hidden flex items-center pt-20">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-teal-100 rounded-full blur-3xl opacity-50"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6"
                        >
                            <span className="text-blue-600 font-semibold text-sm flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
                                No. 1 Dental Chain in India
                            </span>
                        </motion.div>

                        <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6 text-gray-900">
                            <span className="block">Big Dental</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                                Big Smiles
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Experience world-class dental care with the largest network of clinics across the nation. Affordable, accessible, and premium care for everyone.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group"
                            >
                                Book Consultation <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-gray-800 border border-gray-200 px-8 py-4 rounded-xl font-bold shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                            >
                                Find Clinic
                            </motion.button>
                        </div>

                        <div className="flex items-center gap-6 text-sm font-medium text-gray-500">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-teal-500 w-5 h-5" /> 3000+ Clinics
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-teal-500 w-5 h-5" /> 10,000+ Doctors
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="http://bigdental.org/wp-content/uploads/2024/05/dental-1.jpg"
                                alt="Happy Patient"
                                className="w-full h-auto object-cover"
                            />
                            {/* Floating Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-green-100 p-3 rounded-full">
                                        <span className="text-2xl">😊</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">98% Satisfaction</p>
                                        <p className="text-sm text-gray-500">Based on patient reviews</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Dots */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pattern-dots opacity-20 transform rotate-12"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
