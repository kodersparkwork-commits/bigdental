import React from 'react';
import { motion } from 'framer-motion';
import { FileText, UserCheck, ShieldCheck, CreditCard, ArrowRight } from 'lucide-react';

const Join = () => {
    const steps = [
        {
            icon: <FileText className="w-6 h-6 text-sky-500" />,
            title: "Application",
            desc: "Submit your clinic details and credentials for initial review."
        },
        {
            icon: <UserCheck className="w-6 h-6 text-sky-500" />,
            title: "Verification",
            desc: "Our team verifies your standards and operational readiness."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-sky-500" />,
            title: "Approval",
            desc: "Get certified and granted exclusive locality rights."
        },
        {
            icon: <CreditCard className="w-6 h-6 text-sky-500" />,
            title: "Onboarding",
            desc: "Complete the formalities and access our brand assets."
        }
    ];

    return (
        <section id="join" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-900/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-sky-500 font-bold uppercase tracking-widest text-xs mb-4 block">Expansion</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">Big Dental</span> Network
                    </h2>
                    <p className="text-slate-400 text-lg font-light leading-relaxed">
                        Be part of India's fastest-growing dental chain. Leverage our brand, technology, and marketing to scale your practice.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-slate-800 -z-10"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-inner ring-1 ring-white/10 group-hover:bg-sky-500/10 group-hover:ring-sky-500/30 transition-all">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-heading text-slate-100">{step.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/partner-registration"
                        className="inline-flex items-center gap-2 bg-sky-600 text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-sky-900/40 hover:bg-sky-500 transition-all"
                    >
                        Apply for Franchise
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Join;
