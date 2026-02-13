import { motion } from 'framer-motion';

const FadeIn = ({ children, direction, delay, className }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'right' ? -20 : direction === 'left' ? 20 : 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay || 0,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;