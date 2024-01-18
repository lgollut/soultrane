import { Send, User } from 'lucide-react';
import { ReactNode, useState } from 'react';

import { argTypesFromRecipe } from '../../.storybook/arg-types/arg-types-from-recipe';
import {
  argTypesFromSprinkles,
  responsivePropertiesMap,
  unconditionalPropertiesMap,
} from '../../.storybook/arg-types/arg-types-from-sprinkles';
import { CommonArgs, commonArgs } from '../../.storybook/arg-types/common-args';
import { Box } from '../Box';
import { TintSchemeValues } from '../styles/sprinkles-properties/unconditional-properties.css';

import { Button, ButtonProps } from './Button';
import { buttonStyle } from './Button.css';
import { ButtonLoading, ButtonLoadingProps } from './ButtonLoading';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button label',
    variant: 'filled',
    tintScheme: 'primary',
    disabled: false,
    icon: undefined,
    iconOnly: false,
  },
  argTypes: {
    ...argTypesFromRecipe(buttonStyle),
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
    ]),
    icon: { control: false, table: { category: 'Intrinsic props' } },
    disabled: { table: { category: 'Intrinsic props' } },
  },
  render: ({ tintScheme, ...args }) => {
    return (
      <ButtonStoryContainer
        tintScheme={tintScheme}
        wrapped={tintScheme?.includes('Inverted')}
      >
        <Button tintScheme={tintScheme} {...args}>
          Button label
        </Button>
      </ButtonStoryContainer>
    );
  },
} satisfies Meta<ButtonProps>;

const ButtonStoryContainer = ({
  children,
  wrapped = false,
  tintScheme,
}: {
  wrapped?: boolean;
  children: ReactNode;
  tintScheme?: TintSchemeValues;
}) => {
  if (wrapped) {
    return (
      <Box
        padding="md"
        tintScheme={
          tintScheme?.substring(
            0,
            tintScheme.indexOf('Inverted'),
          ) as TintSchemeValues
        }
      >
        {children}
      </Box>
    );
  }

  return children;
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: 'filled',
  },
};

export const FilledSecondary: Story = {
  args: {
    variant: 'filled',
    tintScheme: 'secondary',
  },
};

export const FilledTertiary: Story = {
  args: {
    variant: 'filled',
    tintScheme: 'tertiary',
  },
};

export const FilledDisabled: Story = {
  args: {
    variant: 'filled',
    disabled: true,
  },
};

export const FilledContrasted: Story = {
  args: {
    variant: 'filled',
    tintScheme: 'primaryInverted',
  },
};

export const FilledContrastedDisabled: Story = {
  args: {
    variant: 'filled',
    disabled: true,
    tintScheme: 'primaryInverted',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    tintScheme: 'primary',
  },
};

export const OutlinedSecondary: Story = {
  args: {
    variant: 'outlined',
    tintScheme: 'secondary',
  },
};

export const OutlinedTertiary: Story = {
  args: {
    variant: 'outlined',
    tintScheme: 'tertiary',
  },
};

export const OutlinedDisabled: Story = {
  args: {
    variant: 'outlined',
    disabled: true,
  },
};

export const OutlinedContrasted: Story = {
  args: {
    variant: 'outlined',
    tintScheme: 'primaryInverted',
  },
};

export const OutlinedContrastedDisabled: Story = {
  args: {
    variant: 'outlined',
    disabled: true,
    tintScheme: 'primaryInverted',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const GhostSecondary: Story = {
  args: {
    variant: 'ghost',
    tintScheme: 'secondary',
  },
};

export const GhostTertiary: Story = {
  args: {
    variant: 'ghost',
    tintScheme: 'tertiary',
  },
};

export const GhostDisabled: Story = {
  args: {
    variant: 'ghost',
    disabled: true,
  },
};

export const GhostContrasted: Story = {
  args: {
    variant: 'ghost',
    tintScheme: 'primaryInverted',
  },
};

export const GhostContrastedDisabled: Story = {
  args: {
    variant: 'ghost',
    tintScheme: 'primaryInverted',
    disabled: true,
  },
};

export const FilledIconOnly: Story = {
  args: {
    icon: User,
    iconOnly: true,
  },
};

export const OutlinedIconOnly: Story = {
  args: {
    variant: 'outlined',
    icon: User,
    iconOnly: true,
  },
};

export const GhostIconOnly: Story = {
  args: {
    variant: 'ghost',
    icon: User,
    iconOnly: true,
  },
};

export const LoadingAnimation: Story = {
  render: (args) => <ButtonLoadingComponent {...args} />,
};

export const LoadingAnimationWithIcon: Story = {
  args: {
    icon: Send,
  },
  render: (args) => <ButtonLoadingComponent {...args} />,
};

export const LoadingAnimationIconOnly: Story = {
  args: {
    icon: Send,
    iconOnly: true,
    children: undefined,
  },
  render: (args) => <ButtonLoadingComponent {...args} />,
};

const ButtonLoadingComponent = (
  props: Omit<ButtonLoadingProps, 'loading' | 'onClick'>,
) => {
  const [loading, setLoading] = useState(false);

  const onToggleLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 5000);
  };

  return (
    <ButtonLoading loading={loading} onClick={onToggleLoading} {...props} />
  );
};
