import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import FranchisePage from './components/FranchisePage';
import About from './components/About';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import PartnerRegistration from './components/PartnerRegistration';

// UI Components
import Loader from './components/ui/Loader';
import NotificationProvider from './components/ui/Notification';
import PageTransition from './components/ui/PageTransition';
import ScrollToTop from './components/ScrollToTop';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/franchise"
          element={
            <PageTransition>
              <FranchisePage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/contact-us"
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          }
        />
        <Route
          path="/partner-registration"
          element={
            <PageTransition>
              <PartnerRegistration />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading experience
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <NotificationProvider>
        <div className="min-h-screen bg-slate-50 font-body text-slate-600 selection:bg-sky-500 selection:text-white">
          <AnimatePresence mode="wait">
            {loading ? (
              <Loader key="loader" />
            ) : (
              <>
                <Navbar />
                <AnimatedRoutes />
                <Footer />
              </>
            )}
          </AnimatePresence>
        </div>
      </NotificationProvider>
    </Router>
  );
}

export default App;
