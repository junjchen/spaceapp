import React from 'react';
import {ScrollView} from 'react-native';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import {styles as s} from "react-native-style-tachyons";

import PostList from './PostList';
import PostThumbnail from './PostThumbnail';
import {posts, styleMock} from '../../config/testHelper';

describe('<PostList />', () => {

    before(() => {
        const [p1,
            p2,
            ...others] = posts;
        this.wrapper = shallow(<PostList style={styleMock} posts={[p1, p2]} imgSize={[10, 10]}/>);
    });

    it('should render correctly', () => {
        const [p1,
            p2,
            ...others] = posts;
        const target = (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styleMock}>
                <PostThumbnail
                    key={0}
                    title={p1.title}
                    excerpt={p1.excerpt}
                    imgUri={p1.thumbnail}
                    imgSize={[10, 10]}
                    style={s.mr3}/>
                <PostThumbnail
                    key={1}
                    title={p2.title}
                    excerpt={p2.excerpt}
                    imgUri={p2.thumbnail}
                    imgSize={[10, 10]}
                    style={null}/>
            </ScrollView>
        );

        expect(this.wrapper.equals(target))
            .to
            .equal(true);
    });

});