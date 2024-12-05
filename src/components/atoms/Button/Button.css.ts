import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../theme.css';

export const button = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.color.red100,
      },
      secondary: {
        backgroundColor: vars.color.blue100,
      },
      danger: {
        backgroundColor: vars.color.green100,
      },
    },
    size: {
      sm: {
        padding: vars.space.space1,
      },
      md: {
        padding: vars.space.space2,
      },
      lg: {
        padding: vars.space.space3,
      },
    },
  },
});
