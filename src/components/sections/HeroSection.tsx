import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiX } from 'react-icons/si'; // For X (formerly Twitter) icon
import profileImg from '../../assets/profile.jpg';

const HeroSection: React.FC = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const roles = ['Software Engineer', 'AI/ML Enthusiast'];
  const fullText = `I'm Md. Nurul Yousuf Khan`;

  // Typewriter effect for name
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Animation variants for social icons
  const socialVariants = {
    initial: { scale: 0 },
    animate: (i: number) => ({
      scale: 1,
      transition: {
        delay: 1.5 + (i * 0.2),
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    })
  };

  // Role text cycle logic
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  useEffect(() => {
    const roleTimeout = setInterval(() => {
      setCurrentRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
    }, 2000); // Change role every 2 seconds
    return () => clearInterval(roleTimeout);
  }, [roles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center">
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-0">
            <span className="inline-block">{text}</span>
            <span className="inline-block animate-blink">|</span>
          </h1>
          
          <motion.div
            className="h-12 my-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.h2 
              key={roles[currentRoleIndex]}
              className="text-xl md:text-2xl text-primary"
              initial={{ y: 50, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1 
              }}
              transition={{ 
                delay: 1.2,
                duration: 0.5,
              }}
            >
              {roles[currentRoleIndex]}
            </motion.h2>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            Building beautiful, functional web experiences with modern technologies.
            Let's create something amazing together!
          </motion.p>
          
          <motion.div 
            className="flex space-x-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <motion.a 
              href="#projects" 
              className="px-6 py-3 bg-primary text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          
          <div className="flex mt-8 space-x-4 justify-center md:justify-start">
            <motion.a
              href="https://www.linkedin.com/in/nurulyousufkhan/"
              target="_blank"
              className="text-xl p-2 rounded-full border border-gray-300 hover:border-primary hover:text-primary transition-colors duration-300"
              custom={0}
              variants={socialVariants}
              initial="initial"
              animate="animate"
              whileHover={{ y: -5 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/raian-khan"
              target="_blank"
              className="text-xl p-2 rounded-full border border-gray-300 hover:border-primary hover:text-primary transition-colors duration-300"
              custom={1}
              variants={socialVariants}
              initial="initial"
              animate="animate"
              whileHover={{ y: -5 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://x.com/raian_khaan"
              target="_blank"
              className="text-xl p-2 rounded-full border border-gray-300 hover:border-primary hover:text-primary transition-colors duration-300"
              custom={2}
              variants={socialVariants}
              initial="initial"
              animate="animate"
              whileHover={{ y: -5 }}
            >
              <SiX /> {/* This is the new X logo */}
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-500 blur-md opacity-50 animate-pulse"></div>
            <img 
              src={profileImg} 
              alt="Profile" 
              className="relative rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-800"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
