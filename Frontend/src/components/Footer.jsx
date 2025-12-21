import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            Big Dental
                        </h2>
                        <p className="text-sm leading-relaxed mb-6">
                            The largest dental chain in India, dedicated to providing affordable, high-quality dental care with a smile.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-white transition"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-white transition"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-white transition"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Our Doctors</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Treatments</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Clinics</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition">General Dentistry</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Cosmetic Dentistry</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Orthodontics</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Pediatric Dentistry</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition">Implants</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex gap-3">
                                <MapPin className="text-blue-500 shrink-0" size={18} />
                                <span>Corporate Office, Mumbai, India</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="text-blue-500 shrink-0" size={18} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="text-blue-500 shrink-0" size={18} />
                                <span>info@bigdental.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Big Dental Chain. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
