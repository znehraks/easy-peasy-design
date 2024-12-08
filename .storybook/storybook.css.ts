import { style } from '@vanilla-extract/css';
import { vars } from '../src/foundations/theme.css';

export const storybookStyle = style({
  backgroundColor: vars.color.white,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const themeChangeButtonStyle = style({
  position: 'absolute',
  top: '10px',
  right: '10px',
});
