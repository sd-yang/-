// 实现一个 Object.create

const objectCreate = (o) => {
    let Fn = function () {};
    Fn.prototype = o;
    return new Fn();
};


