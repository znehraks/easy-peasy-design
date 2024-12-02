import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme.css';

export const button = recipe({
  base: { background: vars.color['--red-100'] },
  variants: {
    variant: {
      primary: {},
      secondary: {},
      danger: {},
    },
    size: {
      sm: {},
      md: {},
      lg: {},
    },
  },
});
