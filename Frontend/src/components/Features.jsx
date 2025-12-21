import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Wallet, Sparkles } from 'lucide-react';

const Features = () => {
    const features = [
        {
            title: "3000+ Clinics",
            description: "Spread across every corner of India, ensuring care is always within your reach.",
            icon: <MapPin className="w-6 h-6" />,
            delay: 0.1
        },
        {
            title: "Fair Pricing",
            description: "Premium healthcare shouldn't cost a fortune. Transparent and affordable charges.",
            icon: <Wallet className="w-6 h-6" />,
            delay: 0.2
        },
        {
            title: "Global Standards",
            description: "Equipped with world-class technology and strict hygiene protocols.",
            icon: <Sparkles className="w-6 h-6" />,
            delay: 0.3
        }
    ];

    return (
        <section className="py-24 bg-white border-b border-stone-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-stone-100">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: feature.delay }}
                            className="flex flex-col items-center text-center px-4 pt-8 md:pt-0"
                        >
                            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 bg-amber-50 text-amber-600 ring-4 ring-amber-50/50">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-stone-900 mb-4 font-serif">
                                {feature.title}
                            </h3>
                            <p className="text-stone-500 leading-relaxed max-w-xs">
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
