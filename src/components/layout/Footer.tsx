import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-lg font-bold text-primary">Md. Nurul Yousuf Khan</span>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
              Software Engineer | AI/ML Enthusiast
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/raian-khan"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/nurulyousufkhan"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href="https://x.com/raian_khaan"
              target="_blank"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
              aria-label="X"
            >
              <SiX className="text-xl" />
            </a>
            <a 
              href="mailto:raiankhan8@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope className="text-xl" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>&copy; {currentYear} Nurul Yousuf Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;