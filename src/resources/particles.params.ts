export const particles_params = {
  particles: {
    color: {
      value: '#7a7a7a',
    },
    number: {
      value: 200,
    },
    size: {
      value: 1,
    },
    links: {
      color: {
        value: '#7a7a7a',
      },
      width: 3,
      opacity: 0.1,
    },

    move: {
      speed: 0.2,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 0.2,
        },
      },
    },
  },
};
