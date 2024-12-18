import { forwardRef } from 'react';
import { ModalCommonProps } from './types';

export type ModalBodyProps = ModalCommonProps & {};

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
});

ModalBody.displayName = 'ModalBody';
