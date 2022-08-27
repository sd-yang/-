let arr1 = Array(10)
  .fill()
  .map((v, k) => k + 1);

let arr2 = [...Array(10)].map((v, k) => k + 1);

let arr3 = Array.from(Array(10), (v, k) => k + 1);

let arr4 = Array(10)
  .join(',')
  .split(',')
  .map((v, k) => k + 1);
