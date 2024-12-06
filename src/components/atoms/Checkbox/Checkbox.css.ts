import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../foundations/theme.css';

export const checkboxStyleRecipe = recipe({
  base: {},
  variants: {
    color: {
      while: {
        backgroundColor: vars.color.white,
      },
      black: {
        backgroundColor: vars.color.black,
      },
    },
    size: {
      sm: {
        width: '16px',
        height: '16px',
      },
      md: {
        width: '20px',
        height: '20px',
      },
      lg: {
        width: '24px',
        height: '24px',
      },
    },
    disabled: {
      true: {
        backgroundColor: vars.color.blackAlpha[200],
      },
    },
    readOnly: {
      true: {
        backgroundColor: vars.color.blackAlpha[200],
      },
    },
  },
});
