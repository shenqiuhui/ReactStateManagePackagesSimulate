import * as actionTypes from '../action-types';

// CounterTwo 组件的 actionCreator
export default {
    // 乘法使用 redux-promise 第一种处理方式处理异步
    multiply(payload) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ type: actionTypes.MULTIPLY, payload });
            }, 1000);
        });
    },

    // 除法使用 redux-promise 第二种处理方式处理错误的情况
    divide(payload) {
        return {
            type: actionTypes.DIVIDE,
            payload: new Promise((resolve, reject) => {
                setTimeout(() => reject(payload), 2000);
            })
        };
    }
}
