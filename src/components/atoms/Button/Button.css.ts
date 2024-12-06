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

// 색상 배열 정의
const colors: ColorVariant[] = [
  'white',
  'black',
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  'pink',
  'orange',
  'teal',
  'gray',
  'cyan',
];

// solid 변형 스타일 생성 함수
const createSolidVariant = (color: ColorVariant): CompoundVariantType => {
  if (color === 'white' || color === 'black') {
    return {
      variants: { color, variant: 'solid' },
      style: {
        backgroundColor: vars.color[color],
        color: color === 'white' ? vars.color.black : vars.color.white,
        selectors: {
          '&:not([disabled]):not([aria-readonly="true"]):hover': {
            backgroundColor: color === 'white' ? vars.color.blackAlpha[200] : vars.color.blackAlpha[800],
            color: color === 'white' ? vars.color.black : vars.color.white,
          },
          '&:disabled:hover': {
            backgroundColor: vars.color[color],
          },
          '&[aria-readonly="true"]:hover': {
            backgroundColor: vars.color[color],
          },
        },
      },
    };
  }

  return {
    variants: { color, variant: 'solid' },
    style: {
      backgroundColor: vars.color[color][500],
      color: vars.color.white,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color[color][600],
        },
        '&:disabled:hover': {
          backgroundColor: vars.color[color][500],
        },
        '&[aria-readonly="true"]:hover': {
          backgroundColor: vars.color[color][500],
        },
      },
    },
  };
};

// outline 변형 스타일 생성 함수
const createOutlineVariant = (color: ColorVariant): CompoundVariantType => {
  if (color === 'white' || color === 'black') {
    return {
      variants: { color, variant: 'outline' },
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
          '&[aria-readonly="true"]:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    };
  }

  return {
    variants: { color, variant: 'outline' },
    style: {
      backgroundColor: 'transparent',
      color: vars.color[color][500],
      border: `1px solid ${vars.color[color][300]}`,
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color[color][100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly="true"]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  };
};

// ghost 변형 스타일 생성 함수
const createGhostVariant = (color: ColorVariant): CompoundVariantType => {
  if (color === 'white' || color === 'black') {
    return {
      variants: { color, variant: 'ghost' },
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
          '&[aria-readonly="true"]:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    };
  }

  return {
    variants: { color, variant: 'ghost' },
    style: {
      backgroundColor: 'transparent',
      color: vars.color[color][500],
      selectors: {
        '&:not([disabled]):not([aria-readonly="true"]):hover': {
          backgroundColor: vars.color[color][100],
        },
        '&:disabled:hover': {
          backgroundColor: 'transparent',
        },
        '&[aria-readonly="true"]:hover': {
          backgroundColor: 'transparent',
        },
      },
    },
  };
};

// plain 변형 스타일 생성 함수
const createPlainVariant = (color: ColorVariant): CompoundVariantType => ({
  variants: { color, variant: 'plain' },
  style: {
    color: color === 'white' || color === 'black' ? vars.color.black : vars.color[color][500],
    backgroundColor: 'transparent',
  },
});

// 각 변형별 스타일 생성
const solidVariants = colors.map(createSolidVariant);
const outlineVariants = colors.map(createOutlineVariant);
const ghostVariants = colors.map(createGhostVariant);
const plainVariants = colors.map(createPlainVariant);

export const buttonStyleRecipe = recipe({
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

export type ButtonVariants = RecipeVariants<typeof buttonStyleRecipe>;
