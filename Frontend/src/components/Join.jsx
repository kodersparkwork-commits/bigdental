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
        <section id="franchise" className="py-24 bg-gradient-to-br from-amber-50 to-orange-50 text-stone-900 relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-40 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-stone-900">Join the Network</h2>
                    <p className="text-stone-500 text-xl max-w-2xl mx-auto font-light">Become a part of India's fastest growing dental chain. Simpler than you think.</p>
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
                            className="bg-white border border-stone-100 p-8 rounded-2xl w-full md:w-60 text-center hover:shadow-xl hover:border-amber-200 transition-all duration-300 shadow-sm"
                        >
                            <div className="w-14 h-14 mx-auto bg-amber-50 rounded-full flex items-center justify-center mb-6 text-amber-500">
                                {step.icon}
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-stone-900 font-serif">{step.title}</h3>
                            <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-stone-900 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-amber-600 transition-colors"
                    >
                        Apply for Franchise
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Join;
