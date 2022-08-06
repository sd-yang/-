// 使用 setTimeout 实现 setInterval 函数
const myInterval = (fn, wait) => {
    let timer = null;
    const runFunc = () => {
        timer = setTimeout(() => {
            fn();
            runFunc();
        }, wait);
    };

    runFunc();
    return {
        cancel: () => clearTimeout(timer),
    }
};

myInterval(() => {
    console.log('test')
}, 1000)