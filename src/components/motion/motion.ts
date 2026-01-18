export const motionConstants = {
  short: 0.28, // seconds
  medium: 0.48,
  ease: [0.2, 0.9, 0.3, 1],
};

export const fadeUp = {
  initial: { opacity: 0, y: 12 },
  enter: { opacity: 1, y: 0, transition: { duration: motionConstants.medium, ease: motionConstants.ease } },
  exit: { opacity: 0, y: 8, transition: { duration: motionConstants.short, ease: motionConstants.ease } },
};

export const hoverScale = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: motionConstants.short } },
};
