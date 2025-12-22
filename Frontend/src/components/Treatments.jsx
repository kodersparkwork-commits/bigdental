import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Treatments = () => {
    const treatments = [
        {
            title: "Cosmetic Dentistry",
            desc: "Smile makeovers, veneers, and whitening for a radiant smile.",
            image: "http://bigdental.org/wp-content/uploads/2024/05/dental-3.jpg"
        },
        {
            title: "Dental Implants",
            desc: "Permanent, natural-looking solutions for missing teeth.",
            image: "http://bigdental.org/wp-content/uploads/2024/05/dental-4.jpg"
        },
        {
            title: "Orthodontics",
            desc: "Straighten your teeth with invisible aligners or traditional braces.",
            image: "http://bigdental.org/wp-content/uploads/2024/05/dental-5.jpg"
        },
        {
            title: "Root Canal",
            desc: "Pain-free root canal treatments to save your natural teeth.",
            image: "http://bigdental.org/wp-content/uploads/2024/05/dental-1.jpg"
        },
        {
            title: "Pediatric Dentistry",
            desc: "Gentle and fun dental care specifically designed for children.",
            image: "http://bigdental.org/wp-content/uploads/2024/05/dental-2.jpg"
        },
        {
            title: "Oral Surgery",
            desc: "Expert surgical care for extractions and complex procedures.",
            image: "http://bigdental.org/wp-content/uploads/2024/05/dental-3.jpg"
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {treatments.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-500"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full z-20 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    <ArrowRight className="w-5 h-5 text-sky-600" />
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading group-hover:text-sky-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                                    {item.desc}
                                </p>
                                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600">
                                    <Star className="w-4 h-4 fill-current" />
                                    <span>Top Rated Service</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Treatments;
