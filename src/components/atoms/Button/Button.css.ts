import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../foundations/theme.css.js';

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
