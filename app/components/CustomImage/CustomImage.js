import React, {Component} from 'react';
import {Image} from 'react-native';
import {styles as s} from 'react-native-style-tachyons';

export default class CustomImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            loadFailed: false
        }
    }

    render() {
        return (
            <Image
                {...this.props}
                style={[
                this.props.style, this.state.loading
                    ? s.bg_grey75
                    : (this.state.loadFailed
                        ? s.bg_white
                        : null)
            ]}
                onLoadStart={e => this.setState({loading: true})}
                onLoad={e => this.setState({loading: false, loadFailed: false})}
                onError={e => this.setState({loading: false, loadFailed: true})}></Image>
        );
    }
}