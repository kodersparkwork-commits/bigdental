import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Mission = () => {
    return (
        <section id="mission" className="py-24 bg-white relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-50/50 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/2"
                    >
                        <span className="inline-block text-sky-600 font-semibold tracking-wider uppercase text-sm mb-4">Our Purpose</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-slate-900 leading-tight">
                            Redefining Dental <br />
                            <span className="text-sky-600">Care Standards</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                            To provide accessible, high-quality dental care to every corner of India. We believe that a healthy smile is the foundation of a healthy life, and we are committed to making that a reality for everyone.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {[
                                "State-of-the-art Technology",
                                "Affordable & Transparent",
                                "Experienced Specialists",
                                "Patient-Centric Approach"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100/50 hover:bg-sky-50 transition-colors group">
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                        <CheckCircle className="w-5 h-5 text-sky-500" />
                                    </div>
                                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-slate-900/10 hover:bg-sky-600 hover:shadow-sky-500/20 transition-all flex items-center gap-2 group">
                            Learn More About Us
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:w-1/2 relative"
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/10 border-[6px] border-white z-10">
                            <img
                                src="http://bigdental.org/wp-content/uploads/2024/05/dental-2.jpg"
                                alt="Mission"
                                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                        </div>

                        {/* Floating Stats */}
                        <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block z-20">
                            <p className="text-4xl font-bold text-sky-600 font-heading">100%</p>
                            <p className="text-slate-500 font-medium text-sm mt-1">Satisfaction Guarantee</p>
                        </div>

                        {/* Decorative blob */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-500 rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
