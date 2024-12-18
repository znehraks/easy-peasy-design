import { style } from '@vanilla-extract/css';
import { vars } from '../../../foundations/theme.css';

export const cardStyleRecipe = style({
  backgroundColor: vars.color.white,
  borderRadius: '8px',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
});
