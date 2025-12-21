import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Mission from './components/Mission';
import Treatments from './components/Treatments';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Join from './components/Join';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Mission />
      <Features />
      <Treatments />
      <WhyChooseUs />
      <About />
      <HowItWorks />
      <Join />
      <Footer />
    </div>
  );
}

export default App
