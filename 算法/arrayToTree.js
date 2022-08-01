const arr = [
    { id: 1, label: 'root', value: 'root' },
    { id: 2, label: 'label2', value: 'label2', parentId: 1 },
    { id: 3, label: 'label3', value: 'label3', parentId: 2 },
    { id: 4, label: 'label4', value: 'label4', parentId: 3 },
    { id: 5, label: 'label5', value: 'label5', parentId: 4 },
    { id: 6, label: 'label6', value: 'label6', parentId: 5 },
];

// 方法一 利用 filter
const arrToTree = (data) => {
    return result = data.filter(item => {
        item.children = data.filter(k => {
            return k.parentId === item.id;
        });
        return item.value === 'root';
    });
};

// 方法二 使用递归
const arrToTree2 = (data, parentId = 1) => {
    let res = [];
    data.forEach(item => {
        if (item.parentId === parentId) {
            res.push({
                ...item,
                children: arrToTree2(data, item.id)
            });
        }
    });
    return res;
};

// 方法三 使用两次循环
const arrToTree3 = (data) => {
    data.forEach(item => {
        data.forEach(v => {
            if (item.id === v.parentId) {
                if (item.children) {
                    item.children.push(v);
                } else {
                    item.children = [v];
                }
            }
        })
    });

    return data.filter(k => k.id === 1);
};

console.log(arrToTree3(arr));
