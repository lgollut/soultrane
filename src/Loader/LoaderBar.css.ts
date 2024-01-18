import { createVar, keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../styles/contract.css';
import { components } from '../styles/layers.css';
import { transition } from '../styles/transition';

export const loaderBarHeightVar = createVar();

const loaderBarAnimationLong = keyframes({
  '0%': {
    left: '-35%',
    right: '100%',
  },
  '60%': {
    left: '100%',
    right: '-90%',
  },
  '100%': {
    left: '100%',
    right: '-90%',
  },
});

const loaderBarAnimationShort = keyframes({
  '0%': {
    left: '-200%',
    right: '100%',
  },
  '60%': {
    left: '107%',
    right: '-8%',
  },
  '100%': {
    left: '107%',
    right: '-8%',
  },
});

export const loaderBarStyle = style({
  '@layer': {
    [components]: {
      overflow: 'hidden',
      width: '100%',
      height: loaderBarHeightVar,

      position: 'relative',

      backgroundColor: vars.color.neutral.surfaceContainer,
      backgroundClip: 'padding-box',
      borderRadius: vars.radius.md,

      transition: transition(['opacity', 'visibility']),

      vars: {
        [loaderBarHeightVar]: vars.spacing.xs,
      },
    },
  },
});

export const barsStyle = recipe({
  base: {
    '@layer': {
      [components]: {
        display: 'block',
        height: loaderBarHeightVar,

        position: 'absolute',

        backgroundColor: vars.color.brand.secondary,
        backgroundClip: 'padding-box',
        borderRadius: vars.radius.md,

        willChange: 'left, right',
        animationFillMode: 'forwards',
        animationIterationCount: 'infinite',
        animationDuration: '2.1s',
      },
    },
  },

  variants: {
    active: {
      true: {
        '@layer': {
          [components]: {
            animationPlayState: 'running',
          },
        },
      },
      false: {
        '@layer': {
          [components]: {
            animationPlayState: 'paused',
          },
        },
      },
    },
  },
});

export const barOneStyle = style({
  '@layer': {
    [components]: {
      animationName: loaderBarAnimationLong,
      animationTimingFunction: 'cubic-bezier(0.65, 0.815, 0.735, 0.395)',
    },
  },
});

export const barTwoStyle = style({
  '@layer': {
    [components]: {
      animationName: loaderBarAnimationShort,
      animationTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
      animationDelay: '1.15s',
    },
  },
});
