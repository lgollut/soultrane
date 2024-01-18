import { RecipeVariants } from '@vanilla-extract/recipes';
import { clsx } from 'clsx';
import { ForwardedRef } from 'react';

import { forwardRef } from '../utils/forward-ref';

import { ellipseStyle, moonStyle, loaderMoonStyle } from './LoaderMoon.css';
import { LoaderWrapper, LoaderWrapperProps } from './LoaderWrapper';

type LoaderMoonVariants = NonNullable<RecipeVariants<typeof loaderMoonStyle>>;

type LoaderMoonProps = LoaderWrapperProps & LoaderMoonVariants;

/**
 * Heavily inspired by https://github.com/davidhu2000/react-spinners/blob/main/src/MoonLoader.tsx
 */
export const LoaderMoon = forwardRef(
  (
    { size = 'md', className, ...props }: LoaderMoonProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <LoaderWrapper
        ref={ref}
        className={clsx(loaderMoonStyle({ size }), className)}
        {...props}
      >
        <span className={ellipseStyle} />
        <span className={moonStyle} />
      </LoaderWrapper>
    );
  },
);
