import { forwardRef, useEffect, useId, useState, useRef } from 'react';
import { checkboxLabelStyleRecipe, checkboxStyleRecipe, checkboxWrapperStyleRecipe } from './Checkbox.css';
import { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';
import { Size } from '../../types';
import { mergeRefs } from '../../../utils';

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  RecipeVariants<typeof checkboxStyleRecipe> & {
    disabled?: boolean;
    readOnly?: boolean;
    size?: Size;
    checked?: boolean;
    indeterminate?: boolean;
    children?: React.ReactNode;
  };

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, color = 'blue', size = 'md', disabled, readOnly, children, indeterminate, checked, ...rest }, ref) => {
    const id = useId();
    const checkboxRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (checkboxRef.current) {
        checkboxRef.current.indeterminate = indeterminate ?? false;
      }
    }, [indeterminate]);

    return (
      <div className={clsx(checkboxWrapperStyleRecipe({ size }))}>
        <input
          id={id}
          ref={mergeRefs(ref, checkboxRef)}
          type="checkbox"
          checked={checked}
          className={clsx(checkboxStyleRecipe({ disabled, readOnly, color, size }), className)}
          {...rest}
        />
        <label htmlFor={id} className={clsx(checkboxLabelStyleRecipe({ size }))}>
          {children}
        </label>
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';
