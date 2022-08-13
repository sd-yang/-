// 防抖
const debounceFn = (fn, wait, immediate) => {
  let timeout;
  return function() {
    let args = [...arguments];
    let self = this;
    if (immediate && !timeout) {
      fn.apply(self, args);
    }

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(self, args);
    }, wait)
  }
}

// 节流
const throttle = (fn, wait) => {
  let timer;
  return function() {
    let args = [...arguments];
    let context = this;
    if (timer) return;
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
      fn.apply(context, args);
    }, wait);
  }
}