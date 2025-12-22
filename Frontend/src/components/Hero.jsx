import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle, Play, ShieldCheck, Users } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-slate-50 overflow-hidden flex flex-col justify-center pt-32 pb-20 lg:pt-40 lg:pb-32">

            {/* Background Dynamics */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[100px] animate-blob mix-blend-multiply"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-100/50 rounded-full blur-[120px] -z-10"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Trust Badge */}
                            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-sm font-semibold text-slate-700 tracking-wide uppercase">
                                    Trusted by 10,000+ Patients
                                </span>
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 font-heading tracking-tight">
                                Advanced Care for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
                                    Your Best Smile
                                </span>
                            </h1>

                            <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                                Experience world-class dentistry with a gentle touch. We combine
                                cutting-edge technology with compassionate care to ensure your smile radiates confidence.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-sky-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-sky-500/30 hover:bg-sky-700 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                                >
                                    Book Consultation
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.a>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:border-sky-500 hover:text-sky-600 transition-all flex items-center justify-center gap-2 shadow-sm"
                                >
                                    <Play className="w-5 h-5 fill-current" />
                                    Watch Video
                                </motion.button>
                            </div>

                            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-slate-600 font-medium">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                    <span>24/7 Support</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                    <span>Top Specialists</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                                    <span>Modern Tech</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Hero Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/10 border-[6px] border-white z-10">
                            <img
                                src="http://bigdental.org/wp-content/uploads/2024/05/dental-1.jpg"
                                alt="Smiling Patient"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />

                            {/* Glass Badge 1: Rating */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-white/50 flex items-center justify-between">
                                <div>
                                    <div className="flex text-yellow-500 mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-sm text-slate-600 font-medium">4.9/5 from 2,500+ Reviews</p>
                                </div>
                                <div className="h-10 w-10 bg-sky-50 rounded-full flex items-center justify-center">
                                    <Users className="w-5 h-5 text-sky-600" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Glass Badge 2: Doctors */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-8 bg-white/80 backdrop-blur-md p-4 pr-8 rounded-2xl shadow-xl border border-white/50 hidden md:flex items-center gap-4 z-20"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900 leading-none">50+</p>
                                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Specialists</p>
                            </div>
                        </motion.div>

                        {/* Decorative Gradient Blob Behind Image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-sky-600 to-blue-600 rounded-[2.5rem] blur-2xl opacity-20 -z-10 transform translate-x-4 translate-y-4"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
