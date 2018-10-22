/**
 * 用于将所有 reducer 返回的 state 进行合并，每一个 state 作为全局 state 的属性存在
 * 参数为一个存储所有 reducer 的对象，键名会作为全局 state 上的属性名，值为这个 reducer 返回的状态
 * @param {Object} reducers
 */
function combineReducers(reducers) {
    /**
     * reducer 为一个可以返回新状态的函数，所以合并后的 reducer 也是一个函数
     * 为了让 createStore 创建仓库，默认执行 dispatch 后传递给这个合并后 reducer 的 state 取值不报错，所以默认值设置为空对象
     * @param {Object} state
     * @param {Object} action
     */
    return (state = {}, action) => {
        // 整合所有 reducer 返回状态的新状态
        let newState = {};

        // 循环执行每个 reducer，将所有 reducer 返回的状态作为 newState 的属性
        for (let key in reducers) {
            newState[key] = reducers[key](state[key], action);
        }

        // 返回整合后的新状态
        return newState;
    }
}

export default combineReducers;
