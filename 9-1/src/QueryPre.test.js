import { render, screen } from '@testing-library/react';
import QueryPre from './QueryPre';

describe('QueryPre', () => {
  test('fetch関数を伴うテスト', async () => {
    render(<QueryPre />);

    // API成功時のテストはこちら
    // const img = await screen.findByRole('img', {}, { timeout: 3000 });
    // expect(img).toHaveAttribute('alt', 'Clouds');

    // 待たないと「Loading...」が取れてしまう。
    const message = await screen.findByText(/Error/, {}, { timeout: 3000 });
    //console.log(message);

    expect(message).toHaveTextContent('Unauthorized');
  });
});
