/**
 * 防抖函数
 * 在连续变化中，只执行最后的一次
 * @param {*} fn
 * @param {*} times
 * @returns
 */
const debounce = (fn, wait, immediate) => {
  let timer = null;
  const debounced = function () {
    let context = this;
    let args = arguments;
    if (immediate && !time) {
      fn.apply(context, [...args]);
    }
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, [...args]);
    }, wait);
  };
  debounced.cancel = function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  return debounced;
};
