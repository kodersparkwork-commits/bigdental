import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-[#fafaf9] overflow-hidden flex flex-col justify-center pt-32 pb-20">
            {/* Subtle Gradient Spot */}
            <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-white to-transparent opacity-60"></div>
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-100/30 rounded-full blur-[120px]"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex justify-center mb-8">
                        <span className="bg-white border border-stone-200 text-stone-600 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide shadow-sm flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                            India's Premier Dental Network
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold text-stone-900 leading-[1.05] tracking-tight mb-8">
                        Big Dental. <br />
                        <span className="italic text-amber-600 font-medium">Big Smiles.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-stone-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        Where world-class expertise meets genuine care.
                        Join 10 million+ happy smiles across the nation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-stone-900 text-white px-10 py-4 rounded-full font-medium text-lg shadow-2xl hover:bg-stone-800 transition-colors flex items-center justify-center gap-3"
                        >
                            Book a Consultation <ArrowRight className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white text-stone-800 border border-stone-200 px-10 py-4 rounded-full font-medium text-lg hover:border-amber-200 transition-colors"
                        >
                            Find a Clinic Near You
                        </motion.button>
                    </div>
                </motion.div>

                {/* Hero Image / Editorial Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative max-w-6xl mx-auto"
                >
                    <div className="relative rounded-[3rem] overflow-hidden aspect-[21/9] shadow-2xl">
                        <img
                            src="http://bigdental.org/wp-content/uploads/2024/05/dental-1.jpg"
                            alt="Happy Patient"
                            className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-stone-900/10"></div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4">
                            <div className="flex -space-x-3">
                                <div className="w-10 h-10 rounded-full bg-stone-200 border-2 border-white"></div>
                                <div className="w-10 h-10 rounded-full bg-stone-300 border-2 border-white"></div>
                                <div className="w-10 h-10 rounded-full bg-stone-400 border-2 border-white flex items-center justify-center text-xs font-bold text-stone-700">+2k</div>
                            </div>
                            <div>
                                <div className="flex text-amber-500 mb-0.5">
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                </div>
                                <span className="text-xs font-bold text-stone-800 uppercase tracking-widest">Trusted Review</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
