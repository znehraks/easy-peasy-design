import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/foundations/reset.css';
import '../src/foundations/theme.css';
import { storybookStyle, themeChangeButtonStyle } from './storybook.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={storybookStyle}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
