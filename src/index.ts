export default function arrayShuffle(params: any[]) {
  let len = params.length;
  while (len > 1) {
    const index = Math.floor(Math.random() * len--);
    // eslint-disable-next-line no-param-reassign
    [params[len], params[index]] = [params[index], params[len]];
  }
  return params;
}
