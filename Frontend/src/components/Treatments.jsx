import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Treatments = () => {
    const treatments = [
        {
            title: "Invisible Aligners",
            desc: "Clear, comfortable aligners to straighten your teeth discreetly.",
            image: "http://bigdental.org/wp-content/uploads/2024/05/dental-5.jpg"
        },
        {
            title: "Dental Braces",
            desc: "Traditional and ceramic braces for effective teeth correction.",
            image: "http://bigdental.org/wp-content/uploads/2024/05/dental-5.jpg"
        },
        {
            title: "Root Canal",
            desc: "Advanced therapy to save infected teeth and relieve pain instantly.",
            image: "http://bigdental.org/wp-content/uploads/2024/05/dental-1.jpg"
        },
        {
            title: "Wisdom Tooth",
            desc: "Safe and painless removal of problematic wisdom teeth.",
            image: "http://bigdental.org/wp-content/uploads/2024/05/dental-3.jpg"
        },
        {
            title: "Dentures",
            desc: "Custom-fitted complete and partial dentures for natural function.",
            image: "http://bigdental.org/wp-content/uploads/2024/05/dental-4.jpg"
        },
        {
            title: "Cosmetic Dentistry",
            desc: "Comprehensive aesthetic procedures to design your perfect smile.",
            image: "http://bigdental.org/wp-content/uploads/2024/05/dental-3.jpg"
        },
        {
            title: "Teeth Whitening",
            desc: "Professional whitening treatments for a brighter, dazzling smile.",
            image: "http://bigdental.org/wp-content/uploads/2024/05/dental-3.jpg"
        },
        {
            title: "Dental Implants",
            desc: "The gold standard for replacing missing teeth permanently.",
            image: "http://bigdental.org/wp-content/uploads/2024/05/dental-4.jpg"
        },
        {
            title: "Dental Veneers",
            desc: "Thin, custom shells to cover defects and enhance your smile.",
            image: "http://bigdental.org/wp-content/uploads/2024/05/dental-3.jpg"
        },
        {
            title: "TMJ Treatment",
            desc: "Specialized care for jaw pain and temporomandibular joint disorders.",
            image: "http://bigdental.org/wp-content/uploads/2024/05/dental-2.jpg"
        },
        {
            title: "Tooth Extraction",
            desc: "Gentle extractions when teeth cannot be saved.",
            image: "http://bigdental.org/wp-content/uploads/2024/05/dental-3.jpg"
        },
        {
            title: "Dental Crowns",
            desc: "Strong, natural-looking caps to restore damaged or decayed teeth.",
            image: "http://bigdental.org/wp-content/uploads/2024/05/dental-1.jpg"
        }
    ];

    return (
        <section id="treatments" className="py-24 bg-white relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="md:w-2/3">
                        <span className="text-sky-600 font-semibold uppercase tracking-wider text-sm mb-3 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-heading leading-tight">
                            Comprehensive Care <br /> for <span className="text-sky-600">Every Smile</span>
                        </h2>
                    </div>
                    <a href="#" className="flex items-center gap-2 text-slate-700 font-semibold hover:text-sky-600 transition-colors group">
                        View All Services
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                    {treatments.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="text-center"
                        >
                            <h3 className="text-sm sm:text-base md:text-xl font-bold text-slate-700 hover:text-sky-600 transition-colors cursor-pointer">
                                {item.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Treatments;
