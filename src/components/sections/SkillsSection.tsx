import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaNpm,
  FaDatabase,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Skill } from "../../types"; // Ensure Skill type is defined in types folder

const SkillsSection: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const skills: Skill[] = [
    { name: "React", level: 90, icon: <FaReact />, color: "#61DAFB" },
    { name: "JavaScript", level: 85, icon: <FaJs />, color: "#F7DF1E" },
    { name: "TypeScript", level: 80, icon: <SiTypescript />, color: "#3178C6" },
    { name: "HTML5", level: 95, icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", level: 90, icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "Next.js", level: 80, icon: <SiNextdotjs />, color: "#000000" },
    { name: "Node.js", level: 85, icon: <FaNodeJs />, color: "#68A063" },
    { name: "Figma", level: 75, icon: <FaFigma />, color: "#F24E1E" },
    { name: "Git", level: 85, icon: <FaGitAlt />, color: "#F05032" },
    { name: "NPM", level: 75, icon: <FaNpm />, color: "#CB3837" },
    { name: "Databases", level: 80, icon: <FaDatabase />, color: "#4DB33D" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Here are some of the technologies and tools I'm skilled in. I am always learning
            and adapting to new technologies to improve my development workflow.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={skillVariants}
              className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
            >
              <div style={{ color: skill.color, fontSize: "2rem" }}>
                {skill.icon}
              </div>
              <p className="mt-2 text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
