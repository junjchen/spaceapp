import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import NativeTachyons from 'react-native-style-tachyons';

import store from './config/store';
import styles from './config/styles';
import App from './layouts/App';
import {fetchViewState} from './actions';

export default class Main extends Component {

    constructor() {
        super();

        NativeTachyons.build({
            rem: styles.fontSize,
            colors: {
                palette: styles.colors
            }
        }, StyleSheet);

        store.subscribe(() => console.debug(store.getState()));
    }

    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }

}