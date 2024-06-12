// npm install @storybook/addon-jest
// @storybook/testing-library has been deprecated.
// https://www.npmjs.com/package/@storybook/testing-library
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import MyButtonInteractions from './MyButtonInteractions';

export default {
  // ディレクトリで区切ればこれはいらなくなる
  // title: 'MyApp/MyButton',
  component: MyButtonInteractions,
  args: {
    // 👇 Use `fn` to spy on the onSubmit arg
    onClick: fn(),
  },
};

/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const Index = {
  args: {
    primary: true,
    size: 'medium',
    label: 'ボタン',
    // イベントハンドラーは無効化
    //onClick: () => console.log('Hello, Storybook!!')
  },
  play: async ({ args, canvasElement, step }) => {
    // Starts querying the component from its root element
    const canvas = within(canvasElement);

    // Example:
    // https://storybook.js.org/docs/essentials/interactions
    // await step('Enter credentials', async () => {
    //   await userEvent.type(canvas.getByTestId('email'), 'hi@example.com');
    //   await userEvent.type(canvas.getByTestId('password'), 'supersecret');
    // });

    await step('Click button', async () => {
      await userEvent.click(canvas.getByRole('button'));
      await userEvent.click(canvas.getByRole('button'));
    });

    // // 👇 Now we can assert that the onSubmit arg was called
    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
    await waitFor(() => expect(args.onClick).toHaveBeenCalledTimes(2));
  },
};

export const White = {
  args: {
    size: 'small',
    label: 'ボタン',
    backgroundColor: '#fff'
  }
};
