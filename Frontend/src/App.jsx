import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Mission from './components/Mission';
import Treatments from './components/Treatments';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Join from './components/Join';
import Footer from './components/Footer';
import PartnerRegistration from './components/PartnerRegistration';
import FranchisePage from './components/FranchisePage';
import FindDentistPage from './components/FindDentistPage';
import ContactPage from './components/ContactPage';
import ScrollToTop from './components/ScrollToTop';

/* Auth Components */
import { AuthProvider } from './context/AuthContext';
import LoginPage from './components/LoginPage';
import AdminLoginPage from './components/AdminLoginPage';
import ClinicProfile from './components/ClinicProfile';
import AdminDashboard from './components/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

const AppContent = () => {
  const location = useLocation();
  const isRegistrationPage = location.pathname === '/partner-registration';
  const isFranchisePage = location.pathname === '/franchise';
  const isAuthPage = ['/login', '/profile', '/admin', '/admin-login'].includes(location.pathname);

  // Refs for scrolling sections on Home Page
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const missionRef = useRef(null);
  const treatmentsRef = useRef(null);
  const aboutRef = useRef(null);
  const howItWorksRef = useRef(null);
  const joinRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Navbar logic: Show on Home, Auth pages, Franchise. Hide on Registration. */}
      {!isRegistrationPage && (
        <Navbar
          scrollToSection={location.pathname === '/' ? scrollToSection : () => { }}
          refs={{ heroRef, featuresRef, missionRef, treatmentsRef, aboutRef, howItWorksRef, joinRef, footerRef }}
        />
      )}

      <Routes>
        <Route path="/" element={
          <>
            <div ref={heroRef}><Hero /></div>
            <div ref={featuresRef}><Features /></div>
            <div ref={missionRef}><Mission /></div>
            <div ref={treatmentsRef}><Treatments /></div>
            {/* About moved to separate page */}
            <div ref={howItWorksRef}><HowItWorks /></div>
            <div ref={joinRef}><Join /></div>
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/partner-registration" element={<PartnerRegistration />} />
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="/find-dentist" element={<FindDentistPage />} />

        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/profile" element={
          <ProtectedRoute>
            <ClinicProfile />
          </ProtectedRoute>
        } />
        <Route path="/admin" element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        } />

      </Routes>

      {/* Footer logic: Show everywhere except maybe auth pages if cleaner? Let's show it everywhere for consistency or specific pages. */}
      {!isAuthPage && <div ref={footerRef}><Footer /></div>}
    </div>
  );
};

export default App;
