export type DistributiveOmit<
  T,
  TOmitted extends PropertyKey,
> = T extends unknown ? Omit<T, TOmitted> : never;

export type PolymorphicComponentProps<TAs> = {
  as?: TAs;
};

export type ForwardRefWithInference = <T, P = object>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
) => (props: P & React.RefAttributes<T>) => React.ReactNode;
