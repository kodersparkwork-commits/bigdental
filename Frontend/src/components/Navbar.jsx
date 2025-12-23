import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Franchise', href: '/franchise' },
        { name: 'Contact', href: '/contact-us' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-blue-500/5 py-4'
                    : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                            B
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-slate-900 leading-none tracking-tight">Big<span className="text-sky-600">Dental</span></span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1 bg-slate-50/50 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-sm">
                        {navLinks.map((link) => (
                            link.href.startsWith('/') && !link.href.includes('#') ? (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="px-5 py-2.5 rounded-full text-slate-600 font-medium text-sm hover:text-sky-700 hover:bg-white hover:shadow-sm transition-all duration-300"
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-5 py-2.5 rounded-full text-slate-600 font-medium text-sm hover:text-sky-700 hover:bg-white hover:shadow-sm transition-all duration-300"
                                >
                                    {link.name}
                                </a>
                            )
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="hidden lg:flex items-center gap-4">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-slate-400 group-focus-within:text-sky-500 transition-colors" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search here..."
                                className="pl-10 pr-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 w-64 transition-all shadow-sm hover:shadow-md"
                            />
                        </div>
                    </div>


                    {/* Mobile Search Bar */}
                    <div className="flex lg:hidden items-center flex-1 justify-center px-4">
                        <div className="relative group w-full max-w-[200px] md:max-w-xs">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-slate-400 group-focus-within:text-sky-500 transition-colors" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-9 pr-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all shadow-sm hover:shadow-md"
                            />
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-slate-900 bg-white rounded-lg shadow-sm"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-x-0 top-[80px] z-40 bg-white border-b border-slate-100 overflow-hidden lg:hidden"
                    >
                        <div className="p-6 space-y-4">
                            {navLinks.map((link) => (
                                link.href.startsWith('/') && !link.href.includes('#') ? (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className="block p-4 rounded-xl bg-slate-50 text-slate-900 font-medium hover:bg-sky-50 hover:text-sky-700 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="block p-4 rounded-xl bg-slate-50 text-slate-900 font-medium hover:bg-sky-50 hover:text-sky-700 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                )
                            ))}

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
