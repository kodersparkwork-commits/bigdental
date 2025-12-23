import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Search, User, LogOut, LayoutDashboard } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ scrollToSection, refs }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Franchise', href: '/franchise' },
        { name: 'Find A Dentist', href: '/find-dentist' },
        { name: 'Contact', href: '/contact-us' },
    ];

    const handleNavClick = (link) => {
        setIsOpen(false);
        if (link.href.startsWith('#') && scrollToSection && link.sectionRef) {
            scrollToSection(link.sectionRef);
        }
    };

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
                                <button
                                    key={link.name}
                                    onClick={() => handleNavClick(link)}
                                    className="px-5 py-2.5 rounded-full text-slate-600 font-medium text-sm hover:text-sky-700 hover:bg-white hover:shadow-sm transition-all duration-300"
                                >
                                    {link.name}
                                </button>
                            )
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        {user ? (
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-semibold text-slate-700">
                                    Hello, {user.fullName?.split(' ')[0]}
                                </span>
                                {user.role !== 'admin' && (
                                    <Link to="/profile" className="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors" title="My Profile">
                                        <User size={20} />
                                    </Link>
                                )}
                                <button
                                    onClick={handleLogout}
                                    className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-600 font-bold text-sm hover:bg-red-50 hover:text-red-600 transition-all flex items-center gap-2"
                                >
                                    <LogOut size={16} /> Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link to="/login" className="px-6 py-2.5 rounded-full text-slate-700 font-bold text-sm hover:bg-slate-100 transition-all">
                                    Login
                                </Link>
                            </div>
                        )}
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
                        className="fixed inset-x-0 top-[80px] z-40 bg-white border-b border-slate-100 overflow-hidden lg:hidden shadow-xl"
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
                                    <button
                                        key={link.name}
                                        onClick={() => handleNavClick(link)}
                                        className="block w-full text-left p-4 rounded-xl bg-slate-50 text-slate-900 font-medium hover:bg-sky-50 hover:text-sky-700 transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                )
                            ))}

                            <div className="pt-4 border-t border-slate-100 space-y-3">
                                {user ? (
                                    <>
                                        <div className="px-4 py-2 text-sm font-semibold text-slate-500">
                                            Signed in as {user.email}
                                        </div>
                                        {user.role !== 'admin' && (
                                            <Link to="/profile" onClick={() => setIsOpen(false)} className="block w-full p-4 rounded-xl bg-slate-100 text-slate-700 font-bold text-center">
                                                My Profile
                                            </Link>
                                        )}
                                        <button onClick={() => { handleLogout(); setIsOpen(false); }} className="block w-full p-4 rounded-xl border border-red-200 text-red-600 font-bold text-center hover:bg-red-50">
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full p-4 rounded-xl bg-slate-100 text-slate-700 font-bold text-center">
                                            Login
                                        </Link>
                                        <Link to="/partner-registration" onClick={() => setIsOpen(false)} className="block w-full p-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-center shadow-lg shadow-blue-500/30">
                                            Partner with us
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
