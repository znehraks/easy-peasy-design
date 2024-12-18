import { forwardRef } from 'react';

export type OptionProps = React.HTMLAttributes<HTMLDivElement> & {
  id: string;
  value: string;
};

export const Option = forwardRef<HTMLDivElement, OptionProps>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
});

Option.displayName = 'Option';
