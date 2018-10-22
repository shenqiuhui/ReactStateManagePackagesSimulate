import createStore from './createStore';
import combineReducers from './combineReducers';
import bindActionCreators from './bindActionCreators';
import applyMiddleware from './applyMiddleware';
import compose from './compose'

// 统一导出 Redux 所有的方法
export {
    createStore,
    combineReducers,
    bindActionCreators,
    applyMiddleware,
    compose
}
