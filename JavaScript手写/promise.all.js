const all = (promises) => {
    return new Promise((resolve, reject) => {
        let results = [];
        let count = 0;
        let len = promises.length;
        promises.forEach((asyncFn, idx) => {
            Promise.resolve(asyncFn).then((data) => {
                results[idx] = data;
                count += 1;
                if (count >= len) {
                    return resolve(results);
                }
            }).catch(reject);
        });
    })
};

// TETS     
let func = (params) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(params);
        }, 1200)
    })
};

all(['sss',2,3].map(item => func(item))).then((r) => {
    console.log(r)
});