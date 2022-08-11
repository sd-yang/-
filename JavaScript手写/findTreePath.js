// 查询 Tree 中指定 id 的路径
let data = [
  {
    id: 1,
    label: '一级 1',
    children: [
      {
        id: 4,
        label: '二级 1-1',
        children: [
          {
            id: 9,
            label: '三级 1-1-1',
            children: [
              {
                id: 11,
                label: '四级 1-1-1-1',
              },
            ],
          },
          {
            id: 10,
            label: '三级 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: '一级 2',
    children: [
      {
        id: 5,
        label: '二级 2-1',
      },
      {
        id: 6,
        label: '二级 2-2',
      },
    ],
  },
  {
    id: 3,
    label: '一级 3',
    children: [
      {
        id: 7,
        label: '二级 3-1',
      },
      {
        id: 8,
        label: '二级 3-2',
      },
    ],
  },
];

// 1. 通过栈的方法来获取
// const findTreePath = (tree, targetId) => {
//   let stack = tree.map(item => [item, [item.label]]);
//   while(stack.length) {
//     const [node, path] = stack.pop();
//     if (node.id === targetId) {
//       return path;
//     } else {
//       if (node.children) {
//         stack = [...stack, ...node.children.map(item => [item, [...path, item.label]])];
//       }
//     }
//   }
// }

// 2. 通过循环和递归
const findTreePath = (tree, target) => {
  const recursion = (list) => {
    for (const item of list) {
      if (item.id === target) {
        return [item.label];
      } else {
        if (item.children) {
          let path = recursion(item.children);
          if (path) return [item.label, ...path];
        }
      }
    }
  };
  let path = recursion(tree);
  return path;
};

console.log(findTreePath(data, 10));
