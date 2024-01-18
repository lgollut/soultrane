import { createVar, keyframes, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../styles/contract.css';
import { components } from '../styles/layers.css';
import { transition } from '../styles/transition';

export const loaderMoonSizeVar = createVar();
const moonSize = createVar();

const loaderMoonAnimation = keyframes({
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const loaderMoonStyle = recipe({
  base: {
    '@layer': {
      [components]: {
        overflow: 'hidden',
        width: loaderMoonSizeVar,
        height: loaderMoonSizeVar,

        animationName: loaderMoonAnimation,
        animationDuration: '1s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
        animationFillMode: 'forwards',

        transition: transition(['opacity', 'visibility']),
        pointerEvents: 'none',

        vars: {
          [moonSize]: calc.divide(loaderMoonSizeVar, 7),
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
              [loaderMoonSizeVar]: vars.spacing.sm,
            },
          },
        },
      },
      md: {
        '@layer': {
          [components]: {
            vars: {
              [loaderMoonSizeVar]: vars.spacing.md,
            },
          },
        },
      },
      lg: {
        '@layer': {
          [components]: {
            vars: {
              [loaderMoonSizeVar]: vars.spacing.lg,
            },
          },
        },
      },
      xl: {
        '@layer': {
          [components]: {
            vars: {
              [loaderMoonSizeVar]: vars.spacing.xl,
            },
          },
        },
      },
    },
  },
});

export const ellipseStyle = style({
  '@layer': {
    [components]: {
      width: loaderMoonSizeVar,
      height: loaderMoonSizeVar,

      position: 'absolute',
      insetBlockStart: 0,
      insetInlineStart: 0,

      borderRadius: '100%',
      borderWidth: moonSize,
      borderStyle: 'solid',
      borderColor: `color-mix(in srgb, ${vars.color.brand.primary}, transparent 70%)`,
    },
  },
});

export const moonStyle = style({
  '@layer': {
    [components]: {
      width: moonSize,
      height: moonSize,

      position: 'absolute',
      insetBlockStart: calc.subtract(
        calc.divide(loaderMoonSizeVar, 2),
        calc.divide(moonSize, 2),
      ),
      insetInlineStart: 0,

      backgroundColor: vars.color.brand.primary,

      borderRadius: '100%',
    },
  },
});
