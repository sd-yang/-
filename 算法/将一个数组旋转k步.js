let arr = [1, 2, 3, 4, 5, 6, 7];

// 1: splice
function reverseArr(list, number) {
  let len = list.length;
  let data = list.splice(len - number, number);
  return [...data, ...list];
}

// 使用 pop
function reverseArr(list, number) {
  while(number) {
    let item = list.pop();
    list.unshift(item);
    number--;
  }

  return list;
}
console.log(reverseArr(arr, 3));
