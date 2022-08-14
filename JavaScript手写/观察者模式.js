class Subject {
  constructor() {
    this.userList = [];
  }

  add = (observe) => {
    this.userList.push(observe);
  };

  notify = (task) => {
    this.userList.forEach((item) => {
      item.update(task);
    });
  };
}

class Observe {
  constructor(name) {
    this.name = name;
  }

  update = (task) => {
    console.log(task, this.name);
  };
}

const a = new Observe('a');
const b = new Observe('b');
let s = new Subject();
s.add(a);
s.add(b);
s.notify('新的任务发布了');

// 使用 proxy 构建
const observeList = new Set();
const observable = (data) => {
  return new Proxy(data, {
    set(target, propKey, value) {
      let res = Reflect.set(target, propKey, value);
      for (const item of observeList) {
        item();
      }
      return res;
    },
  });
};

observe = (fn) => {
  observeList.add(fn);
};

const person = observable({
  name: '张三',
  age: 20,
});

function print() {
  console.log(`${person.name}, ${person.age}`);
}

observe(print);
person.name = '李四';
// 输出
// 李四, 20
