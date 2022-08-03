// 两种方法实现
// eval
// new Function
const parse = (str) => {
    // return eval('('+ str + ')');
    return (new Function(`return ${str}`))();
};

const str = JSON.stringify({"test":"测试"});
console.log(parse(str));