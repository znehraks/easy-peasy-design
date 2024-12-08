import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../foundations/theme.css';

export const radioWrapperStyleRecipe = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
  },
  variants: {
    size: {
      sm: {
        fontSize: vars.fontSize[12],
        gap: '0.25rem',
      },
      md: {
        fontSize: vars.fontSize[16],
        gap: '0.5rem',
      },
      lg: {
        fontSize: vars.fontSize[20],
        gap: '0.5rem',
      },
    },
  },
});
export const radioLabelStyleRecipe = recipe({
  base: {
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
export const radioStyleRecipe = recipe({
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
        width: '12px',
        height: '12px',
      },
      md: {
        width: '18px',
        height: '18px',
      },
      lg: {
        width: '22px',
        height: '22px',
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
    readOnly: {
      true: {
        cursor: 'not-allowed',
      },
    },
  },
});
