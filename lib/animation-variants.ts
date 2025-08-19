export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing inspired by Saul Bass
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export const cardVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.9,
    rotateX: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.2,
    },
  },
};

export const inputVariants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  focus: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  error: {
    x: [-10, 10, -10, 10, 0],
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export const buttonVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
  hover: {
    scale: 1.02,
    y: -2,
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.98,
    y: 0,
    transition: {
      duration: 0.1,
      ease: 'easeInOut',
    },
  },
};

export const validationVariants = {
  initial: { opacity: 0, scale: 0.8, rotate: -180 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.4,
      ease: 'backOut',
      delay: 0.1,
    },
  },
  success: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
};

export const errorVariants = {
  initial: { opacity: 0, y: -10, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.9,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

export const dashboardVariants = {
  container: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    initial: { opacity: 0, y: 30, scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },
};
