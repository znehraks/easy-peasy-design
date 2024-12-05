import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    '--red-100': '#FF0000',
    '--red-200': '#FF0000',
    '--blue-100': '#0000FF',
    '--blue-200': '#0000FF',
    '--green-100': '#00FF00',
    '--green-200': '#00FF00',
  },
  space: {
    '--space-1': '12px',
    '--space-2': '16px',
    '--space-3': '20px',
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
