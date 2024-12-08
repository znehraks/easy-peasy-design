import { globalStyle } from '@vanilla-extract/css';

// 기본 리셋
globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  height: '100%',
  width: '100%',
});

globalStyle('body', {
  // 모멘텀 스크롤
  WebkitOverflowScrolling: 'touch',
  // 노치 디스플레이 대응
  paddingTop: 'env(safe-area-inset-top)',
  paddingBottom: 'env(safe-area-inset-bottom)',
  paddingLeft: 'env(safe-area-inset-left)',
  paddingRight: 'env(safe-area-inset-right)',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalStyle('ul, ol', {
  listStyle: 'none',
});
