import React, { Component } from 'react';
import { counterOneActions } from '../store/actions';
import { connect } from '../react-redux';

class CounterOne extends Component {
    // 加和减的事件
    add = () => this.props.add(2)
    minus = () => this.props.minus(1);

    render() {
        return (
            <div className="box">
                <h3>组件 1：加减法计算器</h3>
                <div className="content">
                    <button onClick={this.add}>加</button>
                    <span>{this.props.num}</span>
                    <button onClick={this.minus}>减</button>
                </div>
            </div>
        )
    }
}

// 导出创建的高阶组件，并连接仓库，第二个参数 mapDispatchToProps 传入函数的方式（编写麻烦，可以自定义 actionCreator 的名字）
export default connect(
    state => state.counterOne,
    dispatch => {
        return {
            // 返回一个对象，这里定义的方法名将作为组件的参数名
            // 参数为更新时的 payload，可能有多个参数，由编写 actions 的 actionCreator 时决定
            add: (...args) => dispatch(counterOneActions.add(...args)),
            minus: (...args) => dispatch(counterOneActions.minus(...args))
        }
    }
)(CounterOne);
