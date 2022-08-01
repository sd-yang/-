Array.prototype.myReduce = function (func, initData) {
    let list = this, prev = initData;
    for (let i = 0; i < list.length; i++) {
        const current = list[i];
        let prev = func(prev, current, i, list);
    };

    return prev;
}
