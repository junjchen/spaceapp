import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import ScrollableTabText from 'react-native-scrollable-tab-view';
import {styles as s} from 'react-native-style-tachyons';
import TabBar from '../../components/TabBar';
import {Featured} from '../../config/routes';
import {Discover} from '../../config/routes';

export default class App extends Component {

    constructor(props) {
        super(props);
        this
            .props
            .onInit();
    }

    render() {
        return (
            <ScrollableTabText
                page={this.props.page}
                onChangeTab={this.props.onChangeTab}
                renderTabBar={() =>< TabBar />}
                style={s.mt4}>
                <ScrollView tabLabel='精选' showsVerticalScrollIndicator={false}>
                    <Featured/>
                </ScrollView>
                <ScrollView tabLabel='发现' showsVerticalScrollIndicator={false}>
                    <Discover/>
                </ScrollView>
                <ScrollView tabLabel='关注'></ScrollView >
            </ScrollableTabText>
        );
    }
}