import {
  argTypesFromSprinkles,
  responsivePropertiesMap,
  unconditionalPropertiesMap,
} from '../../.storybook/arg-types/arg-types-from-sprinkles';
import { CommonArgs, commonArgs } from '../../.storybook/arg-types/common-args';

import { LoaderMoon } from './LoaderMoon';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'LoaderMoon',
  component: LoaderMoon,
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
} satisfies Meta<typeof LoaderMoon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
