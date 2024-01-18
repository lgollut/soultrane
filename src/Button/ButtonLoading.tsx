'use client';

import { AnimatePresence } from 'framer-motion';
import { ComponentType, ForwardedRef } from 'react';

import { BoxMotion } from '../Box';
import { iconStyle } from '../Icon';
import { LoaderMoon } from '../Loader';
import { forwardRef } from '../utils/forward-ref';

import { ButtonBase, ButtonBaseProps } from './ButtonBase';

export type ButtonLoadingProps = Omit<ButtonBaseProps<'button'>, 'as'> & {
  /** The loading state of the button */
  loading: boolean;
  /** If children need to be transitioned, this key is used for the AnimatePresence */
  childrenComputedKey?: string;

  icon?: ComponentType<{ className?: string }>;
};

const layoutTransition = {
  layout: { type: 'spring', stiffness: 400, damping: 30 },
};
const initial = { opacity: 0 };
const enterAnimation = {
  opacity: 1,
  transition: { duration: 0.25, delay: 0.25 },
};
const exitAnimation = {
  opacity: 0,
  transition: { duration: 0.25 },
};

export const ButtonLoading = forwardRef(
  (
    {
      loading,
      icon: IconComp,
      size = 'md',
      children,
      disabled,
      childrenComputedKey = 'children',
      ...props
    }: ButtonLoadingProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <ButtonBase
        ref={ref}
        as="button"
        disabled={loading || disabled}
        size={size}
        layout
        transition={layoutTransition}
        {...props}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {loading ? (
            <BoxMotion
              key="loader"
              initial={initial}
              animate={enterAnimation}
              exit={exitAnimation}
              layout="position"
            >
              <LoaderMoon active={true} forceMount />
            </BoxMotion>
          ) : (
            IconComp && (
              <BoxMotion
                key="icon"
                initial={initial}
                animate={enterAnimation}
                exit={exitAnimation}
              >
                <IconComp className={iconStyle({ size })} />
              </BoxMotion>
            )
          )}
          {children && (
            <BoxMotion
              key={childrenComputedKey}
              initial={initial}
              animate={enterAnimation}
              exit={exitAnimation}
              layout="position"
              transition={layoutTransition}
            >
              {children}
            </BoxMotion>
          )}
        </AnimatePresence>
      </ButtonBase>
    );
  },
);
