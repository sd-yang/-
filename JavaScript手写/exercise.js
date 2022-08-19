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

const createProxy = (data) => {
  return new Proxy(data, {
    get: function(target, key) {
      console.log(target);

      return Reflect.get(target, key);
    },
    set: function(target, key, value) {
      console.log('set');
      return Reflect.set(target, key, value);
    }
  })
}

const data = { value: 1 };
const test = createProxy(data);

// test.value;

test.value++;