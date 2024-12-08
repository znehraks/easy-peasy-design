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
  },
  variants: {
    size: {
      sm: {
        fontSize: '14px',
      },
      md: {
        fontSize: '18px',
      },
      lg: {
        fontSize: '22px',
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
      },
    },
    readOnly: {
      true: {
        backgroundColor: vars.color.blackAlpha[200],
      },
    },
  },
});
