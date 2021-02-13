export const smoothTransition = { ease: [0.43, 0.13, 0.23, 0.96] };

export const stagger = {
  initial: {
    transition: {
      staggerChildren: 0.07,
    },
  },

  animate: {
    transition: {
      staggerChildren: 0.07,
      // delayChildren: 0.2,
    },
  },

  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

export const smoothUp = {
  initial: {
    y: 12,
    scale: 0.99,
    opacity: 0,
  },

  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      smoothTransition,
    },
  },

  exit: {
    y: 4,
    scale: 1.03,
    opacity: 0,
    transition: {
      duration: 0.2,
      smoothTransition,
    },
  },

  whileHover: {
    scale: 1.05,
  },

  whileTap: { scale: 0.97 },
};

export const fadeInOut = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
};
