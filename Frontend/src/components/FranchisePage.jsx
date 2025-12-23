import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, TrendingUp, CheckCircle2, Star, ArrowRight, Wallet, Users, Globe, Building2 } from 'lucide-react';
import shark from '../assets/shark.png';
import goldenEgg from '../assets/golden_egg.png';
import WhyChooseUs from './WhyChooseUs';
import Join from './Join';

const FranchisePage = () => {
    return (
        <div className="pt-20 bg-slate-50 min-h-screen font-body">

            {/* Header Section */}
            <section className="bg-white py-24 border-b border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <p className="text-xl font-medium text-sky-600 italic mb-4">For Doctors' Eyes Only</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-heading leading-tight">
                        Currently, Our Website is Informative. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Public Access Opening Soon</span>
                    </h1>
                </div>
            </section>

            {/* The Problem Section */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-900/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-3 text-sky-500 mb-6 font-bold tracking-widest uppercase text-sm">
                                <ShieldAlert className="w-5 h-5" /> Industry Warning
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-heading leading-tight">
                                Corporate Dental Hospitals are <span className="text-sky-500">swallowing</span> small dental clinics.
                            </h2>
                            <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-light">
                                <p>
                                    In today's world, corporate dental hospitals have a lot of power and they are ruling the industry.
                                    In the future, competing with them is going to be even harder.
                                </p>
                                <p>
                                    Small dental clinics often struggle to grow their practices due to the absence of dedicated marketing teams,
                                    lack of a recognizable brand, and the absence of effective marketing strategies. They do not have team, so they are isolated, waiting
                                    for patients to walk in, which never happens in today's competitive world.
                                </p>
                                <p>
                                    The people search for popular and advertised dental clinics, leaving smaller clinics at a disadvantage.
                                    New dentists are even hesitating to start clinics, fearing failure in this challenging environment.
                                    Joining a brand is the key to staying strong in the market.
                                </p>
                                <p className="font-medium text-sky-400 text-xl italic pt-6 border-l-4 border-sky-500 pl-6">
                                    "Individually, our efforts may be small, but united, we can accomplish far beyond our individual capacities"
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            {/* Visual metaphor */}
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm group">
                                <div className="aspect-square flex items-center justify-center relative flex-col overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                                    <img
                                        src={shark}
                                        alt="Market Competition"
                                        className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* How Does It Work Section */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-sky-600 font-semibold uppercase tracking-wider text-sm mb-3 block">Transparency</span>
                            <h2 className="text-4xl font-bold text-slate-900 font-heading">How Does It Work</h2>
                        </div>

                        <div className="space-y-12">
                            {[
                                { title: "Complete Freedom", text: "It's important to note that the Big Dental Group respects your individuality as a dental professional and clinic owner. You have complete freedom to operate your clinic according to your own standards and preferences. Our role is to provide you with an exclusive brand identity that sets you apart in the dental market, allowing you to flourish on your terms while benefiting from the recognition and trust that our brand brings. Your clinic, your way, with the added advantage of a standout brand." },
                                { title: "Exclusive Locality Allocation", text: "When Big Dental grants approval and designates a locality for a dental clinic, it means that this area is uniquely reserved for that clinic alone. No other dental clinics in the surrounding region will be given the same location, guaranteeing that the approved clinic maintains exclusive rights to operate without competition from other Big Dental network members." },
                                { title: "Your Clinic Branding with Big Dental", text: "Following your approval, Big Dental provides affiliation certificate, logos and designs for you to download and create display boards at your clinic. You have the freedom to choose whether to create a separate board adjacent to your clinic's name or incorporate the Big Dental brand name into your existing clinic board. The choice is entirely yours. Just remember to highlight it because that’s what patients will be searching for. This visual connection will reinforce the unity of your clinic with our group." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 font-bold border border-slate-100 text-lg">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-800 mb-4 font-heading">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-lg font-light">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Steps */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Implementation Steps */}
                        <div className="lg:w-3/5">
                            <h2 className="text-4xl font-bold text-slate-900 font-heading mb-12">
                                How to Join <span className="text-sky-600">Big Dental Chain</span>
                            </h2>
                            <div className="space-y-8">
                                {[
                                    { title: "Provide Clinic Details", desc: "Begin the process by submitting your clinic's information, including its address." },
                                    { title: "Verification", desc: "The group will conduct a thorough verification process to ensure that your clinic aligns with the standards and requirements." },
                                    { title: "Exclusive Locality Allocation", desc: "When Big Dental grants approval and designates a locality for a dental clinic, it means that this area is uniquely reserved for that clinic alone. No other dental clinics in the surrounding region will be given the same location." },
                                    { title: "Strict Standards", desc: "The Big Dental Group maintains high standards, so clinics seeking affiliation must meet specific criteria. These include holding a valid practicing license, adhering to ethical practices, and maintaining stringent hygiene protocols." },
                                    { title: "Reservation", desc: "To secure your affiliation, make an initial payment 1000 rs, to reserve your location" }
                                ].map((step, index) => (
                                    <div key={index} className="flex gap-4 group">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold text-sm mt-1 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">{step.title}</h3>
                                            <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Motivational Visual */}
                        <div className="lg:w-2/5 sticky top-24">
                            <div className="bg-slate-900 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden border border-slate-800">
                                <div className="absolute inset-0 bg-blue-500/10 opacity-30 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                                <div className="relative z-10 font-heading tracking-tighter leading-none">
                                    <div className="text-6xl font-black mb-2 text-slate-400">SOME</div>
                                    <div className="text-5xl font-bold mb-4">OPPORTUNITIES</div>
                                    <div className="text-2xl tracking-[0.5em] font-light mb-4 border-y border-slate-700 py-2">ONLY COME ONCE</div>
                                    <div className="text-7xl font-black text-sky-500 italic transform -skew-x-6">SEIZE</div>
                                    <div className="text-7xl font-black text-white italic transform -skew-x-6">THEM</div>
                                </div>
                                <div className="mt-12">
                                    <div className="w-16 h-1 bg-sky-500 mx-auto rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-slate-900 font-heading">
                            Benefits of <span className="text-sky-600">Joining the Big Dental Group</span>
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left Column (Items 1-5) */}
                        <div className="lg:w-1/2 space-y-8">
                            {[
                                { title: "Stand Out Among Other Clinics", desc: "By joining the Big Dental Group, you’ll immediately stand out from other clinics in your area. Our extensive marketing, branding, and support will help you differentiate your clinic and boost your online presence to patients seeking dental care." },
                                { title: "Brand Recognition", desc: "Being part of a well-known dental group like \"Big Dental\" brings immediate brand recognition and trust among patients. A standalone clinic would need to invest heavily in building and promoting its brand, which can take years." },
                                { title: "Patient Attracted with Exciting Offers", desc: "We’ll keep the momentum going to continually draw in fresh patients through enticing offers to our network of Big Dental clinics" },
                                { title: "Big Dental Bargains with Suppliers for Your Savings", desc: "The Big Dental Group negotiates and partners with suppliers who offer lower rates, helping you save money on essential dental supplies." },
                                { title: "Continuing Dental Education (CDE) Courses Free", desc: "We offer regular CDE courses at no cost, ensuring that you stay up-to-date and can enhance your clinical skills." }
                            ].map((benefit, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle2 className="w-6 h-6 text-sky-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">{benefit.title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column (Image + Items 6-7) */}
                        <div className="lg:w-1/2 space-y-8">
                            {/* Motivational Visual - Stand Out Clinic */}
                            <div className="rounded-3xl overflow-hidden shadow-xl mb-12 bg-slate-50 border border-slate-200 aspect-video relative flex flex-col items-center justify-center group overflow-hidden">
                                <img
                                    src={goldenEgg}
                                    alt="Stand Out From The Crowd"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {[
                                { title: "Community support", desc: "You’re not alone in this journey. The Big Dental family offers a strong community of support from other members. Exchange knowledge, share experiences, and learn from fellow professionals." },
                                { title: "A Future of Boundless Benefits", desc: "The Big Dental Group is all about giving everything back to its members. We have exciting plans for the future, where our members will get free access to even more benefits and opportunities. Your journey with us doesn't stop at what we offer today; it keeps growing and evolving to support your dental clinic’s success." }
                            ].map((benefit, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle2 className="w-6 h-6 text-sky-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 font-heading">{benefit.title}</h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Section */}
            <Join />

        </div>
    );
};

export default FranchisePage;
