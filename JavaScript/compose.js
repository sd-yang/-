const compose = (...args) => {
    const fn = (params) => {
        return args.reduce((prev, current, idx) => {
            if (idx === 0) return current(params);
            return current(prev);
        }, 0)
    };

    return fn;
};



// 用法如下:
function fn1(x) {
    return x + 1;
}
function fn2(x) {
    return x + 2;
}
function fn3(x) {
    return x + 3;
}
function fn4(x) {
    return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11