import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Programs />
      <Footer />
    </div>
  );
}

export default App;