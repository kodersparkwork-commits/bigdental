import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 text-gray-600 pt-16 pb-8 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                            Big Dental
                        </h2>
                        <p className="text-sm leading-relaxed mb-6 text-gray-600">
                            The largest dental chain in India, dedicated to providing affordable, high-quality dental care with a smile.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-amber-600 transition"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-amber-600 transition"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-amber-600 transition"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-amber-600 transition"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gray-900 font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-amber-600 transition">About Us</a></li>
                            <li><a href="#" className="hover:text-amber-600 transition">Our Doctors</a></li>
                            <li><a href="#" className="hover:text-amber-600 transition">Treatments</a></li>
                            <li><a href="#" className="hover:text-amber-600 transition">Clinics</a></li>
                            <li><a href="#" className="hover:text-amber-600 transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-gray-900 font-bold mb-6">Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-amber-600 transition">General Dentistry</a></li>
                            <li><a href="#" className="hover:text-amber-600 transition">Cosmetic Dentistry</a></li>
                            <li><a href="#" className="hover:text-amber-600 transition">Orthodontics</a></li>
                            <li><a href="#" className="hover:text-amber-600 transition">Pediatric Dentistry</a></li>
                            <li><a href="#" className="hover:text-amber-600 transition">Implants</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-gray-900 font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex gap-3">
                                <MapPin className="text-amber-600 shrink-0" size={18} />
                                <span>Flat no-102, Tirumala Mansion, Plot no-120, Survey no-41, Guttala Begumpet, Kavuri Hills, Madhapur, Hyderabad - 500033</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="text-amber-600 shrink-0" size={18} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="text-amber-600 shrink-0" size={18} />
                                <span>info@bigdental.org</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Big Dental Chain. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
