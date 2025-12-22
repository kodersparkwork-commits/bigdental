import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Activity, Sparkles, UserCheck } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Stethoscope className="w-8 h-8 text-white" />,
            title: "Advanced Diagnostics",
            desc: "Precision capability with latest digital imaging tech.",
            bg: "bg-sky-500"
        },
        {
            icon: <Activity className="w-8 h-8 text-white" />,
            title: "Holistic Approach",
            desc: "Treating the patient, not just the tooth.",
            bg: "bg-blue-600"
        },
        {
            icon: <Sparkles className="w-8 h-8 text-white" />,
            title: "Cosmetic Excellence",
            desc: "Crafting celebrity smiles with artistic precision.",
            bg: "bg-indigo-500"
        },
        {
            icon: <UserCheck className="w-8 h-8 text-white" />,
            title: "Personal Care",
            desc: "Dedicated treatment coordinators for every patient.",
            bg: "bg-slate-900"
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="lg:w-1/3">
                        <span className="text-sky-600 font-semibold uppercase tracking-wider text-sm mb-3 block">Big Dental Standard</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading leading-tight">
                            Technology Meets <span className="text-sky-600">Compassion</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 font-light leading-relaxed">
                            We invest in the best technology because your health deserves nothing less. Experience the difference of digital dentistry.
                        </p>
                        <button className="text-sky-600 font-bold border-b-2 border-sky-600 hover:text-sky-700 transition-colors uppercase tracking-wide text-sm pb-1">
                            Explore Our Tech
                        </button>
                    </div>

                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 group"
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-sky-900/10 ${feature.bg}`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">{feature.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
