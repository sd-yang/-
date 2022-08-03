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