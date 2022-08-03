function singlePipe(promiseFunc) {
    let task;
    const result = async (value) => {
        if (!task) {
            task = promiseFunc(value);
            return task
        } else {
            await task;
            task = null;
            return result(value);
        }
    };

    return result;
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