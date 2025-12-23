import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle, Play, ShieldCheck, Users, MapPin, Stethoscope } from 'lucide-react';

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
                            href="/find-dentist"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-sky-500 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-sky-500/30 hover:bg-sky-600 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                        >
                            <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Find Dentist near you
                        </motion.a>

                        <motion.a
                            href="/find-dentist"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                        >
                            <Stethoscope className="w-5 h-5" />
                            Find by Treatment
                        </motion.a>
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
            {/* Floating WhatsApp Button */}
            <motion.a
                href="https://wa.me/919032018887"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all flex items-center justify-center"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </motion.a>
        </section>
    );
};

export default Hero;
