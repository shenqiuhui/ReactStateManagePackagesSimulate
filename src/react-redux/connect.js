import React, { Component } from 'react';
import { bindActionCreators } from '../redux';
import Context from './context';

/**
 * 第一个参数为 state 的映射入 state => state
 * 第二个参数为 actions 的映射，支持函数或对象 dispatch => actions 或 actions
 * 返回值为一个函数，接收连接仓库的组件，执行后返回一个高阶组件，内部可以处理公共逻辑和消费 context
 * @param {Function} mapStateToProps
 * @param {Function|Object} mapDispatchToProps
 */
export default (mapStateToProps, mapDispatchToProps) => Comp => {
    // 定义一个代理组件用来处理所有组件都需要做的订阅、取消订阅、重写 actions 等公共逻辑
    // 同时完成对传入 Comp 组件的渲染和参数传递
    class Proxy extends Component {
        // 利用 Consumer 传入的 store 创建代理组件的 state
        state = mapStateToProps(this.props.store.getState())

        // mapDispatchToProps 支持函数或对象类型
        // 如果是函数则直接执行返回 actions，如果是对象通过 bindActionCreators 重写内部 actionCreator
        actions = typeof mapDispatchToProps === 'function' ? mapDispatchToProps(this.props.store.dispatch) : bindActionCreators(mapDispatchToProps, this.props.store.dispatch)

        // 订阅触发 dispatch 后需要更新 state 的事件
        componentWillMount() {
            this.unsubscribe = this.props.store.subscribe(() => {
                // 重新获取 redux 中 state 更新后的数据，并更新代理组件的 state
                this.setState(mapStateToProps(this.props.store.getState()));
            });
        }

        // 在组件将要卸载时取消订阅
        componentWillUnmount() {
            this.unsubscribe();
        }

        // 渲染 Comp 组件，将代理组件 Proxy 的 state 转化为 Comp 组件的属性
        render() {
            return <Comp {...this.state} {...this.actions}/>
        }
    }

    // 返回一个高阶组件
    return () => {
        return (
            <Context.Consumer>
                {
                    // 渲染代理组件 Proxy 并传入 store
                    store => <Proxy store={store}/>
                }
            </Context.Consumer>
        )
    }
}
