import { forwardRef } from 'react';
import { inputStyleRecipe } from './Input.css';
import { RecipeVariants } from '@vanilla-extract/recipes';
import { Size } from '../../types';
import clsx from 'clsx';

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  RecipeVariants<typeof inputStyleRecipe> & {
    size?: Size;
    variant?: 'outline' | 'underline';
  };

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { size = 'md', hasError, disabled, readOnly, focused, variant, className, ...rest } = props;
  return (
    <input
      ref={ref}
      disabled={disabled}
      readOnly={readOnly}
      className={clsx(inputStyleRecipe({ size, hasError, disabled, readOnly, focused, variant }), className)}
      {...rest}
    />
  );
});
