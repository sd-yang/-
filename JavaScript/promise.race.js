const race = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach(item => {
            Promise.resolve(item).then(resolve).catch(reject);
        });
    })
};
