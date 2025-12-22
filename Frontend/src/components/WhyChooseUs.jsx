import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Clock, Users } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-sky-500" />,
            title: "Certified Excellence",
            desc: "Accredited specialists ensuring world-class dental care standards."
        },
        {
            icon: <Heart className="w-8 h-8 text-sky-500" />,
            title: "Pain-Free Treatment",
            desc: "Advanced techniques ensuring comfort for even the most sensitive patients."
        },
        {
            icon: <Clock className="w-8 h-8 text-sky-500" />,
            title: "24/7 Emergency",
            desc: "Round-the-clock availability for urgency dental needs."
        },
        {
            icon: <Users className="w-8 h-8 text-sky-500" />,
            title: "Patient First",
            desc: "Personalized care plans tailored to your specific needs and goals."
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
