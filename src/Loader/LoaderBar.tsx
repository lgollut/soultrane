import { clsx } from 'clsx';
import { ForwardedRef } from 'react';

import { forwardRef } from '../utils/forward-ref';

import {
  loaderBarStyle,
  barOneStyle,
  barTwoStyle,
  barsStyle,
} from './LoaderBar.css';
import { LoaderWrapper, LoaderWrapperProps } from './LoaderWrapper';

/**
 * Heavily inspired by https://github.com/davidhu2000/react-spinners/blob/main/src/BarLoader.tsx
 */
export const LoaderBar = forwardRef(
  (
    {
      active = false,
      forceMount = false,
      className,
      ...props
    }: LoaderWrapperProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <LoaderWrapper
        ref={ref}
        className={clsx(loaderBarStyle, className)}
        {...props}
      >
        <span className={clsx(barsStyle({ active }), barOneStyle)} />
        <span className={clsx(barsStyle({ active }), barTwoStyle)} />
      </LoaderWrapper>
    );
  },
);
