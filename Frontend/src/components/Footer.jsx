import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import logo from '../assets/big_dental_logo.png';

const Footer = () => {
    return (
        <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="Big Dental" className="h-12 w-auto object-contain bg-white rounded-lg p-1" />
                            <div>
                                <span className="text-2xl font-bold font-heading text-white tracking-tight">Big<span className="text-sky-500">Dental</span></span>
                            </div>
                        </div>
                        <p className="text-slate-400 leading-relaxed text-sm">
                            Empowering smiles with world-class dental care. Join our network of excellence and experience the future of dentistry today.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all duration-300 group ring-1 ring-white/5">
                                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-6 text-white tracking-wide">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Franchise', href: '/franchise' },
                                { name: 'Contact', href: '/contact-us' }
                            ].map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2 text-sm group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-sky-400 transition-colors"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-6 text-white tracking-wide">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-sky-500 ring-1 ring-white/5">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Head Office</p>
                                    <p className="font-medium text-slate-200 text-sm max-w-[250px]">Flat no-102, Tirumala Mansion, Plot no-120, Survey no-41, Guttala Begumpet, Kavuri hills, Madhapur, Hyderabad - 500033</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-sky-500 ring-1 ring-white/5">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Call Us</p>
                                    <p className="font-medium text-slate-200">+91 90320 18887</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-sky-500 ring-1 ring-white/5">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Email Us</p>
                                    <p className="font-medium text-slate-200">bigdentals@gmail.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold font-heading mb-6 text-white tracking-wide">Newsletter</h3>
                        <p className="text-slate-400 mb-6 text-sm">Subscribe to get the latest dental health updates.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-slate-800 text-white pl-6 pr-14 py-4 rounded-full border border-slate-700 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 placeholder-slate-500/70 transition-all text-sm"
                            />
                            <button className="absolute right-2 top-2 w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center text-white hover:bg-sky-500 transition-colors shadow-lg shadow-sky-900/20">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">© 2024 Big Dental. All rights reserved.</p>
                    <div className="flex gap-8 text-slate-500 text-sm">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
