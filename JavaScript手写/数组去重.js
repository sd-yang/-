const unionArray = (array) => {
    let arr = [];
    array.forEach((item, index) => {
        if (array.indexOf(item) !== index) return;
        arr.push(item);
    });

    return arr;
}

// 采用双指针 需要先进行有序化
const unionArray2 = (array) => {
    let slow = 0;
    let fast = 0;
    array.sort();
    while(fast < array.length) {
        if (array[slow] !== array[fast]) {
            slow++;
            array[slow] = array[fast];
        }
        fast++;
    }

    return array.slice(0, slow + 1);
}

const list = [1, 1, 1, 3, 3, 4, 5, 6, 3, 32, 2];

console.log(unionArray2(list))

