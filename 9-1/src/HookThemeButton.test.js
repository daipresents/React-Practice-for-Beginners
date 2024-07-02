import { render, screen, waitFor } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import HookThemeButton from './HookThemeButton';
import MyThemeProvider from './MyThemeProvider';

// コンテキストを伴うテスト
test('HookThemeButton test', async () => {
  const ev = useEvent.setup();
  render(<HookThemeButton />, { wrapper: MyThemeProvider });
  const btn = screen.getByRole('button');
  ev.click(btn);

  await waitFor(() => expect(btn).toHaveTextContent('dark'));
});
