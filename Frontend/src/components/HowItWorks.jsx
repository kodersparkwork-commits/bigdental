import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        { title: "Complete Freedom", desc: "Operate your clinic with your own standards. We respect your individuality." },
        { title: "Exclusive Locality", desc: "Your area is yours alone. No competition from other network members nearby." },
        { title: "Dual Branding", desc: "Leverage our trusted brand alongside your own name for maximum impact." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-serif">Franchise Model</h2>
                    <p className="text-xl text-stone-500">How we empower dental professionals</p>
                </div>

                <div className="flex flex-col-reverse md:flex-row items-center gap-16">
                    <div className="md:w-1/2 space-y-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex gap-6 group"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-xl group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900 mb-2 font-serif">{step.title}</h3>
                                    <p className="text-stone-600 leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-amber-600 to-transparent rounded-2xl opacity-20 transform translate-x-4 translate-y-4"></div>
                            <img
                                src="http://bigdental.org/wp-content/uploads/2023/11/logo-bg.jpg"
                                alt="How it works"
                                className="relative rounded-2xl shadow-xl w-full"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
