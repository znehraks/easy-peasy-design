import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    white: '#ffffff',
    black: '#000000',
    whiteAlpha: {
      50: 'rgba(255,255,255, 0.04)',
      100: 'rgba(255,255,255, 0.06)',
      200: 'rgba(255,255,255, 0.08)',
      300: 'rgba(255,255,255, 0.16)',
      400: 'rgba(255,255,255, 0.24)',
      500: 'rgba(255,255,255, 0.36)',
      600: 'rgba(255,255,255, 0.48)',
      700: 'rgba(255,255,255, 0.64)',
      800: 'rgba(255,255,255, 0.80)',
      900: 'rgba(255,255,255, 0.92)',
      950: 'rgba(255,255,255, 1)',
    },
    blackAlpha: {
      50: 'rgba(0,0,0, 0.04)',
      100: 'rgba(0,0,0, 0.06)',
      200: 'rgba(0,0,0, 0.08)',
      300: 'rgba(0,0,0, 0.16)',
      400: 'rgba(0,0,0, 0.24)',
      500: 'rgba(0,0,0, 0.36)',
      600: 'rgba(0,0,0, 0.48)',
      700: 'rgba(0,0,0, 0.64)',
      800: 'rgba(0,0,0, 0.80)',
      900: 'rgba(0,0,0, 0.92)',
      950: 'rgba(0,0,0, 1)',
    },
    gray: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
      950: '#111111',
    },
    red: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#991919',
      800: '#511111',
      900: '#300c0c',
      950: '#1c0505',
    },
    pink: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#a41752',
      800: '#6d0e34',
      900: '#45061f',
    },
    purple: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#641ba3',
      800: '#4a1772',
      900: '#2f0553',
      950: '#1a032e',
    },

    cyan: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0c5c72',
      800: '#134152',
      900: '#072a38',
      950: '#051b24',
    },
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#a3cfff',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#173da6',
      800: '#1a3478',
      900: '#14204a',
      950: '#0c142e',
    },
    teal: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0c5d56',
      800: '#114240',
      900: '#032726',
      950: '#021716',
    },
    green: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#116932',
      800: '#124a28',
      900: '#042713',
      950: '#03190c',
    },
    yellow: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#eab308',
      600: '#ca8a04',
      700: '#845209',
      800: '#713f12',
      900: '#422006',
      950: '#281304',
    },
    orange: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#92310a',
      800: '#6c2710',
      900: '#3b1106',
      950: '#220a04',
    },
  },
  space: {},
  border: {},
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  fontSize: {
    12: '0.75rem',
    14: '0.875rem',
    16: '1rem',
    20: '1.25rem',
    24: '1.5rem',
    32: '2rem',
    40: '2.5rem',
    48: '3rem',
    56: '3.5rem',
    64: '4rem',
    72: '4.5rem',
    80: '5rem',
    96: '6rem',
  },
  zIndex: {
    hide: '-1',
    auto: 'auto',
    base: '0',
    docked: '10',
    dropdown: '1000',
    sticky: '1100',
    banner: '1200',
    overlay: '1300',
    modal: '1400',
    popover: '1500',
    skipLink: '1600',
    toast: '1700',
    tooltip: '1800',
  },
  duration: {
    short: '150ms',
    medium: '200ms',
    long: '300ms',
  },
  shadow: {
    sm: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
    md: '0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
    lg: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  layer: {},
  motion: {},
  breakpoint: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  opacity: {
    0: '0',
    25: '0.25',
    50: '0.5',
    75: '0.75',
    100: '1',
  },
});

globalStyle(':root', {
  '@media': {
    '(prefers-color-scheme: dark)': {
      vars: {
        [vars.color.white]: '#000000',
        [vars.color.black]: '#ffffff',
        // whiteAlpha 반전
        [vars.color.whiteAlpha[50]]: 'rgba(255,255,255, 1)',
        [vars.color.whiteAlpha[100]]: 'rgba(255,255,255, 0.92)',
        [vars.color.whiteAlpha[200]]: 'rgba(255,255,255, 0.80)',
        [vars.color.whiteAlpha[300]]: 'rgba(255,255,255, 0.64)',
        [vars.color.whiteAlpha[400]]: 'rgba(255,255,255, 0.48)',
        [vars.color.whiteAlpha[500]]: 'rgba(255,255,255, 0.36)',
        [vars.color.whiteAlpha[600]]: 'rgba(255,255,255, 0.24)',
        [vars.color.whiteAlpha[700]]: 'rgba(255,255,255, 0.16)',
        [vars.color.whiteAlpha[800]]: 'rgba(255,255,255, 0.08)',
        [vars.color.whiteAlpha[900]]: 'rgba(255,255,255, 0.06)',
        [vars.color.whiteAlpha[950]]: 'rgba(255,255,255, 0.04)',

        // blackAlpha 반전
        [vars.color.blackAlpha[50]]: 'rgba(0,0,0, 1)',
        [vars.color.blackAlpha[100]]: 'rgba(0,0,0, 0.92)',
        [vars.color.blackAlpha[200]]: 'rgba(0,0,0, 0.80)',
        [vars.color.blackAlpha[300]]: 'rgba(0,0,0, 0.64)',
        [vars.color.blackAlpha[400]]: 'rgba(0,0,0, 0.48)',
        [vars.color.blackAlpha[500]]: 'rgba(0,0,0, 0.36)',
        [vars.color.blackAlpha[600]]: 'rgba(0,0,0, 0.24)',
        [vars.color.blackAlpha[700]]: 'rgba(0,0,0, 0.16)',
        [vars.color.blackAlpha[800]]: 'rgba(0,0,0, 0.08)',
        [vars.color.blackAlpha[900]]: 'rgba(0,0,0, 0.06)',
        [vars.color.blackAlpha[950]]: 'rgba(0,0,0, 0.04)',

        // gray 반전
        [vars.color.gray[50]]: '#111111',
        [vars.color.gray[100]]: '#18181b',
        [vars.color.gray[200]]: '#27272a',
        [vars.color.gray[300]]: '#3f3f46',
        [vars.color.gray[400]]: '#52525b',
        [vars.color.gray[500]]: '#71717a',
        [vars.color.gray[600]]: '#a1a1aa',
        [vars.color.gray[700]]: '#d4d4d8',
        [vars.color.gray[800]]: '#e4e4e7',
        [vars.color.gray[900]]: '#f4f4f5',
        [vars.color.gray[950]]: '#fafafa',

        // red 반전
        [vars.color.red[50]]: '#1c0505',
        [vars.color.red[100]]: '#300c0c',
        [vars.color.red[200]]: '#511111',
        [vars.color.red[300]]: '#991919',
        [vars.color.red[400]]: '#dc2626',
        [vars.color.red[500]]: '#ef4444',
        [vars.color.red[600]]: '#f87171',
        [vars.color.red[700]]: '#fca5a5',
        [vars.color.red[800]]: '#fecaca',
        [vars.color.red[900]]: '#fee2e2',
        [vars.color.red[950]]: '#fef2f2',

        // pink 반전
        [vars.color.pink[50]]: '#45061f',
        [vars.color.pink[100]]: '#6d0e34',
        [vars.color.pink[200]]: '#a41752',
        [vars.color.pink[300]]: '#db2777',
        [vars.color.pink[400]]: '#ec4899',
        [vars.color.pink[500]]: '#f472b6',
        [vars.color.pink[600]]: '#f9a8d4',
        [vars.color.pink[700]]: '#fbcfe8',
        [vars.color.pink[800]]: '#fce7f3',
        [vars.color.pink[900]]: '#fdf2f8',

        // purple 반전
        [vars.color.purple[50]]: '#2f0553',
        [vars.color.purple[100]]: '#4a1772',
        [vars.color.purple[200]]: '#641ba3',
        [vars.color.purple[300]]: '#9333ea',
        [vars.color.purple[400]]: '#c084fc',
        [vars.color.purple[500]]: '#d8b4fe',
        [vars.color.purple[600]]: '#e9d5ff',
        [vars.color.purple[700]]: '#f3e8ff',
        [vars.color.purple[800]]: '#faf5ff',

        // cyan 반전
        [vars.color.cyan[50]]: '#051b24',
        [vars.color.cyan[100]]: '#072a38',
        [vars.color.cyan[200]]: '#134152',
        [vars.color.cyan[300]]: '#0c5c72',
        [vars.color.cyan[400]]: '#0891b2',
        [vars.color.cyan[500]]: '#06b6d4',
        [vars.color.cyan[600]]: '#22d3ee',
        [vars.color.cyan[700]]: '#67e8f9',
        [vars.color.cyan[800]]: '#a5f3fc',
        [vars.color.cyan[900]]: '#cffafe',
        [vars.color.cyan[950]]: '#ecfeff',

        // blue 반전
        [vars.color.blue[50]]: '#0c142e',
        [vars.color.blue[100]]: '#14204a',
        [vars.color.blue[200]]: '#1a3478',
        [vars.color.blue[300]]: '#173da6',
        [vars.color.blue[400]]: '#2563eb',
        [vars.color.blue[500]]: '#3b82f6',
        [vars.color.blue[600]]: '#60a5fa',
        [vars.color.blue[700]]: '#a3cfff',
        [vars.color.blue[800]]: '#bfdbfe',
        [vars.color.blue[900]]: '#dbeafe',
        [vars.color.blue[950]]: '#eff6ff',

        // teal 반전
        [vars.color.teal[50]]: '#021716',
        [vars.color.teal[100]]: '#032726',
        [vars.color.teal[200]]: '#114240',
        [vars.color.teal[300]]: '#0c5d56',
        [vars.color.teal[400]]: '#0d9488',
        [vars.color.teal[500]]: '#14b8a6',
        [vars.color.teal[600]]: '#2dd4bf',
        [vars.color.teal[700]]: '#5eead4',
        [vars.color.teal[800]]: '#99f6e4',
        [vars.color.teal[900]]: '#ccfbf1',
        [vars.color.teal[950]]: '#f0fdfa',

        // green 반전
        [vars.color.green[50]]: '#03190c',
        [vars.color.green[100]]: '#042713',
        [vars.color.green[200]]: '#124a28',
        [vars.color.green[300]]: '#116932',
        [vars.color.green[400]]: '#16a34a',
        [vars.color.green[500]]: '#22c55e',
        [vars.color.green[600]]: '#4ade80',
        [vars.color.green[700]]: '#86efac',
        [vars.color.green[800]]: '#bbf7d0',
        [vars.color.green[900]]: '#dcfce7',
        [vars.color.green[950]]: '#f0fdf4',

        // yellow 반전
        [vars.color.yellow[50]]: '#281304',
        [vars.color.yellow[100]]: '#422006',
        [vars.color.yellow[200]]: '#713f12',
        [vars.color.yellow[300]]: '#845209',
        [vars.color.yellow[400]]: '#ca8a04',
        [vars.color.yellow[500]]: '#eab308',
        [vars.color.yellow[600]]: '#facc15',
        [vars.color.yellow[700]]: '#fde047',
        [vars.color.yellow[800]]: '#fef08a',
        [vars.color.yellow[900]]: '#fef9c3',
        [vars.color.yellow[950]]: '#fefce8',

        // orange 반전
        [vars.color.orange[50]]: '#220a04',
        [vars.color.orange[100]]: '#3b1106',
        [vars.color.orange[200]]: '#6c2710',
        [vars.color.orange[300]]: '#92310a',
        [vars.color.orange[400]]: '#ea580c',
        [vars.color.orange[500]]: '#f97316',
        [vars.color.orange[600]]: '#fb923c',
        [vars.color.orange[700]]: '#fdba74',
        [vars.color.orange[800]]: '#fed7aa',
        [vars.color.orange[900]]: '#ffedd5',
        [vars.color.orange[950]]: '#fff7ed',
      },
    },
  },
});
