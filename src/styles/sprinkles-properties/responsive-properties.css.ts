import { createVar } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import {
  ConditionalValue,
  createMapValueFn,
  defineProperties,
} from '@vanilla-extract/sprinkles';

import { vars } from '../contract.css';
import { utilities } from '../layers.css';

export const dividedSpace = createVar();

const displayValues = [
  'none',
  'block',
  'inline',
  'inline-block',
  'flex',
  'inline-flex',
  'grid',
] as const;

const flexWrapValues = ['nowrap', 'wrap', 'wrap-reverse'] as const;
const flexDirectionValues = ['row', 'column'] as const;
const justifyContentValues = [
  'stretch',
  'flex-start',
  'center',
  'flex-end',
  'space-around',
  'space-between',
] as const;
const alignItemsValues = [
  'stretch',
  'flex-start',
  'center',
  'flex-end',
  'baseline',
] as const;
const alignSelfValues = [
  'auto',
  'stretch',
  'flex-start',
  'center',
  'flex-end',
  'baseline',
] as const;
const gapValues = vars.spacing;
const flexGrowValues = [0, 1] as const;
const flexShrinkValues = [0, 1] as const;
const flexBasisValues = ['1px', 'auto', '100%'] as const;

const widthValues = ['auto', 'full'] as const;
const heightValues = ['auto', 'full'] as const;
const maxInlineSizeValues = [
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  'auto',
  'full',
  'min-content',
  'max-content',
] as const;

const marginValues = { auto: 'auto', ...vars.spacing } as const;
const paddingValues = { ...vars.spacing } as const;
const insetValues = { auto: 'auto', ...vars.spacing };

const borderRadiusValues = { inherit: 'inherit', ...vars.radius };

const positionValues = [
  'static',
  'relative',
  'absolute',
  'fixed',
  'sticky',
] as const;

const textAlignValues = ['start', 'center', 'end'] as const;

const dividedValues = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;

export const responsiveProperties = defineProperties({
  '@layer': utilities,

  conditions: {
    sm: {},
    md: {
      '@media': 'screen and (min-width: 640px)',
    },
    lg: {
      '@media': 'screen and (min-width: 1024px)',
    },
    xl: {
      '@media': 'screen and (min-width: 1280px)',
    },
  },

  defaultCondition: 'sm',
  responsiveArray: ['sm', 'md', 'lg', 'xl'],

  properties: {
    display: displayValues,

    flexWrap: flexWrapValues,
    flexDirection: flexDirectionValues,

    justifyContent: justifyContentValues,
    alignItems: alignItemsValues,
    alignSelf: alignSelfValues,

    columnGap: gapValues,
    rowGap: gapValues,

    flexGrow: flexGrowValues,
    flexShrink: flexShrinkValues,
    flexBasis: flexBasisValues,

    marginBlockStart: marginValues,
    marginInlineEnd: marginValues,
    marginBlockEnd: marginValues,
    marginInlineStart: marginValues,

    paddingBlockStart: paddingValues,
    paddingInlineEnd: paddingValues,
    paddingBlockEnd: paddingValues,
    paddingInlineStart: paddingValues,

    width: {
      auto: {
        width: 'auto',
      },
      full: {
        width: '100%',
      },
    },
    height: {
      auto: {
        height: 'auto',
      },
      full: {
        height: '100%',
      },
    },
    maxInlineSize: {
      xxs: {
        maxInlineSize: vars.size.xxs,
      },
      xs: {
        maxInlineSize: vars.size.xs,
      },
      sm: {
        maxInlineSize: vars.size.sm,
      },
      md: {
        maxInlineSize: vars.size.md,
      },
      lg: {
        maxInlineSize: vars.size.lg,
      },
      xl: {
        maxInlineSize: vars.size.xl,
      },
      xxl: {
        maxInlineSize: vars.size.xxl,
      },
      auto: {
        maxInlineSize: 'auto',
      },
      full: {
        maxInlineSize: '100%',
      },
      'min-content': {
        maxInlineSize: 'min-content',
      },
      'max-content': {
        maxInlineSize: 'max-content',
      },
    },

    position: positionValues,

    insetBlockStart: insetValues,
    insetInlineEnd: insetValues,
    insetBlockEnd: insetValues,
    insetInlineStart: insetValues,

    borderStartEndRadius: borderRadiusValues,
    borderEndEndRadius: borderRadiusValues,
    borderEndStartRadius: borderRadiusValues,
    borderStartStartRadius: borderRadiusValues,

    textAlign: textAlignValues,

    divided: dividedValues.reduce<
      Partial<Record<(typeof dividedValues)[number], unknown>>
    >(
      (acc, value) => ({
        ...acc,
        [value]: {
          vars: {
            [dividedSpace]: calc(vars.spacing[value]).divide(-2).toString(),
          },
        },
      }),
      {},
    ),
  },

  shorthands: {
    gap: ['columnGap', 'rowGap'],

    margin: [
      'marginBlockStart',
      'marginInlineEnd',
      'marginBlockEnd',
      'marginInlineStart',
    ],
    marginBlock: ['marginBlockStart', 'marginBlockEnd'],
    marginInline: ['marginInlineStart', 'marginInlineEnd'],

    padding: [
      'paddingBlockStart',
      'paddingInlineEnd',
      'paddingBlockEnd',
      'paddingInlineStart',
    ],
    paddingBlock: ['paddingBlockStart', 'paddingBlockEnd'],
    paddingInline: ['paddingInlineStart', 'paddingInlineEnd'],

    inset: [
      'insetBlockStart',
      'insetInlineEnd',
      'insetBlockEnd',
      'insetInlineStart',
    ],
    insetBlock: ['insetBlockStart', 'insetBlockEnd'],
    insetInline: ['insetInlineStart', 'insetInlineEnd'],

    borderRadius: [
      'borderStartEndRadius',
      'borderEndEndRadius',
      'borderEndStartRadius',
      'borderStartStartRadius',
    ],
  },
});

export const mapResponsiveValue = createMapValueFn(responsiveProperties);

export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveProperties,
  Value
>;

export type DisplayValues = (typeof displayValues)[number];
export type ResponsiveDisplay = ResponsiveValue<DisplayValues>;

export type FlexWrapValues = (typeof flexWrapValues)[number];
export type ResponsiveFlexWrap = ResponsiveValue<FlexWrapValues>;

export type FlexDirectionValues = (typeof flexDirectionValues)[number];
export type ResponsiveFlexDirection = ResponsiveValue<FlexDirectionValues>;

export type JustifyContentValues = (typeof justifyContentValues)[number];
export type ResponsiveJustifyContent = ResponsiveValue<JustifyContentValues>;

export type AlignItemsValues = (typeof alignItemsValues)[number];
export type ResponsiveAlignItems = ResponsiveValue<AlignItemsValues>;

export type AlignSelfValues = (typeof alignSelfValues)[number];
export type ResponsiveAlignSelf = ResponsiveValue<AlignSelfValues>;

export type GapValues = keyof typeof gapValues;
export type ResponsiveGap = ResponsiveValue<GapValues>;

export type FlexGrowValues = (typeof flexGrowValues)[number];
export type ResponsiveFlexGrow = ResponsiveValue<FlexGrowValues>;

export type FlexShrinkValues = (typeof flexShrinkValues)[number];
export type ResponsiveFlexShrink = ResponsiveValue<FlexShrinkValues>;

export type FlexBasisValues = (typeof flexBasisValues)[number];
export type ResponsiveFlexBasis = ResponsiveValue<FlexBasisValues>;

export type WidthValues = (typeof widthValues)[number];
export type ResponsiveWidth = ResponsiveValue<WidthValues>;

export type HeightValues = (typeof heightValues)[number];
export type ResponsiveHeight = ResponsiveValue<HeightValues>;

export type MaxInlineSizeValues = (typeof maxInlineSizeValues)[number];
export type ResponsiveMaxInlineSize = ResponsiveValue<MaxInlineSizeValues>;

export type PaddingsValues = keyof typeof paddingValues;
export type ResponsivePaddings = ResponsiveValue<PaddingsValues>;

export type MarginsValues = keyof typeof marginValues;
export type ResponsiveMargins = ResponsiveValue<MarginsValues>;

export type InsetsValues = keyof typeof insetValues;
export type ResponsiveInsets = ResponsiveValue<InsetsValues>;

export type BorderRadiusValues = keyof typeof borderRadiusValues;
export type ResponsiveBorderRadius = ResponsiveValue<BorderRadiusValues>;

export type PositionValues = (typeof positionValues)[number];
export type ResponsivePosition = ResponsiveValue<PositionValues>;

export type TextAlignValues = (typeof textAlignValues)[number];
export type ResponsiveTextAlign = ResponsiveValue<TextAlignValues>;

export type DividedValues = (typeof dividedValues)[number];
export type ResponsiveDivided = ResponsiveValue<DividedValues>;

export type Sizes = {
  /** Mapped to `width` css property */
  width?: ResponsiveWidth;
  /** Mapped to `height` css property */
  height?: ResponsiveHeight;
  /** Mapped to `max-inline-size` css property */
  maxInlineSize?: ResponsiveMaxInlineSize;
};

export type Layouts = {
  /** Mapped to `position` css property */
  position?: ResponsivePosition;
};

export type Flexbox = {
  /** Mapped to `display` css property */
  display?: ResponsiveDisplay;
  /** Mapped to `flex-wrap` css property */
  flexWrap?: ResponsiveFlexWrap;
  /** Mapped to `flex-direction` css property */
  flexDirection?: ResponsiveFlexDirection;
  /** Mapped to `justify-content` css property */
  justifyContent?: ResponsiveJustifyContent;
  /** Mapped to `align-items` css property */
  alignItems?: ResponsiveAlignItems;
  /** Mapped to `align-self` css property */
  alignSelf?: ResponsiveAlignSelf;
  /** Mapped to `gap` css property */
  gap?: ResponsiveGap;
  /** Mapped to `column-gap` css property */
  columnGap?: ResponsiveGap;
  /** Mapped to `row-gap` css property */
  rowGap?: ResponsiveGap;
  /** Mapped to `flex-grow` css property */
  flexGrow?: ResponsiveFlexGrow;
  /** Mapped to `flex-shrink` css property */
  flexShrink?: ResponsiveFlexShrink;
  /** Mapped to `flex-basis` css property */
  flexBasis?: ResponsiveFlexBasis;
};

export type Paddings = {
  /** Mapped to `padding` css property */
  padding?: ResponsivePaddings;
  /** Mapped to `padding-block` css property */
  paddingBlock?: ResponsivePaddings;
  /** Mapped to `padding-inline` css property */
  paddingInline?: ResponsivePaddings;
  /** Mapped to `padding-block-start` css property */
  paddingBlockStart?: ResponsivePaddings;
  /** Mapped to `padding-inline-end` css property */
  paddingInlineEnd?: ResponsivePaddings;
  /** Mapped to `padding-block-end` css property */
  paddingBlockEnd?: ResponsivePaddings;
  /** Mapped to `padding-inline-start` css property */
  paddingInlineStart?: ResponsivePaddings;
};

export type Margins = {
  /** Mapped to `margin` css property */
  margin?: ResponsiveMargins;
  /** Mapped to `margin-block` css property */
  marginBlock?: ResponsiveMargins;
  /** Mapped to `margin-inline` css property */
  marginInline?: ResponsiveMargins;
  /** Mapped to `margin-block-start` css property */
  marginBlockStart?: ResponsiveMargins;
  /** Mapped to `margin-inline-end` css property */
  marginInlineEnd?: ResponsiveMargins;
  /** Mapped to `margin-block-end` css property */
  marginBlockEnd?: ResponsiveMargins;
  /** Mapped to `margin-inline-start` css property */
  marginInlineStart?: ResponsiveMargins;
};

export type Insets = {
  /** Mapped to `inset` css property */
  inset?: ResponsiveInsets;
  /** Mapped to `inset-block` css property */
  insetBlock?: ResponsiveInsets;
  /** Mapped to `inset-inline` css property */
  insetInline?: ResponsiveInsets;
  /** Mapped to `inset-block-start` css property */
  insetBlockStart?: ResponsiveInsets;
  /** Mapped to `inset-inline-end` css property */
  insetInlineEnd?: ResponsiveInsets;
  /** Mapped to `inset-block-end` css property */
  insetBlockEnd?: ResponsiveInsets;
  /** Mapped to `inset-inline-start` css property */
  insetInlineStart?: ResponsiveInsets;
};

export type Radius = {
  /** Mapped to `border-radius` css property */
  borderRadius?: ResponsiveBorderRadius;
  /** Mapped to `border-start-end-radius` css property */
  borderStartEndRadius?: ResponsiveBorderRadius;
  /** Mapped to `border-end-end-radius` css property */
  borderEndEndRadius?: ResponsiveBorderRadius;
  /** Mapped to `border-end-start-radius` css property */
  borderEndStartRadius?: ResponsiveBorderRadius;
  /** Mapped to `border-start-start-radius` css property */
  borderStartStartRadius?: ResponsiveBorderRadius;
};

export type Text = {
  /** Mapped to `text-align` css property */
  textAlign?: ResponsiveTextAlign;
};

export type Misc = {
  divided?: ResponsiveDivided;
};

export type ResponsiveProperties = Sizes &
  Layouts &
  Paddings &
  Margins &
  Insets &
  Flexbox &
  Radius &
  Text &
  Misc;
