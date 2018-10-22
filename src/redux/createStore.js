/**
 * reducer 为管理员，执行后用来返回一个新的 state
 * fn 为 applyMiddleware 中间件函数的执行结果，依然是一个函数
 * 返回值为 store（对象），包含 getState、dispatch、subscribe 三个方法
 * @param {Function} reducer
 * @param {Function} fn
 */
function createStore(reducer, fn) {
    // 通过 fn 判断是否使用了中间件
    // 如果使用了中间件，通过 applyMiddleware 的返回函数 fn 创建 store
    if (typeof fn === 'function') {
        return fn(createStore)(reducer);
    }

    // 默认状态
    let state;

    // 存储所有的订阅（派发动作时应该执行的函数）
    let listeners = [];

    /**
     * action 是一个对象，其中 type 属性代表动作
     * 派发一个动作，目的为了更新 state 并执行订阅的函数（发布）
     * @param {Object} action
     */
    const dispatch = action => {
        // reducer 会根据动作返回一个新的状态 state，动作不匹配返回原来的状态
        state = reducer(state, action);

        // 循环存储订阅的数组发布所有的订阅
        listeners.forEach(listener => listener());
    }

    // 默认执行一次派发动作的方法，将 state 设置成 reducer 返回的初始状态
    // @INIT 动作类型为 Redux 规定，所以在 reducer 中不要定义这个动作类型
    dispatch({ type: '@INIT' });

    /**
     * 订阅方法，fn 为订阅的函数
     * @param {Function} fn
     */
    const subscribe = fn => {
        // 将传入的函数存入 listeners 数组中统一管理
        listeners.push(fn);

        // 返回一个取消订阅的方法，调用 subscribe 方法时通常用 unsubscribe 变量接收
        // 每次使用 subscribe 添加订阅都会返回一个 unsubscribe 方法用来取消这个订阅
        return () => {
            // 过滤掉 listeners 中调用 subscribe 方法添加的订阅
            listeners = listeners.filter(listener => listener !== fn);
        };
    }

    /**
     * 方法用于将 state 状态返回，为了防止在函数外修改原始的 state，所以返回的是一个副本
     */
    const getState = () => JSON.parse(JSON.stringify(state));

    // 返回 store，store 中包含 dispatch，subscribe，getState 三个方法
    return {
        dispatch,
        subscribe,
        getState
    }
}

export default createStore;
