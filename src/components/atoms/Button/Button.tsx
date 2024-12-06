import { forwardRef } from 'react';
import clsx from 'clsx';
import { buttonStyleRecipe, ButtonVariants } from './Button.css.js';
import { Size } from '../../types.js';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    className?: string;
    disabled?: boolean;
    readOnly?: boolean;
    size?: Size;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'solid', size = 'md', color, className, disabled, readOnly, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(buttonStyleRecipe({ variant, size, color, disabled, readOnly }), className)}
        disabled={disabled}
        aria-readonly={!!readOnly}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
