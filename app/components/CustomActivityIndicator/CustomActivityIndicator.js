import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';

export default class CustomActivityIndicator extends Component {

    render() {
        return (
            <View>
                {this.props.animating && <ActivityIndicator {...this.props}/>}
            </View>
        );
    }
}