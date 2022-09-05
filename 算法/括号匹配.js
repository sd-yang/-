let test1 = '{(a{b}c)}[';

// 通过正则
function isMatch(str) {
  if (!str?.length) return str;
  str = str.replace(/\w*/g, '');
  let n;
  while (true) {
    str = str.replace(/\(\)|\[\]|\{\}/g, '');
    if (!str.length) return true;
    if (n === str) return false;
    n = str;
  }
}

// 使用栈
function isMatch(str) {
  let stack = [];
  let map = { '(': 1, '[': 2, '{': 3, ')': -1, ']': -2, '}': -3 };
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    if (map[item] > 0) {
      stack.push(item);
    } else if (map[item] < 0 && stack.length > 0) {
      let popData = stack.pop();
      if (map[popData] + map[item] !== 0) {
        stack.push(popData, item);
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isMatch(test1));
