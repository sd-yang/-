// 使用 setInterval 实现 setTimeout;
const myTimeout = (fn, wait) => {
    let timer = setInterval(() => {
        clearInterval(timer);
        fn();
    }, wait);

    return {
        cancel: () => clearInterval(timer)
    }
};


myTimeout(() => {
    console.log('test');
}, 2000);
