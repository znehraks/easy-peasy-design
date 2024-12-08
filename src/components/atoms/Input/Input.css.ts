import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../foundations/theme.css';
import { normalizePath } from 'vite';

export const inputStyleRecipe = recipe({
  base: {},
  variants: {
    variant: {
      outline: {
        border: 'none',
        outline: `1px solid ${vars.color.gray[500]}`,
        borderRadius: vars.radius.sm,
        selectors: {
          '&:focus': {
            border: 'none',
            outline: `2px solid ${vars.color.blue[500]}`,
          },
          '&:active': {
            border: 'none',
            outline: `2px solid ${vars.color.blue[500]}`,
          },
          '&:disabled': {
            backgroundColor: vars.color.blackAlpha[100],
            userSelect: 'none',
            pointerEvents: 'none',
          },
          '&:readOnly': {
            backgroundColor: vars.color.blackAlpha[100],
            userSelect: 'none',
            pointerEvents: 'none',
          },
        },
      },
      underline: {
        outline: 'none',
        border: 'none',
        borderBottom: `1px solid ${vars.color.gray[500]}`,
        selectors: {
          '&:focus': {
            borderBottom: `2px solid ${vars.color.blue[500]}`,
          },
          '&:active': {
            borderBottom: `2px solid ${vars.color.blue[500]}`,
          },
          '&:disabled': {
            backgroundColor: vars.color.blackAlpha[100],
            userSelect: 'none',
            pointerEvents: 'none',
          },
          '&:readOnly': {
            backgroundColor: vars.color.blackAlpha[100],
            userSelect: 'none',
            pointerEvents: 'none',
          },
        },
      },
    },
    hasError: {
      true: {
        border: 'none',
        outline: `1px solid ${vars.color.red[500]}`,
      },
    },
    disabled: {
      true: {
        backgroundColor: vars.color.blackAlpha[100],
        userSelect: 'none',
        pointerEvents: 'none',
      },
    },
    readOnly: {
      true: {
        backgroundColor: vars.color.blackAlpha[100],
        userSelect: 'none',
        pointerEvents: 'none',
      },
    },
    focused: {
      true: {
        border: 'none',
        outline: `2px solid ${vars.color.blue[500]}`,
      },
    },
    size: {
      sm: {
        padding: '4px 8px',
        paddingTop: '6px',
        fontSize: vars.fontSize[12],
      },
      md: {
        padding: '8px 12px',
        paddingTop: '10px',
        fontSize: vars.fontSize[16],
      },
      lg: {
        padding: '12px 16px',
        paddingTop: '14px',
        fontSize: vars.fontSize[20],
      },
    },
  },
});
