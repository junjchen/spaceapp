import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles as s} from "react-native-style-tachyons";
import CustomImage from '../CustomImage';

export default class GenreThumbnail extends Component {

    render() {
        const [width,
            height] = this.props.imgSize;
        return (
            <View
                style={[
                {
                    width,
                    height
                },
                s.jcc,
                s.aic,
                this.props.style
            ]}>
                <CustomImage
                    source={{
                    uri: this.props.imgUri,
                    width,
                    height
                }}
                    style={[s.absolute_fill, s.br2]}/>
                <View style={[s.bg_black, s.pa1]}>
                    <Text numberOfLines={1} style={[s.f5, s.white]}>{this.props.title}</Text>
                </View>
            </View>
        )
    }
}