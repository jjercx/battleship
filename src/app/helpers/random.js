export const randomNumber = num => Math.floor(Math.random() * Math.floor(num));

export const randomShuffle = array =>
  array
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);
