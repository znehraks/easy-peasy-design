import { forwardRef } from 'react';
import clsx from 'clsx';
import { button } from './Button.css.js';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, className, ...rest }, ref) => {
    return (
      <button ref={ref} className={clsx(button({ variant, size }), className)} {...rest}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
