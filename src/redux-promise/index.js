export default store => dispatch => action => {
    // 判断 action 是否是一个 Promise 实例，如果是则执行 then 方法，将 dispatch 作为成功的回调
    // 在 actionCreator 中返回的 Promise 实例调用 resolve 必须传入 action，这种做法不会处理错误
    if (action.then) {
        return action.then(dispatch);
    } else if (action.payload && action.payload.then) {
        // 如果 actionCreator 返回的是对象，判断是否含有 payload 属性，且判断该属性值是否是一个 Promise 实例
        // 如果是 Promise 实例则执行 payload.then 方法
        return action.payload.then(data => {
            // 成功的回调中执行 dispatch 派发动作（actionCreator 中 payload 的 Promise 中执行了 resolve）
            // 因为 actionCreator 中传入的只是一个 payload 的返回值，所以需要和动作类型 type 重新组合成 action
            dispatch({ ...action, payload: data });
        }, err => {
            // 错误的回调中同样执行 dispatch 派发动作（actionCreator 中 payload 的 Promise 中执行了 reject）
            dispatch({ ...action, payload: err });

            // 对外抛出错误
            return Promise.reject(err);
        });
    }

    // 如果 actionCreator 返回的不是 Promise，且返回 action 的 payload 也不是 Promise
    // 则直接执行 dispatch 派发动作
    dispatch(action);
}
