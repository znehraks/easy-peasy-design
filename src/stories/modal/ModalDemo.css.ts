import { style } from '@vanilla-extract/css';

export const modalDemoRootStyle = style({
  padding: '8px 12px',
});

export const modalDemoHeaderStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const modalDemoBodyStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  flex: 1,
});

export const modalDemoFooterStyle = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '8px',
});
