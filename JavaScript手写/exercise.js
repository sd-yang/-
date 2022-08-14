const myNew = (fn, ...args) => {
  let obj = {};
  obj.__proto__ = fn.prototype;
  let res = fn.apply(obj, args);
  return res instanceof Object ? res : obj;
}

const create = (o) => {
  let Fn = function() {};
  Fn.prototype = o;
  return new Fn();
}