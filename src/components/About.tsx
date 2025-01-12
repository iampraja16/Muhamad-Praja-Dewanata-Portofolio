import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Cpu, Database } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { icon: <Brain className="w-6 h-6" />, name: 'Frontend Development' },
    { icon: <Database className="w-6 h-6" />, name: 'Backend Development' },
    { icon: <Cpu className="w-6 h-6" />, name: 'System Architecture' },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
        About Me
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="group relative overflow-hidden rounded-lg"
        >
          {/* Cyberpunk frame effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          
          {/* Image container with hover effect */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
              alt="Profile"
              className="w-full rounded-lg shadow-2xl border-2 border-purple-500/30 transition-all duration-500 filter grayscale group-hover:grayscale-0 hover:scale-105"
            />
            
            {/* Cyberpunk overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0411]/50 via-transparent to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#0a0411] to-transparent"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-2 left-2 w-20 h-1 bg-purple-500/50"></div>
            <div className="absolute top-2 left-2 w-1 h-20 bg-purple-500/50"></div>
            <div className="absolute bottom-2 right-2 w-20 h-1 bg-pink-500/50"></div>
            <div className="absolute bottom-2 right-2 w-1 h-20 bg-pink-500/50"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <p className="text-lg text-purple-200">
            I'm a passionate developer with expertise in creating innovative digital solutions.
            With years of experience in both frontend and backend development, I bring ideas to life
            through clean code and elegant design.
          </p>

          <div className="grid gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ x: 50, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-center space-x-3 bg-[#1a0826] p-4 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-colors"
              >
                <div className="text-purple-400">
                  {skill.icon}
                </div>
                <span className="text-purple-100">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;