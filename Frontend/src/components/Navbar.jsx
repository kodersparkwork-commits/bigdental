import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', href: '/' },
        { name: 'Franchise', href: '/franchise' },
        { name: 'About', href: '/#about' },
        { name: 'Team', href: '/#team' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
                    : 'bg-white/80 backdrop-blur-sm py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="/" className="flex items-center gap-2">
                            <img
                                src="http://bigdental.org/wp-content/uploads/2024/12/IMG-20241130-WA0001.jpg"
                                alt="Big Dental"
                                className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-14'} w-auto`}
                            />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-stone-600 font-medium hover:text-amber-600 transition-colors relative group text-sm uppercase tracking-wide"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full opacity-50"></span>
                            </a>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-orange-500/30 hover:shadow-xl transition-all flex items-center gap-2 text-sm"
                        >
                            <Calendar className="w-4 h-4" /> Book Now
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-amber-600 focus:outline-none relative z-50"
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
                        className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl z-40 border-t border-slate-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-6">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-xl font-medium text-stone-800 hover:text-amber-600 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="w-full bg-amber-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-amber-600/20">
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
