// 1. 原型链继承
// 引用类型的属性被所有实例共享
// 在创建子类的时候，不能向父类传递参数

function Person (name) {
    this.name = name;
    this.friends = ['cat', 'dog'];
}
Person.prototype.say = function() {
    console.log('hello');
}

// function Child () {}

// Child.prototype = new Person();

// let boy = new Child('233');
// let boy2 = new Child();
// boy.friends.push('bird');
// console.log(boy2.friends);

// 2. 借用构造函数继承
// 优点：避免了引用类型的属性被所有实例共享，可以在子类向父类传递参数
// 缺点：方法都在构造函数中定义，每次创建一次都要创建一遍方法

// function Child (name) {
//     Person.call(this, name);
// }

// let boy1 = new Child('ming');
// let boy2 = new Child('rick');
// boy1.friends.push('bird');
// console.log(boy1.friends, boy2.friends);

// 3. 组合继承
// 融合了原型链继承和构造函数继承的优点

// function Child(name) {
//     Person.call(this, name);
// }

// Child.prototype = new Person();

// let boy1 = new Child('ming');
// let boy2 = new Child('wei');

// boy1.say();
// boy1.friends.push('birds');
// console.log(boy2.friends);


// 4. 原型式继承
// 将传入对象作为创建对象的原型
// 包含引用类型的属性值始终都会共享相应的值

// let person = {
//     friends: ['cat', 'dog'],
//     name: 'rick'
// }

// let man1 = Object.create(person);
// let man2 = Object.create(person);

// man1.name = 'man1';
// console.log(man1.name);
// man1.friends.push('birds');
// console.log(man2.friends, man2.name);

// 5. 寄生式继承
// 每次创建对象都会创建一遍方法
// function createObj (o) {
//     let obj = Object.create(o);
//     obj.say = function() {
//         console.log('文字');
//     }
//     return obj;
// };

// let obj = {
//     name: 'obj',
//     friends: [1,2,3]
// }

// let copy1 = createObj(obj);
// let copy2 = createObj(obj);
// copy1.friends.push('1111')
// console.log(copy1.friends, copy2.friends)

// 6. 寄生式组合继承

function Child (name) {
    Person.call(this, name);
}

Child.prototype = Object.create(Person.prototype);
Child.prototype.construction = Child;

let boy1 = new Child('ming');
let boy2 = new Child('rick');
// boy1.friends.push('birds');

// console.log(boy2.friends)



