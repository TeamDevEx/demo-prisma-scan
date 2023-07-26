const calculator = require('./index');

test('calculator', () => {
  const math = calculator(4, 2, '/');
  expect(math).toBe(2);
});
