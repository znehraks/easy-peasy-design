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
        backgroundColor: vars.color.blue[400],
        color: vars.color.black,
      },
      secondary: {
        backgroundColor: vars.color.blackAlpha[50],
        color: vars.color.black,
      },
      danger: {
        backgroundColor: vars.color.red[500],
        color: vars.color.white,
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
