import { forwardRef } from 'react';
import { ModalCommonProps } from './types';

export type ModalFooterProps = ModalCommonProps & {};

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
});

ModalFooter.displayName = 'ModalFooter';
