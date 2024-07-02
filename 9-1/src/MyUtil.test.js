import { getTriangleArea } from "./MyUtil";

// npm run test MyUtil.test.js
/**
 PASS  src/MyUtil.test.js
  getTriangleArea関数
    ✓ 正常パターン (39 ms)

  Test Suites: 1 passed, 1 total
  Tests:       1 passed, 1 total
  Snapshots:   0 total
  Time:        1.048 s
  Ran all test suites matching /MyUtil.test.js/i.
 */
describe('getTriangleArea関数', () => {
  beforeEach(() => {
    console.log(new Date().toLocaleString());
  });

  test('正常パターン', () => {
    expect(getTriangleArea(10, 2)).toBe(10);
  });
});
