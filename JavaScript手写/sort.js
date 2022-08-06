const arr = [34, 23, 1, 3, 5, 6, 34, 90, 89];
/**
 * 方法1
 * 使用 sort
 * a - b 从小到大
 * b - a 从大到小
 * 直接使用是先转换为 字符串，然后再按照字符串的规则进行排序
 */

const newArr = arr.sort((a, b) => a - b);

/**
 * 方法2
 * 冒泡排序
 * 外层控制循环，内容控制比较
 * -1 是因为每次循环查到一个最大的数，就不用再比较了
 * @param {} arr 
 */
const sortFunction = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let data = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = data;
            }
        }
    }
    return arr;
};

/**
 * 方法3
 * 快速排序
 * 选取一个基准值进行左右比较
 * 左边的值比基准大，就移动到右边
 * 右边的值比基准小，就移动到左边
 * 当左边等于右边的时候，左边赋值给基准，并返回
 * 取 mid 进行递归，在 start < end 就一直递归
 * 返回这个 arr
 */

const sort = (start, end, arr) => {
    let base = arr[start];
    let left = start;
    let right = end;
    while (left !== right) {
        while (right > left && arr[right] >= base) {
            right--;
        }
        arr[left] = arr[right];
        while (right > left && arr[left] <= base) {
            left++
        }
        arr[right] = arr[left];
    }
    arr[left] = base;
    return left;
}

const sortArray = (start, end, arr) => {
    if (start < end) {
        let mid = sort(start, end, arr);
        sortArray(start, mid - 1, arr);
        sortArray(mid + 1, end, arr);
    }
}

const quickSort = (arr) => {
    sortArray(0, arr.length - 1, arr);
    return arr;
}

/**
 * 方法4: 快速排序简化版 会返回一个新的数组，更消耗性能
 * 使用 递归 + 数组合并的方式
 * 使用基准值，取出基准值，然后左右划分
 */

let quickSort2 = (arr) => {
    if (arr.length <= 1) return arr;
    let midIndex = Math.floor(arr.length / 2);
    let mid = arr.splice(midIndex, 1)[0];
    let left = [], right = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item < mid) {
            left.push(item);
        } else {
            right.push(item);
        }
    }

    return quickSort2(left).concat([mid], quickSort2(right));
}

/**
 * 方法5: 选择排序
 * 思想：从所有元素中选择出来最小的元素然后与第一个元素交换位置，然后在剩下的记录中找出最小的，与第二个交换位置，循环下去
 * 使用一个值来记录最小值的下标
 */
const selectSort = (arr) => {
    let minIndex;
    for (let i = 0; i < arr.length; i++) {
        minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let base = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = base;
    }

    return arr;
};


/**
 * 插入排序
 * 思想：从给定的数的第二个数开始和前面的进行比较，每次结束外循环后插入合适的位置
 */

const insetSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while(arr[j] > current && j >= 0) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
};

/**
 * 归并排序
 * @param arr 
 * @returns arr
 * 先使每个子序有序，然后每个序列段有序，然后进行合并
 */
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const sort = (left, right) => {
        let result = [];
        while(left.length > 0 && right.length > 0) {
            if (left[0] < right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }
        return result.concat(left, right);
    }
    
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return sort(left, right);
}

console.log(mergeSort(arr));

// https://blog.csdn.net/SmileDongFF/article/details/123904055