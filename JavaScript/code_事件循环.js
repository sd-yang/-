/**
 * 事件循环执行顺序
 * 
 * 会先执行同步代码，同步代码执行完毕之后，会去执行遇到的第一个宏任务，
 * 把这个宏任务的所有执行完毕之后，进行下一个宏任务
 * 如果再碰到一个宏任务，就放到下次去执行
 */


// console.log('golb1');

setTimeout(function() {
    console.log('timeout1');
    process.nextTick(function() {
        console.log('timeout1_nextTick');
    })
    setTimeout(() => {
        console.log('第二次');
        new Promise(function(resolve) {
            console.log('第二次timeout1_promise');
            resolve();
        }).then(function() {
            console.log('第二次timeout1_then')
        })
    })
    new Promise(function(resolve) {
        console.log('timeout1_promise');
        resolve();
    }).then(function() {
        console.log('timeout1_then')
    })
})

setImmediate(function() {
    console.log('immediate1');
    process.nextTick(function() {
        console.log('immediate1_nextTick');
    })
    new Promise(function(resolve) {
        console.log('immediate1_promise');
        resolve();
    }).then(function() {
        console.log('immediate1_then')
    })
})


// process.nextTick(function() {
//     console.log('glob1_nextTick');
// })
// new Promise(function(resolve) {
//     console.log('glob1_promise');
//     resolve();
// }).then(function() {
//     console.log('glob1_then')
// })

// setTimeout(function() {
//     console.log('timeout2');
//     process.nextTick(function() {
//         console.log('timeout2_nextTick');
//     })
//     new Promise(function(resolve) {
//         console.log('timeout2_promise');
//         resolve();
//     }).then(function() {
//         console.log('timeout2_then')
//     })
// })

// process.nextTick(function() {
//     console.log('glob2_nextTick');
// })
// new Promise(function(resolve) {
//     console.log('glob2_promise');
//     resolve();
// }).then(function() {
//     console.log('glob2_then')
// })

// setImmediate(function() {
//     console.log('immediate2');
//     process.nextTick(function() {
//         console.log('immediate2_nextTick');
//     })
//     new Promise(function(resolve) {
//         console.log('immediate2_promise');
//         resolve();
//     }).then(function() {
//         console.log('immediate2_then')
//     })
// })

