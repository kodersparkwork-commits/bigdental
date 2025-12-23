import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Mission = () => {
    const navigate = useNavigate();
    return (
        <section id="mission" className="py-24 bg-white relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-50/50 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full text-center max-w-4xl mx-auto"
                    >
                        <span className="inline-block text-sky-600 font-semibold tracking-wider uppercase text-sm mb-4">Our Purpose</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-slate-900 leading-tight">
                            Redefining Dental <br />
                            <span className="text-sky-600">Care Standards</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                            To provide accessible, high-quality dental care to every corner of India. We believe that a healthy smile is the foundation of a healthy life, and we are committed to making that a reality for everyone.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto text-left">
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

                        <div className="flex justify-center">
                            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-slate-900/10 hover:bg-sky-600 hover:shadow-sky-500/20 transition-all flex items-center gap-2 group" onClick={() => navigate('/about')}>
                                Learn More About Us
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Mission;
