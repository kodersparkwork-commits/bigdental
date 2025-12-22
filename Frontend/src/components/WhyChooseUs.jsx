import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Clock, Users, MapPin, Wallet, CreditCard, Banknote } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <Sparkles className="w-8 h-8 text-sky-500" />,
            title: "Modern practices",
            desc: "State-of-the-art dental technologies and modern methodologies."
        },
        {
            icon: <MapPin className="w-8 h-8 text-sky-500" />,
            title: "3000+ Clinics",
            desc: "A vast network of clinics spread across India for easy access."
        },
        {
            icon: <Users className="w-8 h-8 text-sky-500" />,
            title: "10,000 Doctors",
            desc: "A massive team of experienced dental professionals."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-sky-500" />,
            title: "Hygienic protocols",
            desc: "Strict adherence to sterilization and hygiene standards."
        },
        {
            icon: <Wallet className="w-8 h-8 text-sky-500" />,
            title: "Affordable price",
            desc: "High quality care at least 40% less than market rates."
        },
        {
            icon: <CreditCard className="w-8 h-8 text-sky-500" />,
            title: "Flexible Payment",
            desc: "Easy payment options to suit your financial needs."
        },
        {
            icon: <Banknote className="w-8 h-8 text-sky-500" />,
            title: "Interest Free Finance",
            desc: "0% interest financing options for dental procedures."
        },
        {
            icon: <Clock className="w-8 h-8 text-sky-500" />,
            title: "No waiting period",
            desc: "Immediate appointments and prompt treatment commencement."
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-sky-600 font-semibold uppercase tracking-wider text-sm mb-3 block">Why Choose Big Dental</span>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">
                        Excellence in Every <span className="text-sky-600">Detail</span>
                    </h2>
                    <p className="text-lg text-slate-600 font-light leading-relaxed">
                        We blend clinical expertise with a warm, welcoming environment to redefine your dental experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-sky-50 transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading group-hover:text-sky-600 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
