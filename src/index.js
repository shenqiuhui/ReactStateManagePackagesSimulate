// redux 流程
// 组件数据的传递，父子组件通信，靠 props 和 context API
// 如果平级组件，或非相同父组件的堂兄弟组件（需要找到共同的父级组件）
// 如果项目大这样代码不优雅，redux 就是用来解决这个问题
// redux 的方式，统一资源状态管理（解决组件间数据传递的问题）
// redux 流程 store（容器）-> state（状态）-> getState（获取状态 -> 在组件中发布一个 action -> reducer（管理员）-> 更改状态
// redux 不是一定要和 react 结合使用，支持在原生 JS 以及各种框架中使用

// react-redux
// 在每一个使用 redux 的组件当中，都会有一些公共逻辑，如下
// 1、都会引入 store 并通过 getState 获取该组件的状态
// 2、可能会重写 actions 中的 actionCreator，添加自动 dispatch 的逻辑
// 3、都会在组件将要挂载时，添加订阅用来在执行 store 的 dispatch 或重写的 actionCreator 后更新状态的逻辑
// 4、都会在组件将要卸载时，取消订阅，防止卸载后调用 setState 更新 state 时报错
// 这些逻辑如果每一个组件都写一遍是很繁琐的，react-redux 就是用来解决这个问题
// react-redux 提供一个核心根组件 Provider 用来为使用 redux 的组件提供 context
// react-redux 同时提供一个核心 API connect 用来创建高阶组件实现公共逻辑，并为每一个组件连接 state
// react-redux 依赖于 redux

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App/>, window.root);
