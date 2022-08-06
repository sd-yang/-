function red () {
    console.log('red');
}

function green () {
    console.log('green');
}

function yellow() {
    console.log('yellow')
}

const task = (light, time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (light === 'red') {
                red();
            } else if (light === 'green') {
                green();
            } else {
                yellow();
            }
            resolve();
        }, time);
    })
}

let runLight = async () => {
    await task('green', 0);
    await task('yellow', 3000);
    await task('red', 1000);
    setTimeout(() => {
        runLight();
    }, 3000)
}

runLight();