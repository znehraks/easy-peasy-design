import { recipe } from '@vanilla-extract/recipes';
import { TRANSITION_SECONDS } from '../../common/constants';

export const switchButtonStyleRecipe = recipe({
  base: {
    border: '1px solid #ccc',
    cursor: 'pointer',
    position: 'relative',
    padding: '2px',
    backgroundColor: '#d3d3d3',
  },
  variants: {
    size: {
      sm: {
        width: '44px',
        height: '24px',
        borderRadius: '12px',
      },
      md: {
        width: '84px',
        height: '44px',
        borderRadius: '22px',
      },
      lg: {
        width: '124px',
        height: '64px',
        borderRadius: '32px',
      },
    },
  },
});

export const switchToggleStyleRecipe = recipe({
  base: {
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: '2px',
    borderRadius: '50%',
    transition: `all ${TRANSITION_SECONDS}s ease-in-out`,
    willChange: 'transform',
  },
  variants: {
    isChecked: {
      true: {
        backgroundColor: 'red',
      },
      false: {
        backgroundColor: 'blue',
      },
    },
    size: {
      sm: {
        width: '16px',
        height: '16px',
      },
      md: {
        width: '36px',
        height: '36px',
      },
      lg: {
        width: '56px',
        height: '56px',
      },
    },
  },
  compoundVariants: [
    {
      variants: { isChecked: true, size: 'sm' },
      style: {
        transform: 'translateX(24px) translateY(-50%)',
      },
    },
    {
      variants: { isChecked: false, size: 'sm' },
      style: {
        transform: 'translateX(0) translateY(-50%)',
      },
    },
    {
      variants: { isChecked: true, size: 'md' },
      style: {
        transform: 'translateX(44px) translateY(-50%)',
      },
    },
    {
      variants: { isChecked: false, size: 'md' },
      style: {
        transform: 'translateX(0) translateY(-50%)',
      },
    },
    {
      variants: { isChecked: true, size: 'lg' },
      style: {
        transform: 'translateX(64px) translateY(-50%)',
      },
    },
    {
      variants: { isChecked: false, size: 'lg' },
      style: {
        transform: 'translateX(0) translateY(-50%)',
      },
    },
  ],
});
