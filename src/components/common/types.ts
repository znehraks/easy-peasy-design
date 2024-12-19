// 다형성 컴포넌트 asProp
type AsProp<C extends React.ElementType> = {
  as?: C;
};

// 중복되는 props 추출
type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

// 다형성 컴포넌트 타입
type PolymorphicComponentProp<C extends React.ElementType, Props = {}> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

// 다형성 컴포넌트 ref 타입
export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

// ref까지 포함한 다형성 컴포넌트 최종 타입
export type PolymorphicComponentPropWithRef<C extends React.ElementType, Props = {}> = PolymorphicComponentProp<
  C,
  Props
> & {
  ref?: PolymorphicRef<C>;
};
