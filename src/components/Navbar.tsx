import React from 'react';
import { motion } from 'framer-motion';

const navItems = ['home', 'about', 'projects', 'contact'];

const Navbar = () => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-purple-900/80 backdrop-blur-lg px-8 py-4 rounded-full border border-purple-500/30">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <motion.li 
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => handleClick(item)}
                className="text-white capitalize hover:text-purple-300 transition-colors"
              >
                {item}
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;