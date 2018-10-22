**下载依赖包**

> yarn

**启动项目**

> yarn start

### 项目介绍：

是一个小型的测试项目，涵盖了 React 状态管理相关的常用库源码模拟，并使用模拟库和案例完成了对 `React` 状态管理的常规使用方式的测试

-   redux 目录为 `redux` 库的实现，其中包含 `createStore`、`combineReducers`、`bindActionCreators`、`applyMiddleware`、`compose`
-   redux-logger 目录为 `redux-logger` 中间件的实现
-   redux-thunk 目录为 `redux-thunk` 中间件的实现
-   redux-promise 目录为 `redux-promise` 中间件的实现
-   react-redux 目录为连接 `redux` 和 `react` 的 `react-redux` 库的实现，其中包括组件 `Provider` 和 API `connect`
-   components 目录为项目中对模拟库源码使用的两个组件案例
-   store 目录为使用这些库创建的 `store`，其中包含 `reducers`、`actions` 和 `action-types`
-   `App.js` 为渲染的主组件，`index.js` 为主文件入口，`index.css` 为组件的全局样式

### 使用脚手架：

`create-react-app`

### 参考源码地址：

-   redux : https://github.com/reduxjs/redux
-   redux-logger : https://github.com/evgenyrodionov/redux-logger
-   redux-thunk : https://github.com/reduxjs/redux-thunk
-   redux-promise : https://github.com/redux-utilities/redux-promise
-   react-redux : https://github.com/reduxjs/react-redux

### 参考官方文档：

React 文档：https://react.docschina.org/docs/hello-world.html
