import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../foundations/theme.css';
import { style } from '@vanilla-extract/css';

export const inputContainerStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  position: 'relative',
});

const addonStyle = style({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.gray[500],
});

export const inputPrefixStyle = recipe({
  base: addonStyle,
  variants: {
    focused: {
      true: {
        color: vars.color.black,
      },
    },
    size: {
      sm: {
        width: '18px',
        height: '18px',
        left: '8px',
      },
      md: {
        width: '24px',
        height: '24px',
        left: '12px',
      },
      lg: {
        width: '28px',
        height: '28px',
        left: '16px',
      },
    },
  },
});

export const inputSuffixStyle = recipe({
  base: addonStyle,
  variants: {
    focused: {
      true: {
        color: vars.color.black,
      },
    },
    size: {
      sm: {
        width: '18px',
        height: '18px',
        right: '8px',
      },
      md: {
        width: '24px',
        height: '24px',
        right: '12px',
      },
      lg: {
        width: '28px',
        height: '28px',
        right: '16px',
      },
    },
  },
});

export const inputStyleRecipe = recipe({
  base: {
    color: vars.color.black,
    backgroundColor: vars.color.white,
  },
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
        padding: '8px 12px',
        paddingTop: '10px',
        fontSize: vars.fontSize[12],
      },
      md: {
        padding: '10px 16px',
        paddingTop: '12px',
        fontSize: vars.fontSize[16],
      },
      lg: {
        padding: '10px 16px',
        paddingTop: '12px',
        fontSize: vars.fontSize[20],
      },
    },
    hasPrefix: {
      true: {},
    },
    hasSuffix: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variants: { hasPrefix: true, size: 'sm' },
      style: { paddingLeft: '32px' },
    },
    {
      variants: { hasPrefix: true, size: 'md' },
      style: { paddingLeft: '40px' },
    },
    {
      variants: { hasPrefix: true, size: 'lg' },
      style: { paddingLeft: '44px' },
    },
    {
      variants: { hasSuffix: true, size: 'sm' },
      style: { paddingRight: '32px' },
    },
    {
      variants: { hasSuffix: true, size: 'md' },
      style: { paddingRight: '40px' },
    },
    {
      variants: { hasSuffix: true, size: 'lg' },
      style: { paddingRight: '44px' },
    },
  ],
});
