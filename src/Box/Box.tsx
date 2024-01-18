import { clsx } from 'clsx';
import { ElementType, ForwardedRef, ComponentPropsWithRef } from 'react';

import {
  sprinkles,
  ResponsiveProperties,
  UnconditionalProperties,
} from '../styles/sprinkles.css';
import {
  DistributiveOmit,
  PolymorphicComponentProps,
} from '../types/utils.types';
import { extractSprinklesProps } from '../utils/extract-sprinkles-props';
import { forwardRef } from '../utils/forward-ref';

type BaseBoxProps = ResponsiveProperties & UnconditionalProperties;

type OmittedBaseBoxProps<OmittedProps extends string> = Omit<
  BaseBoxProps,
  OmittedProps
>;

/**
 * When you use `BoxProps` in other components and want to define a default
 * value for that prop in your component (e.g. `const { as = 'span' } = props;`)
 * you will need to cast the `as` prop as `YourComponentProps<TAs>['as]` otherwise
 * it will be considered as `TAs | span` and you will get a type error.
 *
 * You can see an example of this in `frontend/components/text/text.tsx`.
 */
export type BoxProps<
  TAs extends ElementType,
  // TODO find a better way to do this without the default on `''`
  OmittedProps extends string = '',
> = OmittedBaseBoxProps<OmittedProps> &
  PolymorphicComponentProps<TAs> &
  DistributiveOmit<
    ComponentPropsWithRef<ElementType extends TAs ? 'div' : TAs>,
    'as' | keyof OmittedBaseBoxProps<OmittedProps>
  >;

/**
 * A custom element for generic boxes/containers
 *
 * https://every-layout.dev/layouts/box
 */
export const Box = forwardRef(
  <TAs extends ElementType = 'div'>(
    props: BoxProps<TAs>,
    ref: ForwardedRef<unknown>,
  ) => {
    const [
      {
        display = 'block',
        position = 'relative',
        tintScheme = 'none',
        backgroundColor = 'tint',
        color = 'tint',
        ...sprinklesProps
      },
      { as: Comp = 'div', className, ...rest },
    ] = extractSprinklesProps(props);

    return (
      <Comp
        ref={ref}
        className={clsx(
          sprinkles({
            display,
            position,
            tintScheme,
            backgroundColor,
            color,
            ...sprinklesProps,
          }),
          className,
        )}
        {...rest}
      />
    );
  },
);
