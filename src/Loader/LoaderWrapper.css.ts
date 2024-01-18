import { recipe } from '@vanilla-extract/recipes';

import { components } from '../styles/layers.css';

export const loaderWrapperStyle = recipe({
  variants: {
    active: {
      true: {
        '@layer': {
          [components]: {
            opacity: 1,
            visibility: 'visible',

            animationPlayState: 'running',
          },
        },
      },
      false: {
        '@layer': {
          [components]: {
            opacity: 0,
            visibility: 'hidden',

            animationPlayState: 'paused',
          },
        },
      },
    },
  },
});
