/**
 * 在组件中通过事件更新 state 时，需要调用对应的 actionCreator 返回动作
 * 并手动调用 store 的 dispatch 传入动作对象以执行 reducer 来更新 state 数据
 * 该方法的作用是将 actions 对象中所有的 actionCreator 重写，在执行 actionCreator 时可以自动调用 dispatch
 * @param {Object} actions
 * @param {Function} dispatch
 */
function bindActionCreators(actions, dispatch) {
    // 存储 actions 中重写后的 actionCreator
    let newActions = {};

    // 在 newActions 中循环创建与 actions 中同名的 actionCreator
    for (let key in actions) {
        // 在新方法内部，将原本手动调用 dispatch 并将 actionCreator 执行后返回的动作对象作为参数传入
        // 将整个更新 state 到执行订阅的过程，在组件中执行新生成的 actionCreator 就可以完成
        newActions[key] = (...args) => dispatch(actions[key](...args));
    }

    // 返回新的 actions
    return newActions;
}

export default bindActionCreators;
