import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MarketMaking from './components/MArketMAking';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <MarketMaking />
    </div>
  );
}

export default App;