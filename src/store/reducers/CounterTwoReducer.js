import * as actionTypes from '../action-types';

// CounterTwo 组件的初始状态
let initState = {
    num: 1
};

// CounterTwo 组件对应的 reducer
export default function (state = initState, action) {
    switch (action.type) {
        case actionTypes.MULTIPLY:
            return { num: state.num * action.payload };
        case actionTypes.DIVIDE:
            return { num: state.num / action.payload };
        default:
            return state;
    }
}
