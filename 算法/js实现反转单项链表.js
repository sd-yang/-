// 根据数组创建单项链表
function createLinkList(arr) {
  if (arr.length === 0) throw new Error('arr is empty');
  let curNode = {
    value: arr[arr.length - 1],
  };
  if (arr.length === 1) return curNode;
  for (let i = arr.length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode,
    };
  }

  return curNode;
}

function reverseLinkList(linkNode) {
  let prevNode = undefined;
  let currentNode = undefined;
  let nextNode = linkNode;
  while (nextNode) {
    // 第一个元素 删除 next，防止循环引用
    if (currentNode && !prevNode) {
      delete currentNode.next;
    }

    // 反转
    if (currentNode && prevNode) {
      currentNode.next = prevNode;
    }

    // 整体向后移动指针
    prevNode = currentNode;
    currentNode = nextNode;
    nextNode = nextNode.next;
  }

  // 处理最后一个元素
  currentNode.next = prevNode;
  return currentNode;
}

const link = createLinkList([1, 2, 3, 4]);
console.log(reverseLinkList(link));
