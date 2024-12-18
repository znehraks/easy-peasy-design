import { forwardRef } from 'react';
import { switchButtonStyleRecipe, switchToggleStyleRecipe } from './Switch.css';
import clsx from 'clsx';
import { Size } from '../../types';

export type SwitchProps = Omit<React.HTMLAttributes<HTMLButtonElement>, 'children'> & {
  isChecked: boolean;
  onToggle: () => void;
  size?: Size;
  toggleClassName?: string;
  toggleStyle?: React.CSSProperties;
};

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ isChecked, onToggle, className, style, size = 'md', toggleClassName, toggleStyle, ...rest }, ref) => {
    return (
      <button
        aria-label="toggle switch"
        aria-checked={isChecked}
        role="switch"
        ref={ref}
        onClick={onToggle}
        className={clsx(switchButtonStyleRecipe({ size }), className)}
        style={style}
        {...rest}
      >
        <div className={clsx(switchToggleStyleRecipe({ isChecked, size }), toggleClassName)} style={toggleStyle}></div>
      </button>
    );
  },
);

Switch.displayName = 'Switch';
