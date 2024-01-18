import { assignVars, style } from '@vanilla-extract/css';

import { vars } from './contract.css';

const typeface = {
  brand: 'var(--font-brand)',
  plain: 'var(--font-plain)',
} as const;

const fontSize = [
  '0.625rem', // 10px
  '0.75rem', // 12px
  '0.875rem', // 14px
  '1rem', // 16px
  '1.125rem', // 18px
  '1.25rem', // 20px
  '1.375rem', // 22px
  '1.5rem', // 24px
  '1.75rem', // 28px
  '1.875rem', // 30px
  '2rem', // 32px
  '2.25rem', // 36px
  '3rem', // 48px
  '3.625rem', // 58px
] as const;

const fontWeight = {
  regular: '400',
  medium: '500',
} as const;

export const theme = style({
  vars: assignVars(vars, {
    color: {
      brand: {
        primary: '#002e49',
        onPrimary: '#ffffff',
        primaryContainer: '#1b5175',
        onPrimaryContainer: '#dbecff',

        secondary: '#526167',
        onSecondary: '#ffffff',
        secondaryContainer: '#c0d0d7',
        onSecondaryContainer: '#2e3d43',

        tertiary: '#5b4f26',
        onTertiary: '#ffffff',
        tertiaryContainer: '#827447',
        onTertiaryContainer: '#ffffff',
      },

      neutral: {
        surfaceDim: '#d9dadd',
        surface: '#f9f9fd',
        surfaceBright: '#f9f9fd',
        onSurface: '#191c1e',
        onSurfaceVariant: '#41474e',

        surfaceContainerLowest: '#ffffff',
        surfaceContainerLow: '#f3f3f7',
        surfaceContainer: '#edeef1',
        surfaceContainerHigh: '#e7e8eb',
        surfaceContainerHighest: '#e2e2e6',

        outline: '#72787f',
        outlineVariant: '#c1c7cf',
      },

      status: {
        error: '#9c0013',
        onError: '#ffffff',
        errorContainer: '#da1e28',
        onErrorContainer: '#ffffff',

        success: '#4b6700',
        onSuccess: '#ffffff',
        successContainer: '#9cc447',
        onSuccessContainer: '#202f00',

        warning: '#825500',
        onWarning: '#ffffff',
        warningContainer: '#ffb647',
        onWarningContainer: '#4b2f00',
      },
    },

    state: {
      hovered: {
        opacity: '0.08',
      },
      focused: {
        opacity: '0.12',
      },
      pressed: {
        opacity: '0.2',
      },
    },

    typeface,

    typography: {
      display: {
        large: {
          font: typeface.brand,
          size: fontSize[13],
          weight: fontWeight.regular,
          tracking: '0',
          lineHeight: '1em',
        },
        medium: {
          font: typeface.brand,
          size: fontSize[12],
          weight: fontWeight.regular,
          tracking: '0',
          lineHeight: '1em',
        },
        small: {
          font: typeface.brand,
          size: fontSize[11],
          weight: fontWeight.regular,
          tracking: '0',
          lineHeight: '1em',
        },
      },

      headline: {
        large: {
          font: typeface.brand,
          size: fontSize[10],
          weight: fontWeight.regular,
          tracking: '0',
          lineHeight: '1em',
        },
        medium: {
          font: typeface.brand,
          size: fontSize[8],
          weight: fontWeight.regular,
          tracking: '0',
          lineHeight: '1em',
        },
        small: {
          font: typeface.brand,
          size: fontSize[7],
          weight: fontWeight.regular,
          tracking: '0',
          lineHeight: '1em',
        },
      },

      title: {
        large: {
          font: typeface.plain,
          size: fontSize[5],
          weight: fontWeight.medium,
          tracking: '0',
          lineHeight: '1em',
        },
        medium: {
          font: typeface.plain,
          size: fontSize[3],
          weight: fontWeight.medium,
          tracking: '0.15px',
          lineHeight: '24px',
        },
        small: {
          font: typeface.plain,
          size: fontSize[2],
          weight: fontWeight.medium,
          tracking: '0',
          lineHeight: '1em',
        },
      },

      label: {
        large: {
          font: typeface.plain,
          size: fontSize[2],
          weight: fontWeight.medium,
          tracking: '0.1px',
          lineHeight: '20px',
        },
        medium: {
          font: typeface.plain,
          size: fontSize[1],
          weight: fontWeight.medium,
          tracking: '0',
          lineHeight: '1em',
        },
        small: {
          font: typeface.plain,
          size: fontSize[0],
          weight: fontWeight.medium,
          tracking: '0',
          lineHeight: '1em',
        },
      },

      body: {
        large: {
          font: typeface.plain,
          size: fontSize[3],
          weight: fontWeight.regular,
          tracking: '0.5px',
          lineHeight: '24px',
        },
        medium: {
          font: typeface.plain,
          size: fontSize[2],
          weight: fontWeight.regular,
          tracking: '0.25px',
          lineHeight: '20px',
        },
        small: {
          font: typeface.plain,
          size: fontSize[1],
          weight: fontWeight.regular,
          tracking: '0.4px',
          lineHeight: '16px',
        },
      },
    },

    spacing: {
      xxs: '0.125rem', // 2px
      xs: '0.25rem', // 4px
      sm: '0.5rem', // 8px
      md: '1rem', // 16px
      lg: '2rem', // 32px
      xl: '4rem', // 64px
      xxl: '8rem', // 128px
    },

    size: {
      xxs: '1rem', // 16px
      xs: '2rem', // 32px
      sm: '4rem', // 64px
      md: '8rem', // 128px
      lg: '16rem', // 256px
      xl: '32rem', // 512px
      xxl: '64rem', // 1024px
    },

    radius: {
      xs: '0.125rem', // 2px
      sm: '0.25rem', // 4px
      md: '0.5rem', // 8px
      lg: '0.75rem', // 12px
      xl: '1rem', // 16px
      xxl: '1.5rem', // 24px
      full: '50%',
    },

    elevation: {
      minimal:
        '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
      low: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
      moderate:
        '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
      high: '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
      peak: '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
    },

    duration: {
      swift: '150ms',
      short: '250ms',
      standard: '300ms',
      long: '400ms',
      extended: '500ms',
    },

    easing: {
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  }),

  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: assignVars(vars.color, {
        brand: {
          primary: '#9ccbf6',
          onPrimary: '#003351',
          primaryContainer: '#003757',
          onPrimaryContainer: '#99c8f3',

          secondary: '#ddedf5',
          onSecondary: '#243338',
          secondaryContainer: '#b3c3ca',
          onSecondaryContainer: '#26343a',

          tertiary: '#d7c691',
          onTertiary: '#3a3009',
          tertiaryContainer: '#827447',
          onTertiaryContainer: '#ffffff',
        },

        neutral: {
          surfaceDim: '#111416',
          surface: '#111416',
          surfaceBright: '#37393c',
          onSurface: '#e2e2e6',
          onSurfaceVariant: '#c1c7cf',

          surfaceContainerLowest: '#0c0e11',
          surfaceContainerLow: '#191c1e',
          surfaceContainer: '#1e2022',
          surfaceContainerHigh: '#282a2d',
          surfaceContainerHighest: '#333538',

          outline: '#8b9199',
          outlineVariant: '#41474e',
        },

        status: {
          error: '#ffb3ad',
          onError: '#680009',
          errorContainer: '#ce1121',
          onErrorContainer: '#ffffff',

          success: '#b2db5b',
          onSuccess: '#253500',
          successContainer: '#8bb136',
          onSuccessContainer: '#121c00',

          warning: '#ffd9ab',
          onWarning: '#452b00',
          warningContainer: '#f7a500',
          onWarningContainer: '#3c2500',
        },
      }),
    },
  },
});
