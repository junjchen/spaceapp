import React from 'react';
import {View, Text} from 'react-native';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {styles as s} from "react-native-style-tachyons";

import GenreThumbnail from './GenreThumbnail';
import CustomImage from '../CustomImage';
import {genres, styleMock} from '../../config/testHelper';

describe('<CategoryThumbnail />', () => {

    before(() => {
        const g = genres[0];
        const props = {
            style: styleMock,
            title: g.name,
            imgUri: g.thumbnail,
            imgSize: [10, 10]
        }

        this.wrapper = shallow(<GenreThumbnail {...props}/>);
    });

    it('should render correctly', () => {
        const g = genres[0];
        const target = (
            <View
                style={[
                {
                    height: 10,
                    width: 10
                },
                s.jcc,
                s.aic,
                styleMock
            ]}>
                <CustomImage
                    source={{
                    uri: g.thumbnail,
                    width: 10,
                    height: 10
                }}
                    style={[s.absolute_fill, s.br2]}/>
                <View style={[s.bg_black, s.pa1]}>
                    <Text numberOfLines={1} style={[s.f5, s.white]}>{g.name}</Text>
                </View>
            </View>
        );

        expect(this.wrapper.equals(target))
            .to
            .equal(true);
    });

});