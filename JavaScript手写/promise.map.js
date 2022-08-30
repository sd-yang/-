function pMap(list, map, concurrency = 2) {
  let array = [...list];
  return new Promise((resolve, reject) => {
    let currentIndex = 0;
    let resolveCount = 0;
    let result = [];
    function next() {
      const index = currentIndex;
      currentIndex++;
      Promise.resolve(array[index])
        .then((o) => map(o))
        .then((res) => {
          resolveCount++;
          result[index] = res;
          if (resolveCount === array.length) {
            resolve(result);
          }
          if (currentIndex < array.length) next();
        });
    }

    for (let i = 0; i < concurrency && i < array.length; i++) {
      next();
    }
  });
}

// 实现一个 promise.map，进行并发数控制，有以下测试用例
// pMap([1, 2, 3, 4, 5], (x) => Promise.resolve(x + 1))
// pMap([Promise.resolve(1), Promise.resolve(2)], (x) => x + 1)
// 注意输出时间控制
// pMap([1, 1, 1, 1, 1, 1, 1, 1], (x) => sleep(1000), { concurrency: 2 });