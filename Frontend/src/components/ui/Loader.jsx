import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-slate-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                {/* Pulsing Background */}
                <div className="absolute inset-0 bg-sky-200/50 rounded-full blur-3xl animate-pulse"></div>

                {/* Logo/Icon */}
                <div className="relative w-24 h-24 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-sky-500/30 mb-8 mx-auto">
                    <span className="text-5xl font-bold text-white font-heading">B</span>
                </div>

                {/* Text Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold text-slate-800 font-heading mb-2">
                        Loading Amazing Experience
                    </h2>
                    <div className="flex justify-center gap-1">
                        {[0, 1, 2].map((i) => (
                            <motion.span
                                key={i}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                className="text-3xl font-bold text-sky-500"
                            >
                                .
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Loader;
