import React from 'react'
import Intro from './components/Intro';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Timeline />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
