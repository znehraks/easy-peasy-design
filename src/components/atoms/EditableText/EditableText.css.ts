import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../foundations/theme.css';

export const editableTextContainerStyleRecipe = recipe({
  base: {
    backgroundColor: vars.color.white,
    color: vars.color.black,
    borderRadius: vars.radius.sm,
    border: `1px solid ${vars.color.gray[300]}`,
  },
});

export const editableTextInputStyleRecipe = recipe({
  base: {
    backgroundColor: vars.color.white,
    color: vars.color.black,
    borderRadius: vars.radius.sm,
    border: `1px solid ${vars.color.gray[300]}`,
    padding: '0 2px',
  },
});

export const editableTextSpanStyleRecipe = recipe({
  base: {
    cursor: 'pointer',
  },
});
