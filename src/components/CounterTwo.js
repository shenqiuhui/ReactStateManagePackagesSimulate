import React, { Component } from 'react';
import { counterTwoActions } from '../store/actions';
import { connect } from '../react-redux';

class CounterTwo extends Component {
    // 乘和除的事件
    multiply = () => this.props.multiply(10)
    divide = () => this.props.divide(5)

    render() {
        return (
            <div className="box">
                <h3>组件 2：乘除法计算器</h3>
                <div className="content">
                    <button onClick={this.multiply}>乘</button>
                    <span>{this.props.num}</span>
                    <button onClick={this.divide}>除</button>
                </div>
            </div>
        )
    }
}

// 导出创建的高阶组件，并连接仓库，第二个参数 mapDispatchToProps 传入对象的方式（更简洁，actionCreator 的属性名不可控）
export default connect(
    state => state.counterTwo,
    counterTwoActions
)(CounterTwo);
