import { createStore, combineReducers, applyMiddleware } from '../redux';
import reducers from './reducers';

// 引入中间件
import reduxThunk from '../redux-thunk';
import reduxPromise from '../redux-promise';
import reduxLogger from '../redux-logger';

// 合并 reducer
let reducer = combineReducers(reducers);

// 创建 store
// 第一种写法，太长，不符合开发者习惯
// let store = applyMiddleware(reduxThunk, reduxPromise, reduxLogger)(createStore)(reducer);

// 第二种写法，比较常用
let store = createStore(reducer, applyMiddleware(reduxThunk, reduxPromise, reduxLogger));

// 将 store 挂在 window 对象上便于在浏览器调试
window.store = store;

export default store;
