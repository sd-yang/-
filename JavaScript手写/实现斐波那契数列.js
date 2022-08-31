// 使用 generator 实现斐波那契数列

function* fibonacci() {
  let [pre, cur] = [0, 1];
  for (;;) {
    yield cur;
    [pre, cur] = [cur, pre + cur];
  }
}

// 输出 1000 以内的值
for (const item of fibonacci()) {
  if (item > 1000) break;
  console.log(item);
}