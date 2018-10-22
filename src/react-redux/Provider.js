import React, { Component } from 'react';
import Context from './context';

// 导出封装的提供消费的 Provider 组件
export default class Provider extends Component {
    render() {
        return (
            <Context.Provider value={this.props.store}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
