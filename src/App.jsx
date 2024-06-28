import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
