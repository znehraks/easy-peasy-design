// 다형성 컴포넌트 asProp
// 기존 작성한 ViewProps에서 as를 분리한다.
type AsProp<T extends React.ElementType> = {
  as?: T;
};

// // 중복되는 props 추출
// type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

// // 다형성 컴포넌트 타입
// type PolymorphicComponentProp<C extends React.ElementType, Props = {}> = React.PropsWithChildren<Props & AsProp<C>> &
//   Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

// // 다형성 컴포넌트 ref 타입
// export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

// // ref까지 포함한 다형성 컴포넌트 최종 타입
// export type PolymorphicComponentPropWithRef<C extends React.ElementType, Props = {}> = PolymorphicComponentProp<
//   C,
//   Props
// > & {
//   ref?: PolymorphicRef<C>;
// };

// 직관적인 이름을 붙여서 타입으로 만들어준다.
export type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'];

// 결합 타입을 만든다.
export type PolymorphicComponentProps<T extends React.ElementType, Props = {}> = AsProp<T> &
  React.ComponentPropsWithoutRef<T> &
  Props & {
    ref?: PolymorphicRef<T>;
  };
