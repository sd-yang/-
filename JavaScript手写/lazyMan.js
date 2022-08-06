class CreateLazyMan {
    constructor(name) {
        this.stack = [];
        const taskName = (name) => {
            console.log(`Hi! This is ${name}!`);
            this.next();
        }
        this.stack.push(() => taskName(name));
        setTimeout(() => this.next());
    }

    next = () => {
        const task = this.stack.shift();
        task && task();
    }

    createSleep = (wait) => {
        return () => {
            setTimeout(() => {
                console.log(`Wake up after ${wait}`);
                this.next();
            }, wait * 1000);
        }
    }

    sleepFirst = (wait) => {
        const task = this.createSleep(wait);
        this.stack.unshift(task);
        return this;
    }

    sleep = (wait) => {
        const task = this.createSleep(wait);
        this.stack.push(task);
        return this;
    }

    eat = (food) => {
        const eating = () => console.log(`Eat ${food}~`);
        this.stack.push(() => eating());
        return this;
    }

}
// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan(“Hank”)输出:
// Hi! This is Hank!

// LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

// LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper

function LazyMan (name) {
    return new CreateLazyMan(name);
}


// LazyMan('Hank');
LazyMan('Hank').eat('noodles').sleepFirst(5)