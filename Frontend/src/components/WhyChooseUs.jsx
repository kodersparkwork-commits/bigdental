import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Clock, Users, MapPin, Wallet, CreditCard, Banknote } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <Sparkles className="w-8 h-8 text-sky-500" />,
            title: "Modern dental practices",
            desc: "Your content goes here. Edit or remove this text inline or in the module Content settings."
        },
        {
            icon: <Wallet className="w-8 h-8 text-sky-500" />,
            title: "Affordable price, At least 40% less",
            desc: "Your content goes here. Edit or remove this text inline or in the module Content settings."
        },
        {
            icon: <MapPin className="w-8 h-8 text-sky-500" />,
            title: "3000 + Clinics spread across India",
            desc: "Your content goes here. Edit or remove this text inline or in the module Content settings."
        },
        {
            icon: <CreditCard className="w-8 h-8 text-sky-500" />,
            title: "Flexible Payment options",
            desc: "Your content goes here. Edit or remove this text inline or in the module Content settings."
        },
        {
            icon: <Users className="w-8 h-8 text-sky-500" />,
            title: "10,000 Doctors",
            desc: "Your content goes here. Edit or remove this text inline or in the module Content settings."
        },
        {
            icon: <Banknote className="w-8 h-8 text-sky-500" />,
            title: "Interest Free Finance for procedures",
            desc: "Your content goes here. Edit or remove this text inline or in the module Content settings."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-sky-500" />,
            title: "Strictly Hygienic protocols",
            desc: "Your content goes here. Edit or remove this text inline or in the module Content settings."
        },
        {
            icon: <Clock className="w-8 h-8 text-sky-500" />,
            title: "No waiting period",
            desc: "Your content goes here. Edit or remove this text inline or in the module Content settings."
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-heading">
                        Why you choose <span className="text-sky-600">Big Dental clinics?</span>
                    </h2>
                    <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-5 group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-sky-100 transition-all duration-300"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center group-hover:bg-sky-600 transition-colors duration-300">
                                    <div className="text-sky-600 group-hover:text-white transition-colors duration-300">
                                        {React.cloneElement(feature.icon, { className: "w-7 h-7" })}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
