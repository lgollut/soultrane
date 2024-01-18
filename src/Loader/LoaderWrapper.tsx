import { RecipeVariants } from '@vanilla-extract/recipes';
import { clsx } from 'clsx';
import { ForwardedRef, ReactNode } from 'react';

import { Box, BoxProps } from '../Box';
import { forwardRef } from '../utils/forward-ref';

import { loaderWrapperStyle } from './LoaderWrapper.css';

type LoaderVariants = NonNullable<RecipeVariants<typeof loaderWrapperStyle>>;

export type LoaderWrapperProps = BoxProps<'div', 'as'> & {
  children?: ReactNode;
  forceMount?: boolean;
  className?: string;
} & LoaderVariants;

export const LoaderWrapper = forwardRef(
  (
    {
      active = false,
      forceMount = false,
      className,
      ...props
    }: LoaderWrapperProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    if (!active && !forceMount) {
      return null;
    }

    return (
      <Box
        ref={ref}
        as="div"
        position="relative"
        className={clsx(loaderWrapperStyle({ active }), className)}
        {...props}
      />
    );
  },
);
