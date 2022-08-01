const unionArray = (array) => {
    let arr = [];
    array.forEach((item, index) => {
        if (array.indexOf(item) !== index) return;
        arr.push(item);
    });

    return arr;
}

const list = [1, 1, 1, 3, 3, 4, 5, 6, 3, 32, 2];

console.log(unionArray(list))

