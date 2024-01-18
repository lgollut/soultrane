import '../src/styles/layers.css';
import '../src/styles/globals.css';

import React from 'react';
import { clsx } from 'clsx';
import type { Preview } from '@storybook/react';

import { fontFamily } from '../src/styles/default-fonts.css';
import { theme } from '../src/styles/default-theme.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: { controls: { sort: 'requiredFirst' } },
    controls: {
      hideNoControlsWarning: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      document?.body.classList.add(fontFamily, theme);

      return <Story />;
    },
  ],
};

export default preview;
