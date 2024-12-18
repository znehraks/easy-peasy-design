import { forwardRef } from 'react';

export type SelectProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Select = forwardRef<HTMLDivElement, SelectProps>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      <div>트리거</div>
      {children}
    </div>
  );
});

Select.displayName = 'Select';
