import { SprinklesProps, sprinkles } from '../styles/sprinkles.css';

type MappedSprinklesProps<TComponentProps> = {
  [Key in keyof Pick<
    TComponentProps,
    Extract<keyof TComponentProps, SprinklesProps>
  >]?: TComponentProps[Key];
};

type MappedComponentProps<TComponentProps> = {
  [Key in keyof Omit<TComponentProps, SprinklesProps>]?: TComponentProps[Key];
};

/**
 * Extracts the sprinkles properties from the given component props,
 * returning an array containing the extracted sprinkle props and
 * the remaining component props.
 */
export const extractSprinklesProps = <
  ComponentProps extends Record<PropertyKey, unknown>,
>(
  props: ComponentProps,
): [
  MappedSprinklesProps<ComponentProps>,
  MappedComponentProps<ComponentProps>,
] => {
  const sprinkleProps: MappedSprinklesProps<ComponentProps> = {};
  const componentProps: MappedComponentProps<ComponentProps> = {};

  for (const prop of Object.keys(props)) {
    if (sprinkles.properties.has(prop as SprinklesProps)) {
      sprinkleProps[prop as keyof MappedSprinklesProps<ComponentProps>] = props[
        prop
      ] as ComponentProps[keyof MappedSprinklesProps<ComponentProps>];
      continue;
    }

    componentProps[prop as keyof MappedComponentProps<ComponentProps>] = props[
      prop
    ] as ComponentProps[keyof MappedComponentProps<ComponentProps>];
  }

  return [sprinkleProps, componentProps];
};
