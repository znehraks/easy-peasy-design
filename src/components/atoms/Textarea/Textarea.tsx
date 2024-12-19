import { forwardRef } from 'react';

export type TextareaProps = React.HTMLAttributes<HTMLTextAreaElement> & {
  children: React.ReactNode;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ children, ...rest }, ref) => {
  return (
    <textarea ref={ref} {...rest}>
      {children}
    </textarea>
  );
});

Textarea.displayName = 'Textarea';
