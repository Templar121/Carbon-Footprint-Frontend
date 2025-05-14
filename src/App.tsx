import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Calculator from './components/Calculator';
import Testimonials from './components/Testimonials';
import ActionSteps from './components/ActionSteps';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-slate-900 to-emerald-950 text-gray-100 font-sans overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Calculator />
      <ActionSteps />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;