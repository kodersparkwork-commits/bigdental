import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', href: '#home' },
        { name: 'Franchise', href: '#franchise' },
        { name: 'About', href: '#about' },
        { name: 'Team', href: '#team' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? 'bg-white/80 backdrop-blur-md shadow-lg py-3'
                        : 'bg-white py-5'
                    }`}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="/" className="flex items-center gap-2">
                            <img
                                src="http://bigdental.org/wp-content/uploads/2024/12/IMG-20241130-WA0001.jpg"
                                alt="Big Dental"
                                className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'} w-auto`}
                            />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 font-medium hover:text-blue-600 transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                        >
                            <Calendar className="w-4 h-4" /> Book Appointment
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden fixed top-[60px] left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl z-40 border-t border-gray-100"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-800"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">
                                Book Appointment
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
