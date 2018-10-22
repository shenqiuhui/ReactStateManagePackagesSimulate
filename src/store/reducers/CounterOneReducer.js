import * as actionTypes from '../action-types';

// CounterOne 组件的初始状态
let initState = {
    num: 0
};

// CounterOne 组件对应的 reducer
export default function (state = initState, action) {
    switch (action.type) {
        case actionTypes.ADD:
            return { num: state.num + action.payload };
        case actionTypes.MINUS:
            return { num: state.num - action.payload };
        default:
            return state;
    }
}
