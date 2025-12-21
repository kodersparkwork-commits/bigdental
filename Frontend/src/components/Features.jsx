import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Wallet, Sparkles } from 'lucide-react';

const Features = () => {
    const features = [
        {
            title: "3000+ Clinics",
            description: "Spread across India, always near you.",
            icon: <MapPin className="w-8 h-8" />,
            color: "blue",
            delay: 0.1
        },
        {
            title: "Affordable Care",
            description: "Premium treatment at small charges.",
            icon: <Wallet className="w-8 h-8" />,
            color: "yellow",
            delay: 0.2
        },
        {
            title: "World Class Quality",
            description: "State-of-the-art equipment & hygiene.",
            icon: <Sparkles className="w-8 h-8" />,
            color: "teal",
            delay: 0.3
        }
    ];

    const getColorClasses = (color) => {
        switch (color) {
            case 'blue': return 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white';
            case 'yellow': return 'bg-yellow-50 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white';
            case 'teal': return 'bg-teal-50 text-teal-600 group-hover:bg-teal-500 group-hover:text-white';
            default: return 'bg-gray-50 text-gray-600';
        }
    };

    return (
        <section className="py-20 bg-white relative">
            <div className="container mx-auto px-4 -mt-24 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: feature.delay }}
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${getColorClasses(feature.color)}`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 font-medium">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
