import {
  argTypesFromSprinkles,
  responsivePropertiesMap,
  unconditionalPropertiesMap,
} from '../../.storybook/arg-types/arg-types-from-sprinkles';
import { CommonArgs, commonArgs } from '../../.storybook/arg-types/common-args';

import { LoaderBar } from './LoaderBar';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'LoaderBar',
  component: LoaderBar,
  args: {
    active: true,
  },
  argTypes: {
    ...argTypesFromSprinkles({
      props: responsivePropertiesMap,
      category: 'Responsive sprinkles props',
    }),
    ...argTypesFromSprinkles({
      props: unconditionalPropertiesMap,
    }),
    ...commonArgs([CommonArgs.STYLABLE, CommonArgs.POLYMORPHIC]),
    active: {
      table: { category: 'Intrinsic props' },
    },
    forceMount: {
      table: { category: 'Intrinsic props' },
    },
  },
} satisfies Meta<typeof LoaderBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
