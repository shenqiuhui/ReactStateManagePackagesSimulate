import * as actionTypes from '../action-types';

// CounterOne 组件的 actionCreator
export default {
    // 加法为同步
    add(payload) {
        return { type: actionTypes.ADD, payload };
    },

    // 减法使用 redux-thunk 处理异步
    minus(payload) {
        return (dispatch, getState) => {
            setTimeout(() => {
                // 打印派发动作前的状态
                console.log('before-dispatch-by-thunk', getState());

                // 派发事件
                dispatch({ type: actionTypes.MINUS, payload });
            }, 1000);
        }
    }
}
