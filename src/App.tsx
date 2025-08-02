import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Footer from './components/Footer';

function App() {
  console.log('App component rendering');
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <About />
      <Programs />
      <Footer />
    </div>
  );
}

export default App;