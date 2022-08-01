/**
 * 接受 异步函数 ，异步函数需要的参数数组， 异步函数的回调函数 三个参数。并且会记录调用失败的参数，在最后返回到函数外部
 */

let tesArr = [...new Array(13).keys()];
let request = (params) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let result = Math.random() > 0.3;
            return result ? res({ test: Math.random() }) : rej();
        }, 1500)
    })
}


/**
 * 
 * @param {*} arr 
 * @param {*} request 
 * @param {*} limit 
 * @returns 
 * 
 * 思路：
 * 1. 使用 Promise.race 
 * 2. 先取 limit 长度的值，如果直接把数组全部截取完了，直接使用 Promise.all 调用
 * 3. 拿截取后的数组进行循环，这时候用到了 Promise.race 如果有返回，就确定那个返回的promise，删除再添加
 * 4. 最后再使用循环完的数据 Promise.all处理最后一组
 */

function fn(arr, request, limit) {
    const queryFn = (data) => {
        const pro = request(data)
            .then((data) => ({ index: pro, data }))
        // .catch((data) => ({ index: pro, data }))
        return pro;
    }
    if (arr.length < limit) return Promise.all(arr.map(queryFn));
    const sequence = [...arr];
    const promises = sequence.splice(0, limit).map((item) => {
        return queryFn(item);
    });

    return sequence.reduce((last, current) => {
        return last.then(() => Promise.race(promises))
            .then((res) => {
                console.log(res);
                let findP = promises.findIndex(item => item === res.index);
                promises.splice(findP, 1);
                promises.push(queryFn(current));
            })
            .catch((err) => { console.log(current, 'error') })
    }, Promise.resolve()).then(() => {
        return Promise.all(promises);
    }).catch(() => {

    })

}

// 每次请求一个 递归
const stepQuery = (request, paramsList, callback) => {
    let index = 0, result = [];
    const loop = (key) => {
        if (key >= paramsList.length) {
            callback(result);
            return
        }
        request(paramsList[key])
            .then((data) => result.push(data))
            .catch(() => { })
            .finally(() => {
                console.log('执行完的key:', key);
                return loop(key + 1);
            })
    }
    return loop(index)
};



const queueQuery = async (paramsList, request, limit) => {
    const copyList = [...paramsList];
    let promises = [], results = [];
    const loop = (arr) => {
        const param = arr.shift();
        return request(param)
            .catch(() => {
                arr.push(param);
            })
            .then((data) => {
                if (data) results.push({ param, data });
                if (arr.length) return loop(arr);
                return Promise.resolve(results);
            })
    }

    while (limit--) {
        promises.push(loop(copyList));
    }
    await Promise.all(promises);
    return results;
};


queueQuery(tesArr, request, 4).then((data) => {
    console.log(data, 'end')
})
