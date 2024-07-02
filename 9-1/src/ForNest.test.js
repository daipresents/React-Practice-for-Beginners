import { render, screen } from '@testing-library/react';
import ForNest from './ForNest';
import books from './books';

// 子コンポーネントのモック化
jest.mock('./ForItem', () => {
  return function ForItemMock({ book }) {
    return (
      <>
        <dt>{book.title}</dt>
        <dd>{book.summary.substring(0, 10)}...</dd>
      </>
    );
  };
});

/**
 PASS  src/ForNest.test.js
  ✓ ForNest Test (48 ms)

  Test Suites: 1 passed, 1 total
  Tests:       1 passed, 1 total
  Snapshots:   0 total
  Time:        1.248 s
  Ran all test suites matching /ForNest.test.js/i.
 */
test('ForNest Test', () => {
  const { debug, baseElement } = render(<ForNest src={books} />);
  const dt = screen.getAllByRole('term');

  debug(baseElement);

  expect(dt).toHaveLength(5);
  expect(dt[0]).toHaveTextContent('Vue.js');
});
