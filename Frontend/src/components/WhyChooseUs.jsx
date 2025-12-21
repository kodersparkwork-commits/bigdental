import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Shield, CreditCard, Clock, Users } from 'lucide-react';

const WhyChooseUs = () => {
    const benefits = [
        { title: "Modern Practices", text: "Latest tools & technology", icon: <Star className="w-5 h-5" /> },
        { title: "3000+ Clinics", text: "Accessible everywhere", icon: <Users className="w-5 h-5" /> },
        { title: "10,000 Doctors", text: "Expert specialists", icon: <Shield className="w-5 h-5" /> },
        { title: "Hygiene Protocols", text: "International standards", icon: <Check className="w-5 h-5" /> },
        { title: "Affordable Price", text: "40% less than market", icon: <CreditCard className="w-5 h-5" /> },
        { title: "No Waiting Period", text: "Immediate appointments", icon: <Clock className="w-5 h-5" /> },
    ];

    return (
        <section className="py-24 bg-white relative">
            <div className="absolute inset-y-0 right-0 w-1/3 bg-stone-50 skew-x-12 opacity-50 z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row gap-20 items-center">

                    <div className="md:w-1/3">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl font-bold mb-8 leading-tight text-stone-900 font-serif"
                        >
                            Why India Trusts <br />
                            <span className="text-amber-600 italic">Big Dental?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-stone-500 mb-10 text-lg leading-relaxed font-light"
                        >
                            We combine affordability with world-class quality to ensure everyone has access to the best dental care.
                        </motion.p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-amber-500/30"
                        >
                            Book an Appointment
                        </motion.button>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 10 }}
                                className="flex items-start gap-5 group"
                            >
                                <div className="bg-stone-100 p-3 rounded-xl text-stone-400 group-hover:text-amber-500 group-hover:bg-amber-50 transition-colors duration-300">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 text-lg mb-1 font-serif group-hover:text-amber-600 transition-colors">{benefit.title}</h4>
                                    <p className="text-stone-500 font-light text-sm">{benefit.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
