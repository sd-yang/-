const list = [
    { id: 1, pid: 0 },
    { id: 2, pid: 0 },
    { id: 3, pid: 0 },
    { id: 11, pid: 1 },
    { id: 12, pid: 1 },
    { id: 13, pid: 1 },
    { id: 21, pid: 2 },
    { id: 22, pid: 2 },
    { id: 23, pid: 2 },
    { id: 31, pid: 3 },
    { id: 32, pid: 3 },
    { id: 33, pid: 3 },
    { id: 111, pid: 11 },
    { id: 221, pid: 22 },
    { id: 331, pid: 33 },
    { id: 3331, pid: 331 }
];

const listToTree = (data) => {
    return data.filter(item => {
        item.children = data.filter(v => {
            return v.pid === item.id;
        })
        return item.pid === 0;
    })
}

const tree = listToTree(list);

const treeToList = (treeData) => {
    let stack = [], res = [];
    treeData.forEach(item => stack.push(item));
    while (stack.length) {
        let data = stack.shift();
        res.push({ id: data.id, pid: data.pid });
        if (data.children.length) {
            stack = [...stack, ...data.children];
        }
    }
    return res;
};

// 递归
const treeToList2 = (data) => {
    let res = [];
    function loop(value) {
        if (!value) return;
        value.forEach(item => {
            res.push({ id: item.id, pid: item.pid });
            if (item.children) loop(item.children);
        })
    };
    loop(data);

    return res;
};

console.log(treeToList2(tree));