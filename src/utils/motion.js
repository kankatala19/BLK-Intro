// Premium Framer Motion animation configurations and reusable variants

export const transitionDefaults = {
  ease: [0.21, 0.47, 0.32, 0.98],
  duration: 0.6,
};

export const viewportOnce = {
  once: true,
  amount: 0.15,
};

export const fadeIn = (direction = 'up', delay = 0) => ({
  hidden: {
    y: direction === 'up' ? 24 : direction === 'down' ? -24 : 0,
    x: direction === 'left' ? 24 : direction === 'right' ? -24 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      ...transitionDefaults,
      delay,
    },
  },
});

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const scaleIn = (delay = 0) => ({
  hidden: {
    scale: 0.94,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ...transitionDefaults,
      delay,
    },
  },
});

export const heroHeadlineVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
