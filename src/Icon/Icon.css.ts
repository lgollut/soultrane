import { createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { components } from '../styles/layers.css';

export const iconSizeVar = createVar();

export const iconStyle = recipe({
  base: {
    '@layer': {
      [components]: {
        width: iconSizeVar,
        height: iconSizeVar,

        vars: {
          [iconSizeVar]: '1.25rem',
        },
      },
    },
  },
  variants: {
    size: {
      sm: {
        '@layer': {
          [components]: {
            vars: {
              [iconSizeVar]: '1rem',
            },
          },
        },
      },
      md: {
        '@layer': {
          [components]: {
            vars: {
              [iconSizeVar]: '1.25rem',
            },
          },
        },
      },
      lg: {
        '@layer': {
          [components]: {
            vars: {
              [iconSizeVar]: '1.5rem',
            },
          },
        },
      },
      xl: {
        '@layer': {
          [components]: {
            vars: {
              [iconSizeVar]: '2rem',
            },
          },
        },
      },
    },
  },
});
