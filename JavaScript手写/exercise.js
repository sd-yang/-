// Function.prototype.bind = function(context) {
//     context = context || window;
//     let args = arguments.slice(1);
//     let symbolFn = Symbol('key');
//     context[symbolFn] = this;
//     let _this = this;
//     function results (...params) {
//         if (this instanceof _this) {
//             this[symbolFn] = _this;
//             return this[symbolFn](...[...args, ...params]);
//         }
//         return context[symbolFn](...[...args, ...params]);
//     }

//     results.prototype = Object.create(this.prototype);
//     return results;
// }

// 模拟 call 
// 主要思想是通过在要绑定的对象上添加方法属性来实现
// Function.prototype.call = function (context) {
//     context = context || window;
//     let args = [...arguments].slice(1);
//     let symbolKey = Symbol('key');
//     context[symbolKey] = this;
//     let result = context[symbolKey](...args);
//     delete context[symbolKey];
//     return result;
// }

// // 模拟 apply
// Function.prototype.apply = function (context) {
//     context = context || window;
//     let args = [...arguments].slice(1);
//     let symbolKey = Symbol('key');
//     context[symbolKey] = this;
//     let result = context[symbolKey](args);
//     delete context[symbolKey];
//     return result;
// }

// // 模拟 bind
// // bind 是返回一个函数，调用的时候，也可以通过 new 的方式进行
// Function.prototype.call = function (context) {
//     context = context || window;
//     let args = [...arguments].slice(1);
//     let symbolKey = Symbol('key');
//     context[symbolKey] = this;
//     let _this = this;
//     let result = function (...params) {
//         const allParams = [...args, ...params];
//         if (this instanceof _this) {
//             return this[symbolKey](...allParams);
//         } else {
//             return context[symbolKey](...allParams);
//         }
//     }
//     result.prototype = Object.create(this.prototype);
//     return result;
// }

// 最优继承

// function Person (name) {
//     this.name = name;
// }
// Person.prototype.say = function() {
//     console.log('hello');
// }

// function Child (name) {
//     Person.call(this, name);
// }
// Child.prototype = Object.create(Person.prototype);

// let a = new Child('liHua');
// a.say()

// 模拟实现 Object.create
// Object.prototype.create = function(o) {
//     let fn = function() {};
//     fn.prototype = o;
//     return new fn();
// }

// instanceof
function myInstanceof (target, origin) {
    let proto = Object.getPrototypeOf(target);
    while(proto) {
        if (proto === origin.prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}
