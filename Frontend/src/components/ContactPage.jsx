import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("idle"); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        setResult("Sending...");

        const formDataToSend = new FormData();
        formDataToSend.append("access_key", "630790aa-e465-4279-869d-126d6c1d1261");
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("subject", formData.subject);
        formDataToSend.append("message", formData.message);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
            } else {
                console.error("Error", data);
                setResult(data.message);
                setStatus("error");
            }
        } catch (error) {
            console.error("Error", error);
            setResult("Something went wrong! Please try again later.");
            setStatus("error");
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-sky-600 font-semibold uppercase tracking-wider text-sm mb-3 block">Get in Touch</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-heading">We'd Love to <span className="text-sky-600">Hear from You</span></h1>
                    <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                        Whether you have a question about our services, pricing, or just want to say hello, our team is ready to answer all your questions.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 space-y-8"
                    >
                        {/* Info Cards */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 font-heading">Contact Details</h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Address</h4>
                                        <p className="text-slate-600 leading-relaxed text-sm">
                                            Flat no-102, Tirumala Mansion, Plot no-120,<br />
                                            Survey no-41, Guttala Begumpet,<br />
                                            Kavuri hills, Madhapur, Hyderabad - 500033
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                                        <p className="text-slate-600 text-sm font-medium">+91 90320 18887</p>
                                        <p className="text-slate-600 text-sm font-medium">+91 961 803 5653</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                                        <p className="text-slate-600 text-sm font-medium">bigdentals@gmail.com</p>
                                        <p className="text-slate-600 text-sm font-medium">info@bigdental.org</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Office Hours Card */}
                        <div className="bg-sky-600 rounded-3xl p-8 shadow-xl shadow-sky-900/20 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <Clock className="w-6 h-6 text-sky-200" />
                                    <h3 className="text-2xl font-bold font-heading">Office Hours</h3>
                                </div>
                                <div className="space-y-3 font-light">
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span>Monday - Friday</span>
                                        <span className="font-medium">9:00 AM – 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/10 pb-2">
                                        <span>Saturday</span>
                                        <span className="font-medium">9:00 AM – 2:00 PM</span>
                                    </div>
                                    <div className="flex justify-between text-sky-200">
                                        <span>Sunday</span>
                                        <span className="font-medium">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 font-heading">Send us a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Your Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Dr. Jane Doe"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="you@example.com"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Subject *</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Implantology fellowship"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Message *</label>
                                    <textarea
                                        rows="6"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tell us how we can support your dental journey..."
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors resize-none"
                                    ></textarea>
                                </div>

                                {/* Status Messages */}
                                {status === 'success' && (
                                    <div className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200">
                                        <CheckCircle className="w-5 h-5" />
                                        <p>{result}</p>
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
                                        <AlertCircle className="w-5 h-5" />
                                        <p>{result}</p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-sky-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
