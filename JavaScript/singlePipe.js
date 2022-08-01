function singlePipe(promiseFunc) {
    let task = null;
    let waitLine = [];
    const func = (value) => {
        if (!task) {
            task = value;
        } else {
            waitLine.push(value);
        }
        return promiseFunc(task).then((data) => {
            task = null;
            if (waitLine.length) return func(waitLine.shift());
            return data;
        });
    }
    return func;
}

function promiseFunc(value) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(value);
        }, 1000)
    });
}

const request = singlePipe(promiseFunc);

request(1).then((value) => console.log(value));
request(2).then((value) => console.log(value)); // 不响应

setTimeout(function () {
    request(3).then(value => console.log(value))
}, 1000)