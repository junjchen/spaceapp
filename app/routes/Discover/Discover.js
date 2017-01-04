import React, {Component} from 'react';
import {View} from 'react-native';
import SearchBar from 'react-native-search-bar';
import {styles as s} from 'react-native-style-tachyons';

import CategoryList from '../../components/CategoryList';
import GenreList from '../../components/GenreList';
import CustomActivityIndicator from '../../components/CustomActivityIndicator';
import {model} from '../../config/styles';

const _sizes = {
    "iPhone 6": {
        genreImgSize: [
            100, 100
        ],
        categoryImgSize: [150, 100]
    },
    "iPhone 5s": {
        genreImgSize: [
            85, 85
        ],
        categoryImgSize: [128, 85]
    }
}

export default class Discover extends Component {

    render() {
        let body = null;
        if (this.props.isReady) {
            const {genreImgSize, categoryImgSize} = _sizes[model];
            body = (
                <View>
                    <GenreList
                        genres={this.props.genres}
                        imgSize={genreImgSize}
                        style={[s.pl2, s.mt3]}/>
                    <CategoryList
                        categories={this.props.categories}
                        imgSize={categoryImgSize}
                        style={[s.mt4]}/>
                </View>
            );
        }

        return (
            <View>
                <SearchBar ref='searchBar' searchBarStyle='minimal' placeholder='发现更多'/>
                <CustomActivityIndicator animating={!this.props.isReady} style={s.mt2}/>{body}
            </View>
        );
    }
}
