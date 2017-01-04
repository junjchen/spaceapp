import React from 'react';
import {View, Text} from 'react-native';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {styles as s} from "react-native-style-tachyons";

import CategoryThumbnail from './CategoryThumbnail';
import CustomImage from '../CustomImage';
import {categories, styleMock} from '../../config/testHelper';

describe('<CategoryThumbnail />', () => {

    before(() => {
        const c = categories[0];
        const props = {
            style: styleMock,
            title: c.name,
            supportText: c.eng_name,
            imgUri: c.thumbnail,
            imgSize: [10, 10]
        }

        this.wrapper = shallow(<CategoryThumbnail {...props}/>);
    });

    it('should render correctly', () => {
        const c = categories[0];
        const target = (
            <View
                style={[
                {
                    height: 10
                },
                s.flx_row,
                s.ph3,
                s.bg_grey98,
                styleMock
            ]}>
                <View style={[s.pa1, s.flx_i, s.jcc]}>
                    <Text numberOfLines={1} style={[s.f5, s.b]}>{c.name}</Text>
                    <Text numberOfLines={1} style={[s.f5, s.grey75, s.i, s.mt1]}>{c
                            .eng_name
                            .toUpperCase()}</Text>
                </View>
                <CustomImage
                    source={{
                    uri: c.thumbnail,
                    width: 10,
                    height: 10
                }}/>
            </View>
        );

        expect(this.wrapper.equals(target))
            .to
            .equal(true);
    });

});