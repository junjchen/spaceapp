import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles as s} from 'react-native-style-tachyons';

export default class SectionHeader extends Component {
    render() {
        return (
            <View style={[this.props.style, s.h3]}>
                <View style={[s.flx_1, s.flx_row, s.jcc, s.mb1]}>
                    <Text style={[s.f4, s.b, s.mr2]}>{this.props.title}
                    </Text>
                    <Text style={[s.f4, s.b, s.i]}>{this
                            .props
                            .supportText
                            .toUpperCase()}</Text>
                </View>
                <View style={[s.flx_1, s.flx_row, s.jcc]}>
                    <Icon name='ios-arrow-dropright-circle' style={s.f3}/>
                </View>
            </View>
        );
    }
}