import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../foundations/theme.css';

export const checkboxWrapperStyleRecipe = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
  },
  variants: {
    size: {
      sm: {
        gap: '4px',
      },
      md: {
        gap: '8px',
      },
      lg: {
        gap: '12px',
      },
    },
  },
});

export const checkboxLabelStyleRecipe = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '3px',
    color: vars.color.black,
  },
  variants: {
    size: {
      sm: {
        fontSize: vars.fontSize[12],
      },
      md: {
        fontSize: vars.fontSize[16],
      },
      lg: {
        fontSize: vars.fontSize[20],
      },
    },
  },
});

export const checkboxStyleRecipe = recipe({
  variants: {
    color: {
      red: {
        accentColor: vars.color.red[500],
      },
      blue: {
        accentColor: vars.color.blue[500],
      },
      green: {
        accentColor: vars.color.green[500],
      },
      yellow: {
        accentColor: vars.color.yellow[500],
      },
      purple: {
        accentColor: vars.color.purple[500],
      },
      orange: {
        accentColor: vars.color.orange[500],
      },
      gray: {
        accentColor: vars.color.gray[500],
      },
      pink: {
        accentColor: vars.color.pink[500],
      },
      teal: {
        accentColor: vars.color.teal[500],
      },
      cyan: {
        accentColor: vars.color.cyan[500],
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
        cursor: 'not-allowed',
      },
    },
    readOnly: {
      true: {
        backgroundColor: vars.color.blackAlpha[200],
        cursor: 'not-allowed',
      },
    },
  },
});
