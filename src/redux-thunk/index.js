// 导出 thunk 中间件
export default store => dispatch => action => {
    // 如果 action 是函数，执行这个函数并传入真正的 dispatch 和 getState（为了方便在 actions 中获取 state）
    // 并在 action 函数内部控制异步和派发动作
    // 如果 action 不是函数，说明是同步，则直接派发动作
    typeof action === 'function' ? action(dispatch, store.getState) : dispatch(action);
}
