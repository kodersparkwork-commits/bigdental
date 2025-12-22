import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle, Play, ShieldCheck, Users } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden flex items-center py-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="http://bigdental.org/wp-content/uploads/2024/05/dental-1.jpg"
                    alt="Smiling Patient"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/70"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Trust Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8 shadow-sm">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-sm font-semibold text-white tracking-wide uppercase">
                            Trusted by 10,000+ Patients
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 font-heading tracking-tight">
                        Advanced Care for <br />
                        <span className="text-sky-400">
                            Your Best Smile
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Experience world-class dentistry with a gentle touch. We combine
                        cutting-edge technology with compassionate care to ensure your smile radiates confidence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-sky-500 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-sky-500/30 hover:bg-sky-600 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                        >
                            Book Consultation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                        >
                            <Play className="w-5 h-5 fill-current" />
                            Watch Video
                        </motion.button>
                    </div>

                    <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-300 font-medium">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                            <span>24/7 Support</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                            <span>Top Specialists</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                            <span>Modern Tech</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
