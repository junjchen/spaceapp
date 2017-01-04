import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {styles as s} from "react-native-style-tachyons";

import {styleMock} from '../../config/testHelper';
import CustomActivityIndicator from './CustomActivityIndicator';

describe('<CustomActivityIndicator />', () => {

    it('should render correctly when animating is True', () => {
        const wrapper = shallow(<CustomActivityIndicator style={styleMock} animating/>);
        const target = (
            <View>
                <ActivityIndicator style={styleMock} animating={true}/>
            </View>
        );

        expect(wrapper.equals(target))
            .to
            .equal(true);
    });

    it('should render a empty view when animating is False', () => {
        const wrapper = shallow(<CustomActivityIndicator animating={false}/>);

        expect(wrapper.equals(<View/>))
            .to
            .equal(true);
    });

});