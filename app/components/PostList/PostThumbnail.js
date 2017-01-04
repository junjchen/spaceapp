import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles as s} from "react-native-style-tachyons";
import CustomImage from '../CustomImage';

export default class PostThumbnail extends Component {

    render() {
        const [width,
            height] = this.props.imgSize;

        return (
            <View style={[{
                    width
                }, this.props.style]}>
                <CustomImage
                    source={{
                    uri: this.props.imgUri,
                    width,
                    height
                }}/>
                <View style={s.ph3}>
                    <Text numberOfLines={1} style={[s.f4, s.b, s.mt3]}>{this.props.title}</Text>
                    <Text numberOfLines={2} style={[s.f5, s.mt2, s.grey41]}>{this.props.excerpt}</Text>
                </View>
            </View>
        )
    }
}