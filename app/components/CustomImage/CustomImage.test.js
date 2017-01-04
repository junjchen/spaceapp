import React from 'react';
import {Image} from 'react-native';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {styles as s} from "react-native-style-tachyons";

import {styleMock} from '../../config/testHelper';
import CustomImage from './CustomImage';

describe('<CustomImage />', () => {

    before(() => {
        this.props = {
            style: styleMock,
            testProp: 'testProp'
        }
        this.wrapper = shallow(<CustomImage {...this.props}/>)
    });

    it('should render correctly in default state', () => {
        const target = (<Image testProp='testProp' style={[styleMock, null]}/>);
        expect(this.wrapper.matchesElement(target))
            .to
            .equal(true);
    });

    it('should render correctly in fetching state', () => {
        this
            .wrapper
            .setState({loading: true, loadFailed: false});
        expect(this.wrapper.prop('style'))
            .to
            .deep
            .equal([styleMock, s.bg_grey75]);

        this
            .wrapper
            .setState({loading: true, loadFailed: true});
        expect(this.wrapper.prop('style'))
            .to
            .deep
            .equal([styleMock, s.bg_grey75]);
    });

    it('should render correctly in fetch failed state', () => {
        this
            .wrapper
            .setState({loading: false, loadFailed: true});
        expect(this.wrapper.prop('style'))
            .to
            .deep
            .equal([styleMock, s.bg_white]);
    });

});