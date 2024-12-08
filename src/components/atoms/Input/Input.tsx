import { forwardRef, useRef, useState } from 'react';
import { inputContainerStyle, inputPrefixStyle, inputStyleRecipe, inputSuffixStyle } from './Input.css';
import { RecipeVariants } from '@vanilla-extract/recipes';
import { Size } from '../../types';
import clsx from 'clsx';
import { mergeRefs } from '../../../utils';

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'suffix'> &
  RecipeVariants<typeof inputStyleRecipe> & {
    size?: Size;
    variant?: 'outline' | 'underline';
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    containerClassName?: string;
    inputClassName?: string;
    prefixClassName?: string;
    suffixClassName?: string;
    containerOverrideStyle?: React.CSSProperties;
    inputOverrideStyle?: React.CSSProperties;
    prefixOverrideStyle?: React.CSSProperties;
    suffixOverrideStyle?: React.CSSProperties;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    size = 'md',
    hasError,
    disabled,
    readOnly,
    focused,
    onFocus,
    onBlur,
    variant,
    className,
    suffix,
    prefix,
    containerClassName,
    inputClassName,
    prefixClassName,
    suffixClassName,
    containerOverrideStyle,
    inputOverrideStyle,
    prefixOverrideStyle,
    suffixOverrideStyle,
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <div className={clsx(inputContainerStyle, containerClassName)} style={containerOverrideStyle}>
      <div
        className={clsx(inputPrefixStyle({ size, focused: isFocused }), prefixClassName)}
        style={prefixOverrideStyle}
      >
        {prefix}
      </div>
      <input
        ref={mergeRefs(ref, inputRef)}
        disabled={disabled}
        readOnly={readOnly}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
          inputClassName,
        )}
        style={inputOverrideStyle}
        {...rest}
      />
      <div
        className={clsx(inputSuffixStyle({ size, focused: isFocused }), suffixClassName)}
        style={suffixOverrideStyle}
      >
        {suffix}
      </div>
    </div>
  );
});
