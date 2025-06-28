export const slipeUp = (delay = 0) => ({
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});



export const slipeFromSide = (direction = "left", delay) => ({
  initial: {
    x: direction === "left" ? -100 : 100, /* Si direction es "left", x será -100 */
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});