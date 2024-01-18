import { ComponentType, ForwardedRef } from 'react';

import { iconStyle } from '../Icon';
import { forwardRef } from '../utils/forward-ref';

import { ButtonBase, ButtonBaseProps } from './ButtonBase';

export type ButtonProps = Omit<ButtonBaseProps<'button'>, 'as'> & {
  icon?: ComponentType<{ className?: string }>;
};

export const Button = forwardRef(
  (
    { icon: IconComp, iconOnly, size = 'md', children, ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <ButtonBase
        ref={ref}
        as="button"
        iconOnly={iconOnly}
        size={size}
        aria-label={iconOnly ? String(children) : undefined}
        {...props}
      >
        <>
          {IconComp && <IconComp className={iconStyle({ size })} />}
          {!iconOnly && children}
        </>
      </ButtonBase>
    );
  },
);
