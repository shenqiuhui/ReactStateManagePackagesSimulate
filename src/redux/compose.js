// 传入多个函数，每次返回一个函数，函数内部将本次归并的下一个函数的执行结果作为上一个函数执行的参数
// compose(a, b, c) 过程如下
// (...args) => a(b(...args));
// (...args) => ((...args) => a(b(...args)))(c(...args));
// (...args) => a(b(c(...args)));
export default (...funs) => {
    return funs.reduce((prev, next) => (...args) => prev(next(...args)));
}
