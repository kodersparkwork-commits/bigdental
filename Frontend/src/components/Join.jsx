import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, CheckSquare, Map, ShieldCheck, CreditCard } from 'lucide-react';

const Join = () => {
    const steps = [
        { icon: <ClipboardList />, title: "Provide Details", desc: "Submit clinic info & address" },
        { icon: <CheckSquare />, title: "Verification", desc: "Quality & standards check" },
        { icon: <Map />, title: "Allocation", desc: "Exclusive locality rights" },
        { icon: <ShieldCheck />, title: "Standards", desc: "License & hygiene protocols" },
        { icon: <CreditCard />, title: "Reservation", desc: "Secure with ₹1000 payment" },
    ];

    return (
        <section id="franchise" className="py-24 bg-blue-600 text-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 opacity-20 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Join the Network</h2>
                    <p className="text-blue-100 text-xl max-w-2xl mx-auto">Become a part of India's fastest growing dental chain. Simpler than you think.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-blue-700/50 backdrop-blur-sm border border-blue-500/30 p-6 rounded-2xl w-full md:w-56 text-center hover:bg-blue-700 transition"
                        >
                            <div className="w-12 h-12 mx-auto bg-blue-500 rounded-xl flex items-center justify-center mb-4 text-white">
                                {step.icon}
                            </div>
                            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                            <p className="text-blue-200 text-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition"
                    >
                        Apply for Franchise
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Join;
