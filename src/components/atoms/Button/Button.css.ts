import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../theme.css.js';

export const button = recipe({
  base: {},
  variants: {
    variant: {
      primary: {
        background: vars.color['--red-100'],
      },
      secondary: {
        background: vars.color['--blue-100'],
      },
      danger: {
        background: vars.color['--green-100'],
      },
    },
    size: {
      sm: {
        padding: 12,
      },
      md: {
        padding: 16,
      },
      lg: {
        padding: 20,
      },
    },
  },
});
