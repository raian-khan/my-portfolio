import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  return (
    <motion.h1
      className="text-4xl font-bold"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {text}
    </motion.h1>
  );
};

export default AnimatedText;
