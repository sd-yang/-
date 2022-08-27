let arr = [0, 1, 2, [3, 4], [5, [6, 7]]];
/**
 * 数组拍平
 * 将一个多维数组扁平化
 * 使用 reduce + 递归
 * 主要掌握 reduce 的使用， 栈方法要知道
 */

const reduceFlat = (arr, depth = 1) => {
  if (depth === -1) {
    return arr.reduce((prev, item) => {
      return [
        ...prev,
        ...(Array.isArray(item) ? reduceFlat(item, -1) : [item]),
      ];
    }, []);
  } else {
    return depth > 0
      ? arr.reduce((prev, item) => {
          return [
            ...prev,
            ...(Array.isArray(item) ? reduceFlat(item, depth - 1) : [item]),
          ];
        }, [])
      : arr;
  }
};

/**
 * 使用 栈
 */

const stackFlat = (arr) => {
  let stack = [...arr],
    result = [];
  while (stack.length) {
    let data = stack.pop();
    if (Array.isArray(data)) {
      stack.push(...data);
    } else {
      result.unshift(data);
    }
  }

  return result;
};

console.log(stackFlat(arr));
