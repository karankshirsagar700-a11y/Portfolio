import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import mg34 from  '../assets/download.jfif'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce website with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.',
      image: 'https://via.placeholder.com/400x250/00d4ff/ffffff?text=E-Commerce',
      tech: ['React', 'Node.js', 'MongoDB'],
      GitHub: '#',
      live: '#',
    },
    {
      title: 'Weather App',
      description: 'A responsive weather application that provides real-time weather data using OpenWeatherMap API. Built with modern React and styled with Tailwind CSS.',
      image: 'https://via.placeholder.com/400x250/00d4ff/ffffff?text=Weather+App',
      tech: ['React', 'API', 'Tailwind'],
      GitHub: '#',
      live: '#',
    },
    {
      title: 'Task Management Tool',
      description: 'A collaborative task management application with drag-and-drop functionality. Includes real-time updates and team collaboration features.',
      image: 'https://via.placeholder.com/400x250/00d4ff/ffffff?text=Task+Manager',
      tech: ['React', 'Firebase', 'Material-UI'],
      GitHub: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            My
          </span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-pink-400">
            Projects
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img src={mg34}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.GitHub}
                    className="p-2 bg-white rounded-full text-black"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="p-2 bg-white rounded-full text-black"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              <div className="p-8 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-full text-xs font-medium backdrop-blur-md group-hover:border-accent/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
