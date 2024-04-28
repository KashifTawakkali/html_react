import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './pages/Client';
import About from './pages/AboutUs';
import Contact from './pages/ContactUs';
// import WhyUs from './components/WhyUs';
// import Skills from './components/Skills';
import Services from './pages/Services';
import Footer from './components/Footer';
import "./App.css"
import Home from './pages/Home';
import { Team } from './pages/Team';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/why-us" element={<WhyUs />} /> */}
            {/* <Route path="/skills" element={<Skills />} /> */}
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
