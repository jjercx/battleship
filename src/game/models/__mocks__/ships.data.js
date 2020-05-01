const data = [
  {
    size: 3,
    count: 2,
  },
];

export default {
  data,
  setSize(newSize) {
    data[0].size = newSize;
  },
  setCount(newCount) {
    data[0].count = newCount;
  },
};
