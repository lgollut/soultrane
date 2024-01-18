import {
  argTypesFromSprinkles,
  responsivePropertiesMap,
  unconditionalPropertiesMap,
} from '../../.storybook/arg-types/arg-types-from-sprinkles';
import { CommonArgs, commonArgs } from '../../.storybook/arg-types/common-args';

import { Box } from './Box';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Box',
  component: Box,
  args: {
    children: 'Box content',
    typography: 'bodyLarge',
    padding: 'md',
  },
  argTypes: {
    ...argTypesFromSprinkles({
      props: responsivePropertiesMap,
      category: 'Responsive sprinkles props',
    }),
    ...argTypesFromSprinkles({
      props: unconditionalPropertiesMap,
    }),
    ...commonArgs([
      CommonArgs.COMPOSABLE,
      CommonArgs.POLYMORPHIC,
      CommonArgs.STYLABLE,
      CommonArgs.REFERABLE,
    ]),
  },
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {};

export const Tinted: Story = {
  args: {
    tintScheme: 'primary',
  },
};

export const Elevated: Story = {
  args: {
    boxShadow: 'high',
  },
};

export const Border: Story = {
  args: {
    border: 1,
  },
};
