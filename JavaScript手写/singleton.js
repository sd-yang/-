// 单例模式

const singleTon = (() => {
    let instance;
    function Single(name) {
        this.name = name;
    }
    return function(name) {
        if (!instance) {
            instance = new Single(name)
        }
        return instance;
    }
})();

let a = singleTon('a');
let b = singleTon('b');
console.log(a === b);

