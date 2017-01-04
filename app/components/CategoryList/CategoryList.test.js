import React from 'react';
import {ScrollView} from 'react-native';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {styles as s} from "react-native-style-tachyons";

import CategoryList from './CategoryList';
import CategoryThumbnail from './CategoryThumbnail';
import {categories, styleMock} from '../../config/testHelper';

describe('<CategoryList />', () => {

    before(() => {
        const [c1,
            c2,
            ...others] = categories;
        this.wrapper = shallow(<CategoryList style={styleMock} categories={[c1, c2]} imgSize={[10, 10]}/>);
    });

    it('should render correctly', () => {
        const [c1,
            c2,
            ...others] = categories;
        const target = (
            <ScrollView style={styleMock}>
                <CategoryThumbnail
                    key={0}
                    title={c1.name}
                    supportText={c1.eng_name}
                    imgUri={c1.thumbnail}
                    imgSize={[10, 10]}
                    style={s.mb2}/>
                <CategoryThumbnail
                    key={1}
                    title={c2.name}
                    supportText={c2.eng_name}
                    imgUri={c2.thumbnail}
                    imgSize={[10, 10]}
                    style={s.mb2}/>
            </ScrollView>
        );

        expect(this.wrapper.equals(target))
            .to
            .equal(true);
    });

});