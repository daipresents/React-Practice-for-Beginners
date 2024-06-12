/** @type { import('@storybook/react').Preview } */
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // 背景色設定。アプリ全体に適用
    // backgrounds: {
    //   values: [
    //     { name: 'ghostwhite', value: '#f8f8ff' },
    //     { name: 'aquamarine', value: '#7fffd4' },
    //     { name: 'coral', value: '#ff7f50' },
    //   ],
    // },

    // viewportの設定
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex',
    },
  },
};

export default preview;
