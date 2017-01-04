import React from 'react';
import {ScrollView} from 'react-native';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {styles as s} from "react-native-style-tachyons";

import GenreList from './GenreList';
import GenreThumbnail from './GenreThumbnail';
import {genres, styleMock} from '../../config/testHelper';

describe('<GenreList />', () => {

    before(() => {
        const [g1,
            g2,
            ...others] = genres;
        this.wrapper = shallow(<GenreList style={styleMock} genres={[g1, g2]} imgSize={[10, 10]}/>);
    });

    it('should render correctly', () => {
        const [g1,
            g2,
            ...others] = genres;
        const target = (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styleMock}>
                <GenreThumbnail
                    key={0}
                    title={g1.name}
                    imgUri={g1.thumbnail}
                    imgSize={[10, 10]}
                    style={s.mr2}/>
                <GenreThumbnail
                    key={1}
                    title={g2.name}
                    imgUri={g2.thumbnail}
                    imgSize={[10, 10]}
                    style={s.mr2}/>
            </ScrollView>
        );

        expect(this.wrapper.equals(target))
            .to
            .equal(true);
    });

});