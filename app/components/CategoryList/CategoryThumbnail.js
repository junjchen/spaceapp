import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles as s} from 'react-native-style-tachyons';
import CustomImage from '../CustomImage';

export default class CategoryThumbnail extends Component {

    render() {
        const [width,
            height] = this.props.imgSize;
        return (
            <View
                style={[{
                    height
                }, s.flx_row, s.ph3, s.bg_grey98, this.props.style]}>
                <View style={[s.pa1, s.flx_i, s.jcc]}>
                    <Text numberOfLines={1} style={[s.f5, s.b]}>{this.props.title}</Text>
                    <Text numberOfLines={1} style={[s.f5, s.grey75, s.i, s.mt1]}>{this
                            .props
                            .supportText
                            .toUpperCase()}</Text>
                </View>
                <CustomImage
                    source={{
                    uri: this.props.imgUri,
                    width,
                    height
                }}/>
            </View>
        )
    }
}