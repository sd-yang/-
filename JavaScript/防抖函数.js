/**
 * 防抖函数
 * 在连续变化中，只执行最后的一次
 * @param {*} fn 
 * @param {*} times 
 * @returns 
 */
const debounce = (fn, wait, immediate) => {
    let timer = null;
    return function() {
        let context = this;
        let args = arguments;
        if (timer) clearTimeout(timer);
        if (immediate) {
            let runNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait);
            if (runNow) fn.apply(context, [...args]);
        } else {
            timer = setTimeout(() => {
                fn.apply(context, [...args]);
            }, wait);
        }   
    }
}
