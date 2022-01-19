const {sum} = require('./sum');

test('sums two values', () => {
  expect(sum(0, 1)).toEqual(1);
});

test('mensagem de erro é "parameters must be numbers"', () => {
  expect(() => {sum()}).toThrowError(new Error('parameters must be numbers'))
});