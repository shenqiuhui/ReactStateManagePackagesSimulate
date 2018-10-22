import React, { Component } from 'react';
import { Provider } from './react-redux';
import store from './store';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    <CounterOne/>
                    <CounterTwo/>
                </React.Fragment>
            </Provider>
        )
    }
}
