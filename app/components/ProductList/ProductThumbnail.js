import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles as s} from "react-native-style-tachyons";
import CustomImage from '../CustomImage';

export default class ProductThumbnail extends Component {

    render() {
        let text = null;
        if (this.props.brandName) {
            text = (
                <View style={[s.ph2]}>
                    <Text numberOfLines={1} style={[s.f6, s.mt2, s.grey41]}>{this.props.brandName}</Text>
                    <Text numberOfLines={2} style={[s.f5, s.mt1]}>{this.props.name}</Text>
                </View>
            );
        } else {
            text = (
                <View style={[s.ph2]}>
                    <Text numberOfLines={2} style={[s.f5, s.mt2]}>{this.props.name}</Text>
                </View>
            );
        }

        const [width,
            height] = this.props.imgSize;

        return (
            <View style={[this.props.style, {
                    width
                }]}>
                <CustomImage
                    source={{
                    uri: this.props.imgUri,
                    width,
                    height
                }}
                    style={s.br2}/>{text}
            </View>
        )
    }
}