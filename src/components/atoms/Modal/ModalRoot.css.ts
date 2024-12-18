import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const TRANSITION_SECONDS = 0.3;

export const modalRootStyle = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const modalContainerStyleRecipe = recipe({
  base: {
    position: 'fixed',
    willChange: 'transform opacity scale',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '400px',
    height: '400px',
    backgroundColor: 'white',
    zIndex: 1001,
  },
  variants: {
    isVisible: {
      true: {
        opacity: 1,
        scale: 1,
        transition: `opacity ${TRANSITION_SECONDS}s ease, scale ${TRANSITION_SECONDS}s ease`,
      },
      false: {
        opacity: 0,
        scale: 0,
        transition: `opacity ${TRANSITION_SECONDS}s ease, scale ${TRANSITION_SECONDS}s ease`,
      },
    },
  },
});

export const modalBackdropStyleRecipe = recipe({
  base: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1000,
    willChange: 'transform opacity',
  },
  variants: {
    isVisible: {
      true: {
        opacity: 1,
        transition: `opacity ${TRANSITION_SECONDS}s ease`,
      },
      false: {
        opacity: 0,
        transition: `opacity ${TRANSITION_SECONDS}s ease`,
      },
    },
  },
});
