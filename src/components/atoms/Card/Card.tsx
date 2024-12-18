import clsx from 'clsx';
import { forwardRef } from 'react';
import { cardStyleRecipe } from './Card.css';

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {};

export const Card = forwardRef<HTMLDivElement, CardProps>(({ children, className, ...rest }, ref) => {
  return (
    <div ref={ref} className={clsx(cardStyleRecipe, className)} {...rest}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';
