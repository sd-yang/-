// 快速排序

const quicklySort = (arr) => {
    const sort = (start, end, list) => {
        let base = list[start];
        let left = start;
        let right = end;
        while(left !== right) {
            while(right > left && list[right] >= base) {
                right--;
            }
            list[left] = list[right];
            while(left < right && list[left] <= base) {
                left++;
            }
            list[right] = list[left];
        }
        left[left] = base;
        return left;
    }
    const toSort = (start, end, list) => {
        if (start < end) {
            let mid = sort(start, end, list);
            toSort(start, mid - 1 , list);
            toSort(mid + 1, end, list);
        }
    }


    toSort(0, arr.length - 1, arr);
    return arr;
}

const quicklySort2 = (arr) => {
    let left = [];
    let right = [];
    let mid = Math.floor(arr.length / 2);
    let base = arr.splice(mid, 1)[0];
    for (let i = 0; i < arr.length; i++) {
        const data = arr[i];
        if (base < data) {
            right.push(data);
        } else {
            left.push(data);
        }
    }

    return quicklySort2(left).concat([mid], quicklySort2(right));
}