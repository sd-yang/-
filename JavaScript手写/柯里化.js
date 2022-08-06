const curry = (func, ...args) => {
    let allParams = [...args];
    const fn = (...params) => {
        allParams = [...allParams, ...params];
        if (allParams.length >= func.length) {
            return func(...allParams);
        } else {
            return fn;
        }
    }

    return fn;
};

const add = (x, y, z) => x + y + z;
const a = curry(add, 1);
console.log(a(2)(3));