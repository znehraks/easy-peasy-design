import { forwardRef } from 'react';
import { ModalCommonProps } from './types';

export type ModalHeaderProps = ModalCommonProps & {};

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
});

ModalHeader.displayName = 'ModalHeader';
