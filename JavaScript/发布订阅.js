// https://juejin.cn/post/7055441354054172709#heading-0

class PubSub {
    constructor() {
        this.events = {};
    }

    on = (type, handle) => {
        if (typeof handle !== 'function') {
            throw new Error('handle必须是函数');
        }
        this.events[type] ? this.events[type].push(handle) : this.events[type] = [handle];
    }

    emit = (type, ...args) => {
        if (!this.events[type]) return;
        for (const i of this.events[type]) {
            i(args)
        }
    }

    off = (type, handle) => {
        if (this.events[type]) {
            this.events[type] = this.events.filter(k => k.handle !== handle);
        }
    }
}

const Restaurant = new PubSub()
const handler = function () {
  console.log('chips handler called')
}
Restaurant.on('chips', handler)
Restaurant.emit('chips', handler)
