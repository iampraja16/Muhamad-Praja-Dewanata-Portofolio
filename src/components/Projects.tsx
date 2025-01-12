import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      tags: ["TypeScript", "OpenAI", "Socket.io"]
    },
    {
      title: "Portfolio Generator",
      description: "Dynamic portfolio generator with customizable themes",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      tags: ["Next.js", "TailwindCSS", "Prisma"]
    }
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
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg bg-purple-900/30 border border-purple-500/30"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform group-hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-purple-200 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm bg-purple-700/50 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href="#" className="flex items-center space-x-2 text-purple-300 hover:text-purple-100">
                  <Github className="w-5 h-5" />
                  <span>Code</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-purple-300 hover:text-purple-100">
                  <ExternalLink className="w-5 h-5" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;