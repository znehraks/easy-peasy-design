import type { Preview } from '@storybook/react';
import '../src/foundations/reset.css';
import '../src/foundations/theme.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
