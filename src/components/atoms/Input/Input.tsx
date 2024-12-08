import { forwardRef } from 'react';
import { inputContainerStyle, inputPrefixStyle, inputStyleRecipe, inputSuffixStyle } from './Input.css';
import { RecipeVariants } from '@vanilla-extract/recipes';
import { Size } from '../../types';
import clsx from 'clsx';

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
  RecipeVariants<typeof inputStyleRecipe> & {
    size?: Size;
    variant?: 'outline' | 'underline';
    suffix?: React.ReactNode;
    prefix?: React.ReactNode;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { size = 'md', hasError, disabled, readOnly, focused, variant, className, suffix, prefix, ...rest } = props;
  return (
    <div className={inputContainerStyle}>
      <div className={inputPrefixStyle({ size })}>{prefix}</div>
      <input
        ref={ref}
        disabled={disabled}
        readOnly={readOnly}
        className={clsx(
          inputStyleRecipe({
            size,
            hasError,
            disabled,
            readOnly,
            focused,
            variant,
            hasPrefix: !!prefix,
            hasSuffix: !!suffix,
          }),
          className,
        )}
        {...rest}
      />
      <div className={inputSuffixStyle({ size })}>{suffix}</div>
    </div>
  );
});
