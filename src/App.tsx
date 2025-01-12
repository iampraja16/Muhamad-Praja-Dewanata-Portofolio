import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#0a0411] min-h-screen text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <div className="container mx-auto px-4">
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="about" className="min-h-screen">
            <About />
          </section>
          <section id="projects" className="min-h-screen">
            <Projects />
          </section>
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default App;