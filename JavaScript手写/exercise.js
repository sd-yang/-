Function.prototype.bind = function(context) {
    context = context || window;
    let args = arguments.slice(1);
    let symbolFn = Symbol('key');
    context[symbolFn] = this;
    let _this = this;
    function results (...params) {
        if (this instanceof _this) {
            this[symbolFn] = _this;
            return this[symbolFn](...[...args, ...params]);
        }
        return context[symbolFn](...[...args, ...params]);
    }

    results.prototype = Object.create(this.prototype);
    return results;
}