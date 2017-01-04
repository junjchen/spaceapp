import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles as s, sizes} from "react-native-style-tachyons";

const Tabs = ({tabs, activeTab, goToPage}) => (
    <View style={[s.flx_row]}>
        {tabs.map((tab, i) => <View key={tab} style={[s.w3, s.flx_row, s.jcc]}>
            <TouchableOpacity onPress={() => goToPage(i)}>
                <Text
                    style={[
                    s.f4, activeTab === i
                        ? s.b
                        : null
                ]}>{tab}</Text>
            </TouchableOpacity>
        </View>)}
    </View>
)

export default class TabBar extends Component {
    render() {
        const left = this
            .props
            .scrollValue
            .interpolate({
                inputRange: [
                    0, 1
                ],
                outputRange: [0, sizes.w3]
            });
        return (
            <View style={[s.flx_row, s.aic, s.pb2, s.ph3, s.mb1]}>
                <View style={[s.flx_row, s.flx_i, s.jcsb]}>
                    {Tabs(this.props)}
                    <Animated.View
                        style={[
                        s.absolute,
                        s.bg_black, {
                            width: 5,
                            height: 5,
                            borderRadius: 5 / 2,
                            bottom: -sizes.pb2,
                            marginLeft: sizes.w3 / 2,
                            left
                        }
                    ]}/>
                </View>
                <View>
                    <TouchableOpacity>
                        <Icon name='ios-menu' style={[s.black, s.f3]}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}