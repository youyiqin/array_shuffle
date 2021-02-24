// @ts-ignore
import { arrayShuffle } from '../src/index.ts';

let i = 0;
while (i < 100) {
  it('the array should be difference with before', () => {
    expect(arrayShuffle([1, 2, 3, 4, 5, 6])).not.toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
  i++;
}
it('should be equal', () => {
  expect(arrayShuffle([1])).toStrictEqual([1]);
});
