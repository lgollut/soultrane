import { RecipeVariants } from '@vanilla-extract/recipes';
import { clsx } from 'clsx';
import { MotionProps } from 'framer-motion';
import { ElementType, ForwardedRef } from 'react';

import { BoxMotion, BoxProps } from '../Box';
import { forwardRef } from '../utils/forward-ref';

import { buttonStyle } from './Button.css';

type ButtonBaseVariants = NonNullable<RecipeVariants<typeof buttonStyle>>;

export type ButtonBaseProps<TAs extends ElementType> = BoxProps<TAs> &
  ButtonBaseVariants &
  MotionProps;

export const ButtonBase = forwardRef(
  <TAs extends ElementType>(
    props: ButtonBaseProps<TAs>,
    ref: ForwardedRef<unknown>,
  ) => {
    const {
      variant = 'filled',
      iconOnly = false,
      size = 'md',
      className,
      flow,
      position = 'relative',
      tintScheme = 'primary',
      borderRadius = 'sm',
      ...rest
    } = props;

    return (
      <BoxMotion
        ref={ref}
        position={position}
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        gap={size}
        paddingInline={size}
        tintScheme={tintScheme}
        borderRadius={borderRadius}
        typography={size === 'sm' ? 'labelSmall' : 'labelLarge'}
        className={clsx(
          buttonStyle({ variant, size, flow, iconOnly }),
          className,
        )}
        {...rest}
      />
    );
  },
);
