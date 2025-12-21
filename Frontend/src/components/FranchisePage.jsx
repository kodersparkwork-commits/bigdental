import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, TrendingUp, CheckCircle2, Star } from 'lucide-react';

const FranchisePage = () => {
    return (
        <div className="pt-20 bg-stone-50 min-h-screen">

            {/* Header Section */}
            <section className="bg-white py-16 border-b border-stone-100">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-xl md:text-2xl font-serif text-stone-600 italic mb-2">For Doctors' Eyes Only</p>
                    <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4">
                        Currently, Our Website is Informative. <br />
                        <span className="text-amber-600">Public Access Opening Soon</span>
                    </h1>
                </div>
            </section>

            {/* The Problem Section */}
            <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-900/20 rounded-full blur-[100px]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2">
                            <div className="flex items-center gap-3 text-amber-500 mb-6 font-bold tracking-widest uppercase">
                                <ShieldAlert className="w-6 h-6" /> Industry Warning
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif leading-tight">
                                Corporate Dental Hospitals are <span className="text-amber-500">swallowing</span> small dental clinics.
                            </h2>
                            <div className="space-y-6 text-stone-300 text-lg leading-relaxed font-light">
                                <p>
                                    In today's world, corporate dental hospitals have a lot of power and they are ruling the industry.
                                    In the future, competing with them is going to be even harder.
                                </p>
                                <p>
                                    Small dental clinics often struggle to grow their practices due to the absence of dedicated marketing teams,
                                    lack of a recognizable brand, and the absence of effective marketing strategies. They do not have a team,
                                    so they are isolated, waiting for patients to walk in, which never happens in today's competitive world.
                                </p>
                                <p>
                                    The people search for popular and advertised dental clinics, leaving smaller clinics at a disadvantage.
                                    New dentists are even hesitating to start clinics, fearing failure in this challenging environment.
                                    Joining a brand is the key to staying strong in the market.
                                </p>
                                <p className="font-bold text-amber-500 text-xl italic pt-4">
                                    "Individually, our efforts may be small, but united, we can accomplish far beyond our individual capacities"
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            {/* Visual metaphor for the shark image */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-800">
                                <div className="aspect-video bg-stone-800 flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-black opacity-80"></div>
                                    <div className="text-center p-10 relative z-10">
                                        <TrendingUp className="w-20 h-20 text-stone-700 mx-auto mb-4" />
                                        <p className="text-stone-500 font-serif italic text-xl">The market is shifting. Adapt or fade.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How Does It Work Section */}
            <section className="py-24 bg-white border-b border-stone-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-16 font-serif text-stone-900 uppercase tracking-widest">How Does It Work</h2>

                        <div className="space-y-16">
                            <div>
                                <h3 className="text-2xl font-bold text-amber-600 mb-4 font-serif">Complete Freedom:</h3>
                                <p className="text-stone-600 leading-relaxed text-lg">
                                    It's important to note that the Big Dental Group respects your individuality as a dental professional and clinic owner.
                                    You have complete freedom to operate your clinic according to your own standards and preferences.
                                    Our role is to provide you with an exclusive brand identity that sets you apart in the dental market,
                                    allowing you to flourish on your terms while benefiting from the recognition and trust that our brand brings.
                                    Your clinic, your way, with the added advantage of a standout brand.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-amber-600 mb-4 font-serif">Exclusive Locality Allocation:</h3>
                                <p className="text-stone-600 leading-relaxed text-lg">
                                    When Big Dental grants approval and designates a locality for a dental clinic, it means that this area is uniquely reserved for that clinic alone.
                                    No other dental clinics in the surrounding region will be given the same location, guaranteeing that the approved clinic maintains exclusive rights
                                    to operate without competition from other Big Dental network members.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-amber-600 mb-4 font-serif">Your Clinic Branding with Big Dental:</h3>
                                <p className="text-stone-600 leading-relaxed text-lg">
                                    Following your approval, Big Dental provides affiliation certificate, logos and designs for you to download and create display boards at your clinic.
                                    You have the freedom to choose whether to create a separate board adjacent to your clinic's name or incorporate the Big Dental brand name into your existing clinic board.
                                    The choice is entirely yours. Just remember to highlight it because that's what patients will be searching for. This visual connection will reinforce the unity of your clinic with our group.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps to Join Section */}
            <section className="py-24 bg-stone-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-16 font-serif text-stone-900">How to Join <span className="text-amber-600">Big Dental Chain</span></h2>

                        <div className="space-y-12">
                            {[
                                { title: "Provide Clinic Details", desc: "Begin the process by submitting your clinic's information, including its address." },
                                { title: "Verification", desc: "The group will conduct a thorough verification process to ensure that your clinic aligns with the standards and requirements." },
                                { title: "Exclusive Locality Allocation", desc: "When Big Dental grants approval and designates a locality for a dental clinic, it means that this area is uniquely reserved for that clinic alone. No other dental clinics in the surrounding region will be given the same location." },
                                { title: "Strict Standards", desc: "The Big Dental Group maintains high standards, so clinics seeking affiliation must meet specific criteria. These include holding a valid practicing license, adhering to ethical practices, and maintaining stringent hygiene protocols." },
                                { title: "Reservation", desc: "To secure your affiliation, make an initial payment of 1000 rs to reserve your location." }
                            ].map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xl">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-stone-900 mb-2 font-serif">{step.title}</h3>
                                        <p className="text-stone-600 leading-relaxed text-lg">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 font-serif text-stone-900">Benefits of Joining the <span className="text-amber-600">Big Dental Group</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "Stand Out Among Other Clinics", desc: "By joining the Big Dental Group, you'll immediately stand out from other clinics in your area. Our extensive marketing, branding, and support will help you differentiate your clinicand boost your online presence to patients seeking dental care" },
                            { title: "Brand Recognition", desc: "Being part of a well-known dental group like 'Big Dental' brings immediate brand recognition and trust among patients. A standalone clinic would need to invest heavily  in building and promoting its brand, which can take years." },
                            { title: "Patient Attracted with Exciting Offers", desc: "We'll keep the momentum going to continually draw in fresh patients through enticing offers to our network of Big Dental clinics." },
                            { title: "Big Dental Bargains with Suppliers", desc: "The Big Dental Group negotiates and partners with suppliers who offer lower rates, helping you save money on essential dental supplies." },
                            { title: "Continuing Dental Education (CDE)", desc: "We offer regular CDE courses at no cost, ensuring that you stay up-to-date and can enhance your clinical skills." },
                            { title: "Community Support", desc: "You're not alone in this journey. The Big Dental family offers a strong community of support from other members. Exchange knowledge and share experiences, and learn from fellow professionals" },
                            { title: "A Future of Boundless Benefits", desc: "The Big Dental Group is all about giving everything back to its members. We have exciting plans for the future, where our members will get free access to even more benefits and opportunities. Your journey with us doesn't stop at what we offer today; it keeps growing and evolving to support your dental clinic's success." }
                        ].map((benefit, i) => (
                            <div key={i} className="bg-stone-50 p-8 rounded-2xl shadow-sm border border-stone-100 hover:border-amber-200 transition-colors">
                                <CheckCircle2 className="w-8 h-8 text-amber-500 mb-4" />
                                <h3 className="text-xl font-bold text-stone-900 mb-3 font-serif">{benefit.title}</h3>
                                <p className="text-stone-600 leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default FranchisePage;
