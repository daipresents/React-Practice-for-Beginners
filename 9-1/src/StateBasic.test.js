import { render, screen, waitFor } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import StateBasic from './StateBasic';

// user-eventによるイベントのシュミレート
// npm run test StateBasic.test.js
/**
 PASS  src/StateBasic.test.js
  ✓ StateBasic Test (22 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.207 s, estimated 1 s
Ran all test suites matching /StateBasic.test.js/i.

 */
test('StateBasic Test', async () => {
  const ev = useEvent.setup();
  render(<StateBasic init={0} />);

  const btn = screen.getByRole('button', { name: 'カウント' });
  const cnt = screen.getByText(/クリック/);

  ev.click(btn);
  await waitFor(() => {
    expect(cnt).toHaveTextContent('1回');
  });
});
