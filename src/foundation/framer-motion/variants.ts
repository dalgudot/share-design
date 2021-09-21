// New variants
export const buttonVariants = {
  whileHover: {
    scale: 1.05,
  },

  whileTap: {
    scale: 0.93,
    opacity: 0.7,
    transition: {
      duration: 0.1,
      ease: 'easeIn',
    },
  },
};

export const textButtonVariants = {
  whileHover: {
    scale: 1.02,
    originX: 0.1,
  },

  whileTap: {
    scale: 0.98,
    opacity: 0.7,
    originX: 0.4,
    transition: {
      duration: 0.1,
      ease: 'easeIn',
    },
  },
};

export const listVariants = {
  whileHover: {
    scale: 1.02,
  },

  whileTap: {
    scale: 0.98,
    opacity: 0.8,
    transition: {
      duration: 0.1,
      ease: 'easeIn',
    },
  },
};

////////////////////////////////////////////////////////////////////////////
// Below is old variants

export const smoothTransition = { ease: [0.43, 0.13, 0.23, 0.96] };

export const stagger = {
  initial: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
      // when: 'afterChildren',
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

export const fadeInOut = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
      // when: 'afterChildren',
    },
  },

  animate: {
    opacity: 1,
    transition: {
      duration: 0.7,
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
    scale: 1.04,
  },

  whileTap: { scale: 0.97 },
};

export const ScaleDownInUpOut = {
  initial: {
    opacity: 0,
    scale: [1, 1.05, 1], // 좌우 스크롤 문제 생길 수 있음
    // y: '-50%',
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },

  animate: {
    opacity: [0, 1],
    scale: [1.1, 1], // 좌우 스크롤 문제 생길 수 있음
    // y: '-50%',
    transition: {
      duration: 0.9,
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
    scale: 1.04,
  },

  whileTap: { scale: 0.97 },
};

export const listUp = {
  initial: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 80 },
    },
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 80, velocity: -100, smoothTransition },
    },
  },

  exit: {
    opacity: 0,
    transition: { duration: 0.2, smoothTransition },
  },

  whileHover: {
    scale: 1.05,
    // originX: 0,
  },

  whileTap: { scale: 0.97 },
};

export const btnHoverTap = {
  whileHover: {
    scale: 1.04,
  },

  whileTap: {
    scale: 0.97,
  },
};

export const vibration = {
  animate: {
    x: [
      0, -1.4, 0, 1.4, 0, -1.4, 0, 1.4, 0, -1.4, 0, 1.4, 0, -1.4, 0, 1.4, 0,
      -1.4, 0, 1.4, 0, -1.4, 0, 1.4, 0,
    ],
    transition: {
      duration: 0.55,
      // smoothTransition,
    },
  },

  whileHover: {
    scale: 1.02,
    filter: 'brightness(1.3)',
    originX: 0.1,
  },

  whileTap: {
    scale: 0.98,
    opacity: 0.8,
    originX: 0.4,
    transition: {
      duration: 0.1,
      ease: 'easeInOut',
    },
  },
};
