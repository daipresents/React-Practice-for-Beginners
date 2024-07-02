import { act, render, screen } from '@testing-library/react';
import HookTimer from './HookTimer';

// https://jestjs.io/docs/timer-mocks
describe('HookTimer', () => {
  // 疑似タイマーを有効化
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
  });

  test('setInterval', async () => {
    const { debug } = render(<HookTimer init={10} />);

    // 10からはじまる
    let counter = screen.getByText(/現在のカウント/);
    expect(counter).toHaveTextContent('10');

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    debug(counter);

    counter = screen.getByText(/現在のカウント/);
    expect(counter).toHaveTextContent('9');
  });

  afterEach(() => {
    // テスト後に実際のタイマーを戻す
    jest.useRealTimers();
  });
});
