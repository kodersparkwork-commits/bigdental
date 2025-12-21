import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 relative"
                    >
                        <div className="absolute inset-0 bg-blue-500 rounded-3xl transform rotate-6 scale-95 opacity-50 blur-lg"></div>
                        <img
                            src="http://bigdental.org/wp-content/uploads/2024/05/dental-1.jpg"
                            alt="About Big Dental"
                            className="relative rounded-3xl shadow-2xl border-2 border-slate-700 w-full"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <h3 className="text-blue-400 font-bold tracking-wider uppercase mb-2">Our Story</h3>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Redefining Dental Care <br /> in India</h2>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                Big Dental is not just a chain of clinics; it's a movement to make premium dentistry affordable for everyone. As India's leading provider, we bridge the gap between quality and cost.
                            </p>
                            <p>
                                Born from the visionary Indian Dental Academy, we carry a legacy of two decades of excellence in dental education. This foundation ensures that every procedure is backed by deep academic knowledge and expertise.
                            </p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-500 transition-colors"
                        >
                            Meet Our Team
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
