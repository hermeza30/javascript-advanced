/* eslint-disable no-undef */
const { creciente } = require('./app');

describe('Probando y testeando', () => {
  test('testeando si array es creciente', () => {
    [1, 2, 1, 2, 5];
    [1, 2, 3, 1, 4, 3];
    expect(creciente([1, 2, 3, 1, 2])).toBe(true);
  });
});
