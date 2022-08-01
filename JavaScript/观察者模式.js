class Subject {
    constructor() {
        this.userList = [];
    }

    add = (observe) => {
        this.userList.push(observe);
    }

    notify = (task) => {
        this.userList.forEach(item => {
            item.update(task);
        });
    }
}

class Observe {
    constructor(name) {
        this.name = name;
    }

    update = (task) => {
        console.log(task, this.name);
    }
}

const a = new Observe('a');
const b = new Observe('b');
let s = new Subject();
s.add(a);
s.add(b);
s.notify('新的任务发布了');