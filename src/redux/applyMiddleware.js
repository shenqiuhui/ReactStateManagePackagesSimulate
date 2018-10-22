import compose from './compose';

/**
 * 第一层函数参数为传入的中间件（函数）
 * 返回的第二层函数参数为创建 store 的方法 createStore
 * 返回的第三层函数参数为调用 createStore 方法需要传入的 reducer
 */
const applyMiddleware = (...middlewares) => createStore => reducer => {
    // 创建仓库
    let store = createStore(reducer);

    // 循环执行所有中间件，返回所有中间件执行后的第一层参数为 dispatch 的函数（数组）
    let fns = middlewares.map(middleware => middleware(store));

    // 组合中间件后，最后一个中间件最后一层函数内部执行真正的 dispatch
    // 这个最后一层函数作为上一个中间件执行第二层函数的参数传入，返回上一个中间件的最后一层函数
    // 上一个中间件的最后一层函数内执行的中间件是下一个中间件的最后一层函数
    // 最先传入的中间件的最后一层函数先执行，最后传入的中间件最后一层函数最后执行
    // 依此类推，最后 compose 返回的是一个函数（重写的 dispatch），传参为真正的 diapatch
    let dispatch = compose(...fns)(store.dispatch);

    // 返回重写 dispatch 后的 store
    return {
        ...store,
        dispatch
    };
}

export default applyMiddleware;
