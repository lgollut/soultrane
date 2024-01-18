import { createVar } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../styles/contract.css';
import { components } from '../styles/layers.css';
import { tintVar } from '../styles/sprinkles.css';
import { transition } from '../styles/transition';

const size = createVar();

export const buttonStyle = recipe({
  base: {
    '@layer': {
      [components]: {
        paddingBlock: calc.multiply(size, 0.5),
        overflow: 'hidden',

        textTransform: 'uppercase',
        whiteSpace: 'nowrap',

        transition: transition(['background-color', 'box-shadow', 'color']),

        ':disabled': {
          cursor: 'not-allowed',
        },

        '::before': {
          content: '""',

          width: '100%',
          height: '100%',

          position: 'absolute',
          top: 0,
          left: 0,

          backgroundColor: tintVar,
          opacity: 0,
          borderRadius: 'inherit',

          transition: transition(['opacity'], {
            duration: 'swift',
            easing: 'inOut',
          }),
          pointerEvents: 'none',
        },

        selectors: {
          '&:disabled': {
            color: `color-mix(in srgb, ${tintVar}, transparent 42%)`,
          },

          '&:focus, &:focus-visible': {
            outline: 'none',
          },

          '&:not(:disabled):hover::before': {
            opacity: vars.state.hovered.opacity,
          },

          '&:not(:disabled):focus::before, &:not(:disabled):focus-visible::before':
            {
              opacity: vars.state.focused.opacity,
            },

          '&:not(:disabled)[aria-pressed="true"]::before, &:not(:disabled)[aria-checked="true"]::before':
            {
              opacity: vars.state.pressed.opacity,
            },

          '&:not(:disabled, :hover)[aria-pressed="false"]::before, &:not(:disabled, :hover)[aria-checked="false"]::before':
            {
              opacity: 0,
            },

          '&:not(:disabled):active::before': {
            opacity: vars.state.pressed.opacity,
          },
        },
      },
    },
  },

  variants: {
    variant: {
      bare: {
        '@layer': {
          [components]: {
            color: `unset`,

            backgroundColor: 'unset',
          },
        },
      },
      filled: {
        '@layer': {
          [components]: {
            selectors: {
              '&:disabled': {
                backgroundColor: `color-mix(in srgb, ${tintVar}, transparent 88%)`,
              },

              '&:hover:not(:disabled)': {
                boxShadow: vars.elevation.minimal,
              },
            },
          },
        },
      },
      outlined: {
        '@layer': {
          [components]: {
            color: tintVar,

            backgroundColor: 'transparent',
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: tintVar,

            selectors: {
              '&:disabled': {
                borderColor: `color-mix(in srgb, ${tintVar}, transparent 88%)`,
              },
            },
          },
        },
      },
      ghost: {
        '@layer': {
          [components]: {
            color: tintVar,

            backgroundColor: 'transparent',
          },
        },
      },
    },

    size: {
      sm: {
        '@layer': {
          [components]: {
            vars: {
              [size]: vars.spacing.sm,
            },
          },
        },
      },
      md: {
        '@layer': {
          [components]: {
            vars: {
              [size]: vars.spacing.md,
            },
          },
        },
      },
      lg: {
        '@layer': {
          [components]: {
            vars: {
              [size]: vars.spacing.lg,
            },
          },
        },
      },
    },

    flow: {
      reverse: {
        '@layer': {
          [components]: {
            flexDirection: 'row-reverse',
          },
        },
      },
    },

    iconOnly: {
      true: {
        '@layer': {
          [components]: {
            paddingInline: calc.multiply(size, 0.5),
          },
        },
      },
    },
  },
});
