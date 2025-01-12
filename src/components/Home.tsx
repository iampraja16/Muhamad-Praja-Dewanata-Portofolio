import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypeWriter = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < text.length) {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(c => c + 1);
        } else {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000); // Jeda sebelum mulai menghapus
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(prev => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex(0);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, displayText, isDeleting]);

  return (
    <span className="border-r-2 border-purple-500 pr-1 animate-pulse">
      {displayText}
    </span>
  );
};

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2070"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0411]/70 via-[#0a0411]/80 to-[#0a0411]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Glitch effect container */}
          <div className="relative inline-block mb-6">
            <motion.h1 
              className="text-7xl font-bold mb-4 text-white relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative">
                {/* Glitch effects */}
                <span className="absolute -inset-0.5 text-purple-500 opacity-30 animate-pulse blur-sm">
                  Muhamad Praja Dewanata
                </span>
                <span className="absolute -inset-0.5 text-pink-500 opacity-30 animate-pulse blur-sm" style={{ animationDelay: '0.2s' }}>
                  Muhamad Praja Dewanata
                </span>
                {/* Main text */}
                <span className="relative bg-gradient-to-r from-purple-300 via-purple-100 to-purple-300 text-transparent bg-clip-text">
                  Muhamad Praja Dewanata
                </span>
              </span>
            </motion.h1>
          </div>

          {/* Role with TypeWriter effect */}
          <motion.div
            className="text-2xl text-purple-300 font-light tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <TypeWriter text="IoT Engineer | Project Managing Enthusiast" speed={100} />
          </motion.div>

          {/* Decorative line */}
          <motion.div
            className="mt-8 w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-purple-600 to-transparent"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </motion.div>
      </div>

      {/* Cyberpunk decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0411] to-transparent"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-purple-500/20 text-sm tracking-widest">
        SYSTEM INITIALIZED
      </div>
    </div>
  );
};

export default Home;