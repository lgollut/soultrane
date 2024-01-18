import { createVar } from '@vanilla-extract/css';
import { defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from '../contract.css';
import { utilities } from '../layers.css';

export const tintVar = createVar();
export const onTintVar = createVar();

export const unconditionalProperties = defineProperties({
  '@layer': utilities,

  properties: {
    typography: {
      displayLarge: {
        fontFamily: vars.typography.display.large.font,
        fontWeight: vars.typography.display.large.weight,
        fontSize: vars.typography.display.large.size,
        lineHeight: vars.typography.display.large.lineHeight,
        letterSpacing: vars.typography.display.large.tracking,
      },
      displayMedium: {
        fontFamily: vars.typography.display.medium.font,
        fontWeight: vars.typography.display.medium.weight,
        fontSize: vars.typography.display.medium.size,
        lineHeight: vars.typography.display.medium.lineHeight,
        letterSpacing: vars.typography.display.medium.tracking,
      },
      displaySmall: {
        fontFamily: vars.typography.display.small.font,
        fontWeight: vars.typography.display.small.weight,
        fontSize: vars.typography.display.small.size,
        lineHeight: vars.typography.display.small.lineHeight,
        letterSpacing: vars.typography.display.small.tracking,
      },
      headlineLarge: {
        fontFamily: vars.typography.headline.large.font,
        fontWeight: vars.typography.headline.large.weight,
        fontSize: vars.typography.headline.large.size,
        lineHeight: vars.typography.headline.large.lineHeight,
        letterSpacing: vars.typography.headline.large.tracking,
      },
      headlineMedium: {
        fontFamily: vars.typography.headline.medium.font,
        fontWeight: vars.typography.headline.medium.weight,
        fontSize: vars.typography.headline.medium.size,
        lineHeight: vars.typography.headline.medium.lineHeight,
        letterSpacing: vars.typography.headline.medium.tracking,
      },
      headlineSmall: {
        fontFamily: vars.typography.headline.small.font,
        fontWeight: vars.typography.headline.small.weight,
        fontSize: vars.typography.headline.small.size,
        lineHeight: vars.typography.headline.small.lineHeight,
        letterSpacing: vars.typography.headline.small.tracking,
      },
      titleLarge: {
        fontFamily: vars.typography.title.large.font,
        fontWeight: vars.typography.title.large.weight,
        fontSize: vars.typography.title.large.size,
        lineHeight: vars.typography.title.large.lineHeight,
        letterSpacing: vars.typography.title.large.tracking,
      },
      titleMedium: {
        fontFamily: vars.typography.title.medium.font,
        fontWeight: vars.typography.title.medium.weight,
        fontSize: vars.typography.title.medium.size,
        lineHeight: vars.typography.title.medium.lineHeight,
        letterSpacing: vars.typography.title.medium.tracking,
      },
      titleSmall: {
        fontFamily: vars.typography.title.small.font,
        fontWeight: vars.typography.title.small.weight,
        fontSize: vars.typography.title.small.size,
        lineHeight: vars.typography.title.small.lineHeight,
        letterSpacing: vars.typography.title.small.tracking,
      },
      labelLarge: {
        fontFamily: vars.typography.label.large.font,
        fontSize: vars.typography.label.large.size,
        fontWeight: vars.typography.label.large.weight,
        letterSpacing: vars.typography.label.large.tracking,
        lineHeight: vars.typography.label.large.lineHeight,
      },
      labelMedium: {
        fontFamily: vars.typography.label.medium.font,
        fontSize: vars.typography.label.medium.size,
        fontWeight: vars.typography.label.medium.weight,
        lineHeight: vars.typography.label.medium.lineHeight,
        letterSpacing: vars.typography.label.medium.tracking,
      },
      labelSmall: {
        fontFamily: vars.typography.label.small.font,
        fontSize: vars.typography.label.small.size,
        fontWeight: vars.typography.label.small.weight,
        lineHeight: vars.typography.label.small.lineHeight,
        letterSpacing: vars.typography.label.small.tracking,
      },
      bodyLarge: {
        fontFamily: vars.typography.body.large.font,
        fontSize: vars.typography.body.large.size,
        fontWeight: vars.typography.body.large.weight,
        letterSpacing: vars.typography.body.large.tracking,
        lineHeight: vars.typography.body.large.lineHeight,
      },
      bodyMedium: {
        fontFamily: vars.typography.body.medium.font,
        fontSize: vars.typography.body.medium.size,
        fontWeight: vars.typography.body.medium.weight,
        letterSpacing: vars.typography.body.medium.tracking,
        lineHeight: vars.typography.body.medium.lineHeight,
      },
      bodySmall: {
        fontFamily: vars.typography.body.small.font,
        fontSize: vars.typography.body.small.size,
        fontWeight: vars.typography.body.small.weight,
        letterSpacing: vars.typography.body.small.tracking,
        lineHeight: vars.typography.body.small.lineHeight,
      },
    },

    tintScheme: {
      none: {
        vars: {
          [tintVar]: 'initial',
          [onTintVar]: 'initial',
        },
      },
      surface: {
        vars: {
          [tintVar]: vars.color.neutral.surface,
          [onTintVar]: vars.color.neutral.onSurface,
        },
      },
      surfaceInverted: {
        vars: {
          [tintVar]: vars.color.neutral.onSurface,
          [onTintVar]: vars.color.neutral.surface,
        },
      },
      surfaceContainerLowest: {
        vars: {
          [tintVar]: vars.color.neutral.surfaceContainerLowest,
          [onTintVar]: vars.color.neutral.onSurface,
        },
      },
      surfaceContainerLowestInverted: {
        vars: {
          [tintVar]: vars.color.neutral.onSurface,
          [onTintVar]: vars.color.neutral.surfaceContainerLowest,
        },
      },
      surfaceContainerLow: {
        vars: {
          [tintVar]: vars.color.neutral.surfaceContainerLow,
          [onTintVar]: vars.color.neutral.onSurface,
        },
      },
      surfaceContainerLowInverted: {
        vars: {
          [tintVar]: vars.color.neutral.onSurface,
          [onTintVar]: vars.color.neutral.surfaceContainerLow,
        },
      },
      surfaceContainer: {
        vars: {
          [tintVar]: vars.color.neutral.surfaceContainer,
          [onTintVar]: vars.color.neutral.onSurface,
        },
      },
      surfaceContainerInverted: {
        vars: {
          [tintVar]: vars.color.neutral.onSurface,
          [onTintVar]: vars.color.neutral.surfaceContainer,
        },
      },
      surfaceContainerHigh: {
        vars: {
          [tintVar]: vars.color.neutral.surfaceContainerHigh,
          [onTintVar]: vars.color.neutral.onSurface,
        },
      },
      surfaceContainerHighInverted: {
        vars: {
          [tintVar]: vars.color.neutral.onSurface,
          [onTintVar]: vars.color.neutral.surfaceContainerHigh,
        },
      },
      surfaceContainerHighest: {
        vars: {
          [tintVar]: vars.color.neutral.surfaceContainerHighest,
          [onTintVar]: vars.color.neutral.onSurface,
        },
      },
      surfaceContainerHighestInverted: {
        vars: {
          [tintVar]: vars.color.neutral.onSurface,
          [onTintVar]: vars.color.neutral.surfaceContainerHighest,
        },
      },
      primary: {
        vars: {
          [tintVar]: vars.color.brand.primary,
          [onTintVar]: vars.color.brand.onPrimary,
        },
      },
      primaryInverted: {
        vars: {
          [tintVar]: vars.color.brand.onPrimary,
          [onTintVar]: vars.color.brand.primary,
        },
      },
      secondary: {
        vars: {
          [tintVar]: vars.color.brand.secondary,
          [onTintVar]: vars.color.brand.onSecondary,
        },
      },
      secondaryInverted: {
        vars: {
          [tintVar]: vars.color.brand.onSecondary,
          [onTintVar]: vars.color.brand.secondary,
        },
      },
      tertiary: {
        vars: {
          [tintVar]: vars.color.brand.tertiary,
          [onTintVar]: vars.color.brand.onTertiary,
        },
      },
      tertiaryInverted: {
        vars: {
          [tintVar]: vars.color.brand.onTertiary,
          [onTintVar]: vars.color.brand.tertiary,
        },
      },
      error: {
        vars: {
          [tintVar]: vars.color.status.error,
          [onTintVar]: vars.color.status.onError,
        },
      },
      errorInverted: {
        vars: {
          [tintVar]: vars.color.status.onError,
          [onTintVar]: vars.color.status.error,
        },
      },
      success: {
        vars: {
          [tintVar]: vars.color.status.success,
          [onTintVar]: vars.color.status.onSuccess,
        },
      },
      successInverted: {
        vars: {
          [tintVar]: vars.color.status.onSuccess,
          [onTintVar]: vars.color.status.success,
        },
      },
      warning: {
        vars: {
          [tintVar]: vars.color.status.warning,
          [onTintVar]: vars.color.status.onWarning,
        },
      },
      warningInverted: {
        vars: {
          [tintVar]: vars.color.status.onWarning,
          [onTintVar]: vars.color.status.warning,
        },
      },
    },

    backgroundColor: {
      tint: {
        backgroundColor: tintVar,
      },
      currentColor: {
        backgroundColor: 'currentColor',
      },
      transparent: {
        backgroundColor: 'transparent',
      },
    },

    color: {
      tint: {
        color: onTintVar,
      },
      currentColor: {
        color: 'currentColor',
      },
    },

    boxShadow: {
      none: {
        boxShadow: 'none',
      },
      minimal: {
        boxShadow: vars.elevation.minimal,
      },
      low: {
        boxShadow: vars.elevation.low,
      },
      moderate: {
        boxShadow: vars.elevation.moderate,
      },
      high: {
        boxShadow: vars.elevation.high,
      },
      peak: {
        boxShadow: vars.elevation.peak,
      },
    },

    borderBlockStart: {
      0: {
        borderBlockStart: 'none',
      },
      1: {
        borderBlockStartWidth: 1,
        borderBlockStartStyle: 'solid',
        borderBlockStartColor: vars.color.neutral.outlineVariant,
      },
    },

    borderInlineEnd: {
      0: {
        borderInlineEnd: 'none',
      },
      1: {
        borderInlineEndWidth: 1,
        borderInlineEndStyle: 'solid',
        borderInlineEndColor: vars.color.neutral.outlineVariant,
      },
    },

    borderBlockEnd: {
      0: {
        borderBlockEnd: 'none',
      },
      1: {
        borderBlockEndWidth: 1,
        borderBlockEndStyle: 'solid',
        borderBlockEndColor: vars.color.neutral.outlineVariant,
      },
    },

    borderInlineStart: {
      0: {
        borderInlineStart: 'none',
      },
      1: {
        borderInlineStartWidth: 1,
        borderInlineStartStyle: 'solid',
        borderInlineStartColor: vars.color.neutral.outlineVariant,
      },
    },

    link: {
      expandTarget: {
        '::after': {
          content: '',

          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
    },

    textOverflow: {
      ellipsis: {
        overflow: 'hidden',

        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      },
    },
  },

  shorthands: {
    border: [
      'borderBlockStart',
      'borderInlineEnd',
      'borderBlockEnd',
      'borderInlineStart',
    ],
    borderBlock: ['borderBlockStart', 'borderBlockEnd'],
    borderInline: ['borderInlineEnd', 'borderInlineStart'],
  },
});

export type TypographyValues =
  keyof typeof unconditionalProperties.styles.typography.values;

export type TintSchemeValues =
  | 'none'
  | 'primary'
  | 'primaryInverted'
  | 'secondary'
  | 'secondaryInverted'
  | 'tertiary'
  | 'tertiaryInverted'
  | 'surface'
  | 'surfaceInverted'
  | 'surfaceContainerLowest'
  | 'surfaceContainerLowestInverted'
  | 'surfaceContainerLow'
  | 'surfaceContainerLowInverted'
  | 'surfaceContainer'
  | 'surfaceContainerInverted'
  | 'surfaceContainerHigh'
  | 'surfaceContainerHighInverted'
  | 'surfaceContainerHighest'
  | 'surfaceContainerHighestInverted'
  | 'error'
  | 'errorInverted'
  | 'success'
  | 'successInverted'
  | 'warning'
  | 'warningInverted';

export type BoxShadowValues =
  | 'none'
  | 'minimal'
  | 'low'
  | 'moderate'
  | 'high'
  | 'peak';

export type BorderValues = 0 | 1;

export type ColorValues = 'currentColor' | 'tint';
export type TransparentColorValues = ColorValues | 'transparent';

export type Borders = {
  /** Mapped to `border` css property */
  border?: BorderValues;
  /** Mapped to `border-block` css property */
  borderBlock?: BorderValues;
  /** Mapped to `border-inline` css property */
  borderInline?: BorderValues;
  /** Mapped to `border-block-start` css property */
  borderBlockStart?: BorderValues;
  /** Mapped to `border-inline-end` css property */
  borderInlineEnd?: BorderValues;
  /** Mapped to `border-block-end` css property */
  borderBlockEnd?: BorderValues;
  /** Mapped to `border-inline-start` css property */
  borderInlineStart?: BorderValues;
};

export type LinkValues = 'expandTarget';

export type TextOverflowValues = 'ellipsis';

export type UnconditionalProperties = {
  tintScheme?: TintSchemeValues;
  boxShadow?: BoxShadowValues;
  backgroundColor?: TransparentColorValues;
  color?: ColorValues;
  link?: LinkValues;
  textOverflow?: TextOverflowValues;
  typography?: TypographyValues;
} & Borders;
