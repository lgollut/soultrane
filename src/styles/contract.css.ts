import { createThemeContract } from '@vanilla-extract/css';

const typographyProps = {
  font: null,
  size: null,
  weight: null,
  lineHeight: null,
  tracking: null,
};

const typographyContract = {
  large: typographyProps,
  medium: typographyProps,
  small: typographyProps,
};

export const vars = createThemeContract({
  color: {
    brand: {
      primary: null,
      onPrimary: null,
      primaryContainer: null,
      onPrimaryContainer: null,

      secondary: null,
      onSecondary: null,
      secondaryContainer: null,
      onSecondaryContainer: null,

      tertiary: null,
      onTertiary: null,
      tertiaryContainer: null,
      onTertiaryContainer: null,
    },

    neutral: {
      surfaceDim: null,
      surface: null,
      surfaceBright: null,

      surfaceContainerLowest: null,
      surfaceContainerLow: null,
      surfaceContainer: null,
      surfaceContainerHigh: null,
      surfaceContainerHighest: null,

      onSurface: null,
      onSurfaceVariant: null,

      outline: null,
      outlineVariant: null,
    },

    status: {
      error: null,
      onError: null,
      errorContainer: null,
      onErrorContainer: null,

      success: null,
      onSuccess: null,
      successContainer: null,
      onSuccessContainer: null,

      warning: null,
      onWarning: null,
      warningContainer: null,
      onWarningContainer: null,
    },
  },

  state: {
    hovered: {
      opacity: null,
    },

    focused: {
      opacity: null,
    },

    pressed: {
      opacity: null,
    },
  },

  typeface: {
    brand: null,
    plain: null,
  },

  typography: {
    display: typographyContract,
    headline: typographyContract,
    title: typographyContract,
    body: typographyContract,
    label: typographyContract,
  },

  spacing: {
    xxs: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null,
  },

  size: {
    xxs: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null,
  },

  radius: {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null,
    full: null,
  },

  elevation: {
    minimal: null,
    low: null,
    moderate: null,
    high: null,
    peak: null,
  },

  duration: {
    swift: null,
    short: null,
    standard: null,
    long: null,
    extended: null,
  },

  easing: {
    inOut: null,
  },
});
