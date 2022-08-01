const throttle = (fn, wait) => {
    let timer = null;
    return function() {
        let context = this;
        let args = arguments;

        if (timer) return;
        timer = setTimeout(() => {
            fn.apply(context, args);
            clearTimeout(timer);
            timer = null;
        }, wait);
    }
};

const throttle2 = (fn, wait) => {
    let time = 0;
    return function() {
        let current = +new Date();
        let context = this;
        let args = arguments;
        if (current - time > wait) {
            fn.apply(context, args);
            time = current;
        }
    }
}