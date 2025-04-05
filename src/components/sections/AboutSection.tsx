import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUserGraduate, FaBriefcase } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  const timelineItems = [
    {
      year: '2020 - 2024',
      title: 'Bachelor of Science in Computer Science and Engineering',
      place: 'Ahsanullah University of Science and Technology',
      icon: <FaUserGraduate />,
    },
    {
      year: '2021 - 2024',
      title: 'Society Representative',
      place: 'AUST CSE Society',
      icon: <FaBriefcase />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          custom={0}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg">
            I am a Computer Science and Engineering graduate who is passionate about problem-solving, software development and artificial
            intelligence. 
            I am proficient in multiple coding languages, data structures and algorithms, and software development principles gained through coursework and personal projects, and have a strong passion for learning and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Introduction */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            custom={1}
            className="space-y-6 text-center md:text-left"
          >
            <h3 className="text-2xl font-bold">Who I Am</h3>
            <p>
              I am a dedicated software engineer with passionate about building scalable web applications.
              My expertise lies in full-stack development with modern frameworks based on different languages.
              I am seeking an opportunity to apply my skills professionally and grow as a software engineer.
            </p>
            <p>
              When I'm not coding, I explore and learn new technologies, play games.
            </p>

            {/* Hire Me & CV Download Buttons */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-primary text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
              <motion.a 
                href={`${process.env.PUBLIC_URL}/cv_raian.pdf`} 
                download
                className="px-6 py-3 bg-primary text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>


            </div>
          </motion.div>

          {/* Right Side - Timeline */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            custom={2}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={controls}
                  variants={{
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: 2 + index * 0.2, duration: 0.5 },
                    },
                  }}
                >
                  <div className="text-primary text-xl p-3 bg-blue-50 dark:bg-gray-700 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {item.year}
                    </div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <div className="text-gray-600 dark:text-gray-300">{item.place}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;