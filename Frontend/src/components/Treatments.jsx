import React from 'react';
import { motion } from 'framer-motion';

const Treatments = () => {
    const treatments = [
        "Invisible aligners", "Dental Braces", "Root Canal Treatment",
        "Wisdom Tooth Removal", "Dentures", "Cosmetic Dentistry",
        "Teeth Whitening", "Dental Implants", "Dental Veneers",
        "TMJ Pain Treatment", "Tooth Extraction", "Dental Crowns"
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 bg-stone-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-amber-600 font-bold tracking-wider uppercase text-sm"
                    >
                        Comprehensive Care
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mt-2 text-stone-900 font-serif"
                    >
                        Our Treatments
                    </motion.h2>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6 max-w-6xl mx-auto"
                >
                    {treatments.map((treatment, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="flex items-center gap-3 group cursor-default"
                        >
                            <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-150 transition-transform duration-300"></span>
                            <span className="text-lg text-stone-700 font-light group-hover:text-stone-900 transition-colors">
                                {treatment}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Treatments;
