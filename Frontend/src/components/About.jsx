import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight, Globe } from 'lucide-react';
import ourStrength from '../assets/our_strength.png';
import ida from '../assets/ida.png';
const About = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* 1. Origin Story Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <span className="text-sky-600 font-semibold uppercase tracking-wider text-sm mb-3 block">Our Origins</span>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading leading-tight">
                                The Team That Built <br /> <span className="text-sky-600">Big Dental Group</span>
                            </h2>
                            <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
                                <p>
                                    The Big Dental Group is a visionary venture associated with the <strong className="text-slate-900 font-medium">Indian Dental Academy</strong>, a renowned provider of continuing dental education for over two decades. With an established track record of excellence and trust within the dental community, the Indian Dental Academy has become a respected and valued name in the field of dentistry.
                                </p>
                                <p>
                                    Leveraging this wealth of experience and trust, the Indian Dental Academy has introduced the Big Dental Group to extend a helping hand to smaller dental clinics. The primary aim of the Big Dental Group is to empower and support these smaller clinics, facilitating their growth and success in the highly competitive dental industry.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <div className="relative rounded-[2rem] overflow-hidden">
                                <img
                                    src={ida}
                                    alt="Indian Dental Academy Team"
                                    className="w-full h-auto"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. The Solution & Mission */}
            <section className="py-24 bg-slate-50 border-y border-slate-200/50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">A Groundbreaking Solution</h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Through this collaboration, the Big Dental Group brings together the expertise, resources, and extensive network of the Indian Dental Academy to create a platform where small dental clinics can thrive.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-10 items-center">
                        <div className="md:w-1/3 text-center">
                            <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4 text-sky-600 text-4xl font-bold">
                                10x
                            </div>
                            <p className="font-bold text-slate-900 uppercase tracking-widest text-sm">Growth Potential</p>
                        </div>
                        <div className="md:w-2/3 border-l-0 md:border-l border-slate-100 md:pl-10">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">You are no more small. You grow <span className="text-sky-600">BIG</span>.</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Not well doing clinics Just by becoming part of Big Dental Group, you will watch your clinic flourish beyond your wildest imagination.
                                This strategic initiative is a testament to the Indian Dental Academy's commitment to the dental community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Our Strength */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            {/* Replaced Icon Grid with Infographic Image */}
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-50 group">
                                <img
                                    src={ourStrength}
                                    alt="Our Strengths - Dedicated Team & Technology"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <span className="text-sky-600 font-semibold uppercase tracking-wider text-sm mb-3 block">Our Strength</span>
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Powered by a <br /><span className="text-sky-600">Diverse Force</span></h2>
                            <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                                The Big Dental Group isn't just a regular company. It's a powerful force changing how dental care works. Being dental professionals ourselves, we understand the pulse of dentistry and are super committed to one big goal: create a platform where small dental clinics can reach new heights.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-lg">
                                But there's more to our team. We also have experts in digital marketing, web development, paid marketing, and media. Together, this powerful diverse team serves as the lifeline for your clinic, helping your practice multiply by ten times.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Marketing Strategies */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sky-900/20 via-slate-900 to-slate-900 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-sky-400 font-semibold uppercase tracking-wider text-sm mb-3 block">Growth Engine</span>
                        <h2 className="text-4xl font-bold font-heading">Our Key <span className="text-sky-400">Marketing Strategies</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Reputation Building", desc: "We prioritize establishing a strong and positive reputation, actively managing online reviews and patient feedback to enhance credibility." },
                            { title: "Dedicated Websites", desc: "Each member gets their own professional website to showcase services, build trust, and engage potential patients." },
                            { title: "Social Media Marketing", desc: "Leveraging platforms to connect with the community, share content, and keep the audience engaged with the Big Dental brand." },
                            { title: "Maximizing YouTube", desc: "Developing engaging video content to maximize presence on YouTube, a platform with immense potential for dental education." },
                            { title: "Paid Marketing", desc: "Utilizing ads on Google, Facebook, Instagram, and YouTube to reach a broader audience effectively." },
                            { title: "Weekly Offers", desc: "Attracting patients through strategic weekly offers, encouraging repeat visits and word-of-mouth recommendations." },
                            { title: "Newspaper Coverage", desc: "Featuring Big Dental in newspapers to create a buzz and keep the brand visible within the local community." },
                            { title: "Individualized Focus", desc: "Tailoring marketing efforts to benefit each member, ensuring personalized support to grow their practice effectively." }
                        ].map((strategy, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
                            >
                                <div className="h-1 w-12 bg-sky-500 rounded-full mb-4"></div>
                                <h3 className="text-xl font-bold mb-3 font-heading">{strategy.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{strategy.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
