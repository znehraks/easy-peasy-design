type asProps = {
  as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>;
};

type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, 'as'>;

export type AsElementProps = asProps & ElementProps;
