import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

const ProjectsSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, cart functionality, and payment processing.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'A Kanban-style task management application that allows users to create, assign, and track tasks across different stages of completion.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'TypeScript', 'Redux', 'Firebase'],
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that displays current conditions and forecasts for any location. Features include dynamic backgrounds based on weather conditions.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['JavaScript', 'API', 'CSS3', 'HTML5'],
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and TailwindCSS showcasing projects and skills.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'TypeScript', 'TailwindCSS'],
      githubUrl: '#',
      demoUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Here are some of the projects I've worked on. Each project was an opportunity to
            learn something new and refine my skills.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.githubUrl}
                      className="p-3 bg-white text-gray-800 rounded-full"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="text-xl" />
                    </motion.a>
                    <motion.a
                      href={project.demoUrl}
                      className="p-3 bg-white text-gray-800 rounded-full"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;