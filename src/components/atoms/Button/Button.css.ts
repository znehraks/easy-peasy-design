import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from '../../../foundations/theme.css.js';
import { StyleRule } from '@vanilla-extract/css';

type ColorVariant =
  | 'white'
  | 'black'
  | 'red'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'pink'
  | 'orange'
  | 'teal'
  | 'gray'
  | 'cyan';

type CompoundVariantType = {
  variants: {
    color: ColorVariant;
    variant: 'solid' | 'outline' | 'ghost' | 'plain';
  };
  style: StyleRule;
};

const solidVariants: CompoundVariantType[] = [
  {
    variants: {
      color: 'white',
      variant: 'solid',
    },
    style: {
      backgroundColor: vars.color.white,
      color: vars.color.black,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          color: vars.color.black,
          backgroundColor: vars.color.blackAlpha[200],
        },
        '&:disabled:hover': {
          backgroundColor: vars.color.white,
        },
        '&[aria-readonly]:hover': {
          backgroundColor: vars.color.white,
        },
      },
    },
  },
  {
    variants: {
      color: 'black',
      variant: 'solid',
    },
    style: {
      backgroundColor: vars.color.black,
      color: vars.color.white,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.blackAlpha[800],
          color: vars.color.white,
        },
        '&:disabled:hover': {
          backgroundColor: vars.color.black,
        },
        '&[aria-readonly]:hover': {
          backgroundColor: vars.color.black,
        },
      },
    },
  },
  {
    variants: {
      color: 'red',
      variant: 'solid',
    },
    style: {
      backgroundColor: vars.color.red[500],
      color: vars.color.white,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.red[600],
        },
        '&:disabled:hover': {
          backgroundColor: vars.color.red[500],
        },
        '&[aria-readonly]:hover': {
          backgroundColor: vars.color.red[500],
        },
      },
    },
  },
  {
    variants: {
      color: 'blue',
      variant: 'solid',
    },
    style: {
      backgroundColor: vars.color.blue[500],
      color: vars.color.white,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.blue[600],
        },
        '&:disabled:hover': {
          backgroundColor: vars.color.blue[500],
        },
        '&[aria-readonly]:hover': {
          backgroundColor: vars.color.blue[500],
        },
      },
    },
  },
  {
    variants: {
      color: 'green',
      variant: 'solid',
    },
    style: {
      backgroundColor: vars.color.green[500],
      color: vars.color.white,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.green[600],
        },
        '&:disabled:hover': {
          backgroundColor: vars.color.green[500],
        },
        '&[aria-readonly]:hover': {
          backgroundColor: vars.color.green[500],
        },
      },
    },
  },
  {
    variants: {
      color: 'yellow',
      variant: 'solid',
    },
    style: {
      backgroundColor: vars.color.yellow[500],
      color: vars.color.white,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.yellow[600],
        },
        '&:disabled:hover': {
          backgroundColor: vars.color.yellow[500],
        },
        '&[aria-readonly]:hover': {
          backgroundColor: vars.color.yellow[500],
        },
      },
    },
  },
  {
    variants: {
      color: 'purple',
      variant: 'solid',
    },
    style: {
      backgroundColor: vars.color.purple[500],
      color: vars.color.white,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.purple[600],
        },
        '&:disabled:hover': {
          backgroundColor: vars.color.purple[500],
        },
        '&[aria-readonly]:hover': {
          backgroundColor: vars.color.purple[500],
        },
      },
    },
  },
  {
    variants: {
      color: 'pink',
      variant: 'solid',
    },
    style: {
      backgroundColor: vars.color.pink[500],
      color: vars.color.white,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.pink[600],
        },
        '&:disabled:hover': {
          backgroundColor: vars.color.pink[500],
        },
        '&[aria-readonly]:hover': {
          backgroundColor: vars.color.pink[500],
        },
      },
    },
  },
  {
    variants: {
      color: 'orange',
      variant: 'solid',
    },
    style: {
      backgroundColor: vars.color.orange[500],
      color: vars.color.white,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.orange[600],
        },
        '&:disabled:hover': {
          backgroundColor: vars.color.orange[500],
        },
        '&[aria-readonly]:hover': {
          backgroundColor: vars.color.orange[500],
        },
      },
    },
  },
  {
    variants: {
      color: 'teal',
      variant: 'solid',
    },
    style: {
      backgroundColor: vars.color.teal[500],
      color: vars.color.white,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.teal[600],
        },
        '&:disabled:hover': {
          backgroundColor: vars.color.teal[500],
        },
        '&[aria-readonly]:hover': {
          backgroundColor: vars.color.teal[500],
        },
      },
    },
  },
  {
    variants: {
      color: 'gray',
      variant: 'solid',
    },
    style: {
      backgroundColor: vars.color.gray[500],
      color: vars.color.white,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.gray[600],
        },
        '&:disabled:hover': {
          backgroundColor: vars.color.gray[500],
        },
        '&[aria-readonly]:hover': {
          backgroundColor: vars.color.gray[500],
        },
      },
    },
  },
  {
    variants: {
      color: 'cyan',
      variant: 'solid',
    },
    style: {
      backgroundColor: vars.color.cyan[500],
      color: vars.color.white,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.cyan[600],
        },
        '&:disabled:hover': {
          backgroundColor: vars.color.cyan[500],
        },
        '&[aria-readonly]:hover': {
          backgroundColor: vars.color.cyan[500],
        },
      },
    },
  },
];

const outlineVariants: CompoundVariantType[] = [
  {
    variants: {
      color: 'white',
      variant: 'outline',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.black,
      border: `1px solid ${vars.color.blackAlpha[400]}`,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.blackAlpha[200],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'black',
      variant: 'outline',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.black,
      border: `1px solid ${vars.color.blackAlpha[400]}`,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.blackAlpha[200],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'red',
      variant: 'outline',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.red[500],
      border: `1px solid ${vars.color.red[300]}`,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.red[100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'blue',
      variant: 'outline',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.blue[500],
      border: `1px solid ${vars.color.blue[300]}`,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.blue[100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'green',
      variant: 'outline',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.green[500],
      border: `1px solid ${vars.color.green[300]}`,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.green[100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'yellow',
      variant: 'outline',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.yellow[500],
      border: `1px solid ${vars.color.yellow[300]}`,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.yellow[100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'purple',
      variant: 'outline',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.purple[500],
      border: `1px solid ${vars.color.purple[300]}`,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.purple[100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },

  {
    variants: {
      color: 'pink',
      variant: 'outline',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.pink[500],
      border: `1px solid ${vars.color.pink[300]}`,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.pink[100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'orange',
      variant: 'outline',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.orange[500],
      border: `1px solid ${vars.color.orange[300]}`,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.orange[100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'teal',
      variant: 'outline',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.teal[500],
      border: `1px solid ${vars.color.teal[300]}`,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.teal[100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'gray',
      variant: 'outline',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.gray[500],
      border: `1px solid ${vars.color.gray[300]}`,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.gray[100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'cyan',
      variant: 'outline',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.cyan[500],
      border: `1px solid ${vars.color.cyan[300]}`,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.cyan[100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
];

const ghostVariants: CompoundVariantType[] = [
  {
    variants: {
      color: 'white',
      variant: 'ghost',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.black,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.blackAlpha[200],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'black',
      variant: 'ghost',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.black,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.blackAlpha[200],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'red',
      variant: 'ghost',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.red[500],
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.red[100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'blue',
      variant: 'ghost',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.blue[500],
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.blue[100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'green',
      variant: 'ghost',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.green[500],
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.green[100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'yellow',
      variant: 'ghost',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.yellow[500],
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.yellow[100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'purple',
      variant: 'ghost',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.purple[500],
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.purple[100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'pink',
      variant: 'ghost',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.pink[500],
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.pink[100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'orange',
      variant: 'ghost',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.orange[500],
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.orange[100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'teal',
      variant: 'ghost',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.teal[500],
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.teal[100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'gray',
      variant: 'ghost',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.gray[500],
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.gray[100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  {
    variants: {
      color: 'cyan',
      variant: 'ghost',
    },
    style: {
      backgroundColor: 'transparent',
      color: vars.color.cyan[500],
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color.cyan[100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  },
];

const plainVariants: CompoundVariantType[] = [
  {
    variants: {
      color: 'white',
      variant: 'plain',
    },
    style: {
      color: vars.color.black,
      backgroundColor: 'transparent',
    },
  },
  {
    variants: {
      color: 'black',
      variant: 'plain',
    },
    style: {
      color: vars.color.black,
      backgroundColor: 'transparent',
    },
  },
  {
    variants: {
      color: 'red',
      variant: 'plain',
    },
    style: {
      color: vars.color.red[500],
      backgroundColor: 'transparent',
    },
  },
  {
    variants: {
      color: 'blue',
      variant: 'plain',
    },
    style: {
      color: vars.color.blue[500],
      backgroundColor: 'transparent',
    },
  },
  {
    variants: {
      color: 'green',
      variant: 'plain',
    },
    style: {
      color: vars.color.green[500],
      backgroundColor: 'transparent',
    },
  },
  {
    variants: {
      color: 'yellow',
      variant: 'plain',
    },
    style: {
      color: vars.color.yellow[500],
      backgroundColor: 'transparent',
    },
  },
  {
    variants: {
      color: 'purple',
      variant: 'plain',
    },
    style: {
      color: vars.color.purple[500],
      backgroundColor: 'transparent',
    },
  },
  {
    variants: {
      color: 'pink',
      variant: 'plain',
    },
    style: {
      color: vars.color.pink[500],
      backgroundColor: 'transparent',
    },
  },
  {
    variants: {
      color: 'orange',
      variant: 'plain',
    },
    style: {
      color: vars.color.orange[500],
      backgroundColor: 'transparent',
    },
  },
  {
    variants: {
      color: 'teal',
      variant: 'plain',
    },
    style: {
      color: vars.color.teal[500],
      backgroundColor: 'transparent',
    },
  },
  {
    variants: {
      color: 'gray',
      variant: 'plain',
    },
    style: {
      color: vars.color.gray[500],
      backgroundColor: 'transparent',
    },
  },
  {
    variants: {
      color: 'cyan',
      variant: 'plain',
    },
    style: {
      color: vars.color.cyan[500],
      backgroundColor: 'transparent',
    },
  },
];

export const button = recipe({
  base: {
    transition: `background-color ${vars.duration.medium}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
    readOnly: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
    color: {
      white: {
        backgroundColor: vars.color.white,
        color: vars.color.black,
      },
      black: {
        backgroundColor: vars.color.black,
        color: vars.color.white,
      },
      red: {
        backgroundColor: vars.color.red[500],
        color: vars.color.white,
      },
      blue: {
        backgroundColor: vars.color.blue[500],
        color: vars.color.white,
      },
      green: {
        backgroundColor: vars.color.green[500],
        color: vars.color.white,
      },
      yellow: {
        backgroundColor: vars.color.yellow[500],
        color: vars.color.white,
      },
      purple: {
        backgroundColor: vars.color.purple[500],
        color: vars.color.white,
      },
      pink: {
        backgroundColor: vars.color.pink[500],
        color: vars.color.white,
      },
      orange: {
        backgroundColor: vars.color.orange[500],
        color: vars.color.white,
      },
      teal: {
        backgroundColor: vars.color.teal[500],
        color: vars.color.white,
      },
      gray: {
        backgroundColor: vars.color.gray[500],
        color: vars.color.white,
      },
      cyan: {
        backgroundColor: vars.color.cyan[500],
        color: vars.color.white,
      },
    },
    variant: {
      solid: {
        backgroundColor: vars.color.blue[500],
        color: vars.color.white,
        '&:hover': {
          backgroundColor: vars.color.blue[600],
        },
      },
      outline: {
        backgroundColor: 'transparent',
        border: `1px solid ${vars.color.blackAlpha[200]}`,
        '&:hover': {
          backgroundColor: vars.color.blackAlpha[200],
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        '&:hover': {
          backgroundColor: vars.color.blackAlpha[200],
        },
      },
      plain: {
        backgroundColor: 'transparent',
      },
    },
    size: {
      sm: {
        padding: '6px 12px',
      },
      md: {
        padding: '10px 16px',
      },
      lg: {
        padding: '12px 24px',
      },
    },
  },
  compoundVariants: [...solidVariants, ...outlineVariants, ...ghostVariants, ...plainVariants],
});

export type ButtonVariants = RecipeVariants<typeof button>;
