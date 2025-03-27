import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';

// Import project images from assets folder
import bdhpImg from '../../assets/bdhp.jpg';
import potatoImg from '../../assets/potato.jpg';
import foodImg from '../../assets/food.jpeg';
import portfolioImg from '../../assets/portfolio.png';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
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
      title: 'House Price Prediction in Bangladesh',
      description:
        'Predicting house prices in Bangladesh using machine learning models. GradientBoostingRegressor and RandomForestRegressor performed best.',
      image: bdhpImg,
      tags: ['Python', 'Machine Learning Models', 'TensorFlow', 'Data Analysis'],
      githubUrl: 'https://github.com/raian-khan/BD-home-prices',
    },
    {
      title: 'Tomato Disease Classification',
      description:
        'Classifying tomato diseases using a Convolutional Neural Network (CNN). Dataset sourced from Kaggle with 10 disease classes.',
      image: potatoImg,
      tags: ['Python', 'CNN', 'TensorFlow', 'Keras'],
      githubUrl: 'https://github.com/raian-khan/tomato-disease-CNN',
    },
    {
      title: 'FoodOrdery',
      description:
        'A food ordering website built with HTML, CSS, and PHP where customers can place and track orders, with an admin panel for management.',
      image: foodImg,
      tags: ['PHP', 'API', 'CSS3', 'HTML5'],
      githubUrl: 'https://github.com/raian-khan/Online-Food-Order-with-PHP-and-MySQL',
    },
    {
      title: 'Portfolio Website',
      description:
        'A responsive portfolio website built with TypeScript, React, and TailwindCSS showcasing projects and skills.',
      image: portfolioImg,
      tags: ['React', 'TypeScript', 'TailwindCSS'],
      githubUrl: 'https://github.com/raian-khan/my-portfolio',
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
            Here are some of the projects I've worked on. Each project was an opportunity to learn something new and refine my skills.
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
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-gray-800 rounded-full"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-xl" />
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
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
