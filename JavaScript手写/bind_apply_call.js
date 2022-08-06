/**
 * 
 * 主要做了两件事
 * 1. 改变 this 指向
 * 2. 函数执行
 * 
 * 思路：
 * 1. 可以在给定的对象上新建一个方法
 * 2. 执行该方法
 * 3. 删除添加的方法
 */

Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') {
        throw new Error('类型错误');
    }
    // 判断context是否传入，没有传入就设置到 window 上
    context = context || window;
    let result = null;
    let args = [...arguments].slice(1);
    let symbolFn = Symbol();
    // this 即为我们要调用的方法
    context[symbolFn] = this;
    // 执行该方法
    result = context[symbolFn](...args);
    delete context[symbolFn];
    return result;
};


Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        throw new Error('类型错误');
    }
    context = context || window;
    let symbolFn = Symbol();
    context[symbolFn] = this;
    let args = [...arguments][1];
    let result = null;
    if (args) {
        result = context[symbolFn](args);
    } else {
        result = context[symbolFn]();
    }
    delete context[symbolFn];
    return result;
}

/**
 * bind 返回一个新函数
 * 可以传递多个参数
 */

Function.prototype.bind = function (context) {
    if (typeof this !== 'function') {
        throw new Error('格式错误');
    }
    let args = [...arguments].slice(1);
    let fn = this;
    let templateFn = function () { };
    let returnFn = function () {
        let params = [...args, ...arguments];
        return fn.apply(this instanceof templateFn ? templateFn : context, params);
    }

    templateFn.prototype = this.prototype;
    returnFn.prototype = new templateFn();
    return returnFn;
};

Function.prototype.bind = function(context) {
    context = context || window;
    const args = [...arguments].slice(1);
    const symbolFn = Symbol('key');
    context[symbolFn] = this;
    const _this = this;
    const result = function (...params) {
        if (this instanceof _this) {
            this[symbolFn] = _this;
            this[symbolFn](...[...args,...params]);
        } else {
            context[symbolFn](...[...args,...params]);
        }
    }
    result.prototype = Object.create(this.prototype);
    return result;
}