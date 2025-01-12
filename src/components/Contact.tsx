import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
        Get in Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold">Let's Connect</h3>
          <p className="text-purple-200">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
          
          <div className="flex flex-col space-y-4">
            <a href="#" className="flex items-center space-x-3 text-purple-300 hover:text-purple-100">
              <Mail className="w-6 h-6" />
              <span>john.doe@example.com</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-purple-300 hover:text-purple-100">
              <Github className="w-6 h-6" />
              <span>github.com/johndoe</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-purple-300 hover:text-purple-100">
              <Linkedin className="w-6 h-6" />
              <span>linkedin.com/in/johndoe</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ x: 50, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-purple-900/30 border border-purple-500/30 focus:outline-none focus:border-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-purple-900/30 border border-purple-500/30 focus:outline-none focus:border-purple-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-purple-900/30 border border-purple-500/30 focus:outline-none focus:border-purple-400"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium flex items-center justify-center space-x-2 hover:from-purple-700 hover:to-pink-700 transition-colors"
          >
            <span>Send Message</span>
            <Send className="w-5 h-5" />
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;