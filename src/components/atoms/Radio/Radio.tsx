import { forwardRef, useId } from 'react';
import { RecipeVariants } from '@vanilla-extract/recipes';
import { radioLabelStyleRecipe, radioStyleRecipe, radioWrapperStyleRecipe } from './Radio.css';
import clsx from 'clsx';
import { Size } from '../../types';

export type RadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  RecipeVariants<typeof radioStyleRecipe> & {
    size?: Size;
  };

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { className, color = 'blue', size = 'md', disabled, readOnly, children, ...rest } = props;
  const id = useId();

  return (
    <div className={clsx(radioWrapperStyleRecipe({ size }))}>
      <input
        id={id}
        ref={ref}
        type="radio"
        className={clsx(radioStyleRecipe({ color, size, disabled, readOnly }), className)}
        {...rest}
      />
      <label htmlFor={id} className={clsx(radioLabelStyleRecipe({ size }))}>
        {children}
      </label>
    </div>
  );
});
