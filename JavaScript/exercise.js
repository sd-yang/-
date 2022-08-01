// 发布订阅 防抖 红绿灯 数组去重 事件循环判断 写一个 schedule

// 1. 发布订阅

class Subscribe {
    constructor() {
        this.list = {};
    }

    on (type, handle) {
        if (this.list[type]) {
            this.list[type].push(handle);
        } else {
            this.list[type] = [handle];
        }
    }

    emit(type, message) {
        if (!this.list[type]) return;
        this.list[type].forEach(item => {
            item(message);
        });
    }

    off(type, handle) {
        if (!this.list[type]) return;
        this.list[type] = this.list[type].filter(k => k !== handle);
    }
};

class Observe {
    constructor(name) {
        this.name = name;
    }

    getMsg = (msg) => {
        console.log(this.name + '收到' + msg);
    }
}

let person = new Observe('mike');
let sub = new Subscribe();
sub.on('add', person.getMsg);
sub.emit('add', '发送的一条信息')


// 防抖函数
const debounce = (fn, wait, immediate) => {
    let timer = null;
    return function() {
        const context = this;
        const args = arguments;
        if (timer) clearTimeout(timer);
        if (immediate) {
            let runNow = !timer;
            setTimeout(() => {
                timer = null;
            }, wait);
            if (runNow) fn.apply(context, [...args]);
        } else {
            timer = setTimeout(() => {
                fn.apply(context, [...args]);
            }, wait);
        }
    }
}

// 红绿灯
const task = (color, wait) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(color);
            resolve();
        }, wait)
    })
};

const runTask = async () => {
    await task('green', 0);
    await task('yellow', 5000);
    await task('red', 3000);
    setTimeout(() => {
        runTask();
    }, 5000)
}

runTask();

// 数组去重
const uniqueArray = (arr) => {
    arr.reduce((prev, current, index, list) => {
        if (prev.includes(current)) return prev;
        return [...prev, current];
    }, []);
}

// schedule

class schedule {
    constructor() {
        stack = [];
        promise = [];
        limit = 3;
    }

    add (promiseHandle) {
        if (this.promise.length > this.limit) {
            this.stack.push(promiseHandle);
        } else {
            this.run(promiseHandle);
        }
    }

    run (asyncFn) {
        this.promise.push(asyncFn);
        const index = this.promise.length - 1;
        asyncFn().then(() => {
            this.promise.splice(index, 1);
            if (this.stack.length) {
                this.run(this.stack.shift());
            }
        })
    }
}



// immediate1  immediate1_promise immediate1_nextTick immediate1_then
// timeout1 timeout1_promise  timeout1_nextTick timeout1_then
// 第二次 第二次timeout1_promise 第二次timeout1_then