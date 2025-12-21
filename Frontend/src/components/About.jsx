import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-50 text-gray-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 relative"
                    >
                        <div className="absolute inset-0 bg-amber-500 rounded-3xl transform rotate-6 scale-95 opacity-20 blur-lg"></div>
                        <img
                            src="http://bigdental.org/wp-content/uploads/2024/05/dental-1.jpg"
                            alt="About Big Dental"
                            className="relative rounded-3xl shadow-2xl border-4 border-white w-full"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <h3 className="text-amber-600 font-bold tracking-wider uppercase mb-2">Our Story</h3>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-stone-900 font-serif">Redefining Dental Care <br /> in India</h2>

                        <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
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
                            className="mt-10 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50"
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
