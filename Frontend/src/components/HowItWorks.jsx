import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Stethoscope, Smile } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <Calendar className="w-8 h-8 text-white" />,
            title: "Book Appointment",
            desc: "Schedule a visit online or call us directly. We accommodate your time.",
            color: "bg-sky-500",
            num: "01"
        },
        {
            icon: <Stethoscope className="w-8 h-8 text-white" />,
            title: "Expert Diagnosis",
            desc: "consult with our specialists and get a comprehensive treatment plan.",
            color: "bg-blue-600",
            num: "02"
        },
        {
            icon: <Smile className="w-8 h-8 text-white" />,
            title: "Smile Confidently",
            desc: "Receive world-class treatment and walk out with a healthy smile.",
            color: "bg-indigo-500",
            num: "03"
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-sky-100/40 via-transparent to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-sky-600 font-semibold uppercase tracking-wider text-sm mb-3 block">Simple Process</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-heading">
                        Your Journey to a <br className="hidden md:block" /> <span className="text-sky-600">Perfect Smile</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Dotted Line (Desktop) */}
                    <div className="hidden md:block absolute top-[20%] left-[16%] right-[16%] border-t-2 border-dashed border-slate-200 -z-10"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="text-center relative group"
                        >
                            <div className={`w-20 h-20 mx-auto ${step.color} rounded-2xl flex items-center justify-center shadow-xl shadow-slate-200 mb-8 transform group-hover:-translate-y-2 transition-transform duration-300 relative`}>
                                {step.icon}
                                <div className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-slate-300 shadow-sm border border-slate-100">
                                    {step.num}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed max-w-sm mx-auto font-light">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
