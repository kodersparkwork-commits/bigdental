import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Shield, CreditCard, Clock, Users } from 'lucide-react';

const WhyChooseUs = () => {
    const benefits = [
        { title: "Modern Practices", text: "Latest tools & technology", icon: <Star className="w-6 h-6" /> },
        { title: "3000+ Clinics", text: "Accessible everywhere", icon: <Users className="w-6 h-6" /> },
        { title: "10,000 Doctors", text: "Expert specialists", icon: <Shield className="w-6 h-6" /> },
        { title: "Hygiene Protocols", text: "International standards", icon: <Check className="w-6 h-6" /> },
        { title: "Affordable Price", text: "40% less than market", icon: <CreditCard className="w-6 h-6" /> },
        { title: "No Waiting Period", text: "Immediate appointments", icon: <Clock className="w-6 h-6" /> },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    <div className="md:w-1/3">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold mb-6 leading-tight text-gray-900"
                        >
                            Why India Trusts <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Big Dental?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 mb-8"
                        >
                            We combine affordability with world-class quality to ensure everyone has access to the best dental care.
                        </motion.p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold shadow-lg"
                        >
                            Book an Appointment
                        </motion.button>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-colors duration-300"
                            >
                                <div className="bg-white p-3 rounded-full shadow-sm text-blue-600">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                                    <p className="text-sm text-gray-500">{benefit.text}</p>
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
