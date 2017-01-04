import {StyleSheet} from 'react-native';
import NativeTachyons, {styles as s} from "react-native-style-tachyons";

import {commonStyles} from './styles';

NativeTachyons.build({
    colors: {
        palette: commonStyles.colors
    }
}, StyleSheet);

const categories = [
    {
        name: 'category1',
        eng_name: 'category_eng1',
        thumbnail: 'category_thumbnail1'
    }, {
        name: 'category2',
        eng_name: 'category_eng2',
        thumbnail: 'category_thumbnail2'
    }, {
        name: 'category3',
        eng_name: 'category_eng3',
        thumbnail: 'category_thumbnail3'
    }
];

const genres = [
    {
        name: 'genre1',
        thumbnail: 'genre_thumbnail1'
    }, {
        name: 'genre2',
        thumbnail: 'genre_thumbnail2'
    }, {
        name: 'genre3',
        thumbnail: 'genre_thumbnail3'
    }
];

const posts = [
    {
        title: 'post1',
        excerpt: 'excerpt1',
        thumbnail: 'post_thumbnail1'
    }, {
        title: 'post2',
        excerpt: 'excerpt2',
        thumbnail: 'post_thumbnail2'
    }, {
        title: 'post3',
        excerpt: 'excerpt3',
        thumbnail: 'post_thumbnail3'
    }
];

const styleMock = {
    isMock: "true"
}

export {categories, genres, posts, styleMock};