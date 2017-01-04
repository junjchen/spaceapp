import React from 'react';
import {View, Text} from 'react-native';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {styles as s} from "react-native-style-tachyons";

import PostThumbnail from './PostThumbnail';
import CustomImage from '../CustomImage';
import {posts, styleMock} from '../../config/testHelper';

describe('<PostThumbnail />', () => {

    before(() => {
        const p = posts[0];
        const props = {
            style: styleMock,
            title: p.title,
            excerpt: p.excerpt,
            imgUri: p.thumbnail,
            imgSize: [10, 10]
        }

        this.wrapper = shallow(<PostThumbnail {...props}/>);
    });

    it('should render correctly', () => {
        const p = posts[0];
        const target = (
            <View
                style={[
                {
                    width: 10
                },
                styleMock
            ]}>
                <CustomImage
                    source={{
                    uri: p.thumbnail,
                    width: 10,
                    height: 10
                }}/>
                <View style={s.ph3}>
                    <Text numberOfLines={1} style={[s.f4, s.b, s.mt3]}>{p.title}</Text>
                    <Text numberOfLines={2} style={[s.f5, s.mt2, s.grey41]}>{p.excerpt}</Text>
                </View>
            </View>
        );

        expect(this.wrapper.equals(target))
            .to
            .equal(true);
    });

});