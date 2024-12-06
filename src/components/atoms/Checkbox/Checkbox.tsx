import { forwardRef } from 'react';
import { checkboxStyleRecipe } from './Checkbox.css';
import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';
import { vars } from '../../../foundations/theme.css';
import { Size } from '../../types';

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  RecipeVariants<typeof checkboxStyleRecipe> & {
    disabled?: boolean;
    readOnly?: boolean;
    size?: Size;
  };

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, color, size = 'md', disabled, readOnly, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        className={clsx(checkboxStyleRecipe({ disabled, readOnly, color, size }), className)}
        {...rest}
      />
    );
  },
);

Checkbox.displayName = 'Checkbox';
