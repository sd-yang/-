let arr = [1, 2, 3, 4, 5, 6, 7];

// 1: splice 时间复杂度 O(1)
function reverseArr(list, number) {
  let len = list.length;
  let data1 = list.slice(0, len - number);
  let data2 = list.slice(-number);
  return [...data1, ...data2];
}

// 使用 pop，时间复杂度 O(n^2), unshift 的原因
function reverseArr(list, number) {
  while(number) {
    let item = list.pop();
    list.unshift(item); // 数组是个有序结构，unshift 操作非常慢
    number--;
  }

  return list;
}
console.log(reverseArr(arr, 3));
