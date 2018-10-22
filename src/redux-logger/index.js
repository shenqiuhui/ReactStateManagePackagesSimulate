// 导出 logger 中间件
export default store => dispatch => action => {
    // 更改状态前打印 state
    console.log('prevState', store.getState());

    // 派发动作，更新 state
    dispatch(action);

    // 打印派发的动作
    console.log('action', action);

    // 更改状态后打印 state
    console.log('nextState', store.getState());
}
