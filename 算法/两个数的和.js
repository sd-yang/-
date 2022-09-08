let arr = [1, 2, 3, 4, 5, 6, 7, 8, 11, 34];

// 方法1: 两次循环暴力求解
// 方法2: 双指针
function toSum(list, target) {
  let start = 0;
  let end = list.length - 1;
  while (start <= end) {
    if (list[start] + list[end] < target) {
      start += 1;
    } else if (list[start] + list[end] > target) {
      end -= 1;
    } else {
      return [list[start], list[end]];
    }
  }

  return [];
}

console.log(toSum(arr, 42));
