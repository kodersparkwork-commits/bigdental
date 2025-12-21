import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FranchisePage from './components/FranchisePage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fafaf9]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/franchise" element={<FranchisePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
