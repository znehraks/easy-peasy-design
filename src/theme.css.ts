import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    red100: '#FF0000',
    blue100: '#0000FF',
    green100: '#00FF00',
  },
  space: {
    space1: '12px',
    space2: '16px',
    space3: '20px',
  },
  size: {},
  border: {},
  radius: {},
  font: {},
  zIndex: {},
  duration: {},
  shadow: {},
  layer: {},
  motion: {},
  transition: {},
  breakpoint: {},
  opacity: {},
});
