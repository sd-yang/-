// 方法1: 递归
function binarySearch(list, value, startIndex, endIndex) {
  if (startIndex > endIndex) return -1;
  startIndex = startIndex ?? 0;
  endIndex = endIndex ?? list.length - 1;
  let midIndex = Math.floor((startIndex + endIndex) / 2);
  if (value > list[midIndex]) {
    return binarySearch(list, value, midIndex + 1, endIndex);
  } else if (value < list[midIndex]) {
    return binarySearch(list, value, startIndex, midIndex - 1);
  } else {
    return midIndex;
  }
}

// 方法2: 循环

// function binarySearch(list, value) {
//   let startIndex = 0;
//   let endIndex = list.length - 1;

//   while (startIndex <= endIndex) {
//     let midIndex = Math.floor((startIndex + endIndex) / 2);
//     let midValue = list[midIndex];
//     if (midValue < value) {
//       startIndex = midIndex + 1;
//     } else if (midValue > value) {
//       endIndex = midIndex - 1;
//     } else {
//       return midIndex;
//     }
//   }

//   return -1;
// }

let arr = [1, 2, 3, 4, 6, 7, 8, 14, 15, 16, 17];
console.log(binarySearch(arr, 15));
