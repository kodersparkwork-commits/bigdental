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
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-600 font-bold tracking-wider uppercase text-sm"
                    >
                        Comprehensive Care
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mt-2 text-gray-900"
                    >
                        Our Treatments
                    </motion.h2>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {treatments.map((treatment, index) => (
                        <motion.div key={index} variants={item} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src="http://bigdental.org/wp-content/uploads/2023/11/bg-3.jpg"
                                    alt={treatment}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300">
                                <h5 className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    {treatment}
                                </h5>
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                    Click to learn more
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Treatments;
