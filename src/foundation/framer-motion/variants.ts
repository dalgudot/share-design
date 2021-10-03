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
      // staggerDirection: -1,
      // when: 'afterChildren',
    },
  },

  animate: {
    transition: {
      // when: 'beforeChildren',
      staggerChildren: 0.2,
      // delayChildren: 0.2,
    },
  },

  exit: {
    transition: {
      // when: 'beforeChildren',
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

export const listUp = {
  initial: {
    scale: 1.05,
    y: 30,
    opacity: 0,
    transition: {
      y: { stiffness: 80 },
    },
  },

  animate: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      y: { duration: 0.9, stiffness: 40, velocity: -100, smoothTransition },
    },
  },

  exit: {
    opacity: 0,
    transition: { duration: 0.2, smoothTransition },
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
};

export const ModalScaleEffect = {
  initial: {
    opacity: 0,
    scale: 1.2,
  },

  animate: {
    opacity: [0, 1],
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },

  exit: {
    opacity: 0,
    scale: 1.2,
    y: 10,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
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
