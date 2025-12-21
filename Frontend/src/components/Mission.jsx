import React from 'react';
import { motion } from 'framer-motion';
import { Search, Activity } from 'lucide-react';

const Mission = () => {
    return (
        <section className="py-32 bg-stone-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 font-serif"
                    >
                        Spreading <span className="italic text-amber-600">Smiles</span> Across India
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-px w-24 bg-stone-300 mx-auto"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -5 }}
                        className="bg-white p-12 rounded-[2rem] shadow-xl shadow-stone-200/50 border border-stone-100 text-center group cursor-pointer hover:border-amber-200 transition-colors"
                    >
                        <div className="bg-stone-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-amber-500 transition-colors duration-500">
                            <Search className="w-8 h-8 text-stone-600 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <h3 className="text-3xl font-bold text-stone-900 mb-4 font-serif group-hover:text-amber-600 transition-colors">Find a Clinic</h3>
                        <p className="text-stone-500 mb-10 leading-relaxed">Locate our nearest clinic from 3000+ locations across the country. Care is always around the corner.</p>
                        <button className="text-stone-900 font-bold border-b-2 border-stone-200 pb-1 hover:border-amber-500 hover:text-amber-600 transition-all">
                            Search Location
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -5 }}
                        className="bg-white p-12 rounded-[2rem] shadow-xl shadow-stone-200/50 border border-stone-100 text-center group cursor-pointer hover:border-amber-200 transition-colors"
                    >
                        <div className="bg-stone-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-amber-500 transition-colors duration-500">
                            <Activity className="w-8 h-8 text-stone-600 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <h3 className="text-3xl font-bold text-stone-900 mb-4 font-serif group-hover:text-amber-600 transition-colors">Treatments</h3>
                        <p className="text-stone-500 mb-10 leading-relaxed">Explore our comprehensive range of procedures, from cosmetic dentistry to complex surgeries.</p>
                        <button className="text-stone-900 font-bold border-b-2 border-stone-200 pb-1 hover:border-amber-500 hover:text-amber-600 transition-all">
                            View Services
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
