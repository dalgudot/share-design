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
      // when: 'beforeChildren',
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

export const colorVariants = (color: string) => {
  return {
    initial: {
      // background: `linear-gradient(${color})`,
    },

    animate: {
      // scale: [1, 0.9, 1],
      // opacity: [1, 0.9, 1],
      x: [0, -1, 1, -0.5, 0.5, 0],
      // background: [
      //   `linear-gradient(${color})`,
      //   'linear-gradient(24deg, #e66465, #9198e5)',
      //   `linear-gradient(${color})`,
      // ],
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
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

    whileTap: {
      scale: 0.97,
    },
  };
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

export const listUp = {
  initial: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },

  exit: {
    opacity: 0,
    transition: { duration: 0.2, smoothTransition },
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
    y: 4,
    scale: 1.03,
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: 'easeInOut',
    },
  },

  whileHover: {
    scale: 1.05,
  },

  whileTap: { scale: 0.97 },
};
