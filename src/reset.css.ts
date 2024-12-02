import { globalStyle } from '@vanilla-extract/css'

// 기본 리셋
globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
})

globalStyle('html, body', {
  height: '100%',
  width: '100%',
})

globalStyle('body', {
  lineHeight: 1.5,
  WebkitFontSmoothing: 'antialiased',
})

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
})

globalStyle('input, button, textarea, select', {
  font: 'inherit',
})

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
})

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
})

globalStyle('ul, ol', {
  listStyle: 'none',
}) 