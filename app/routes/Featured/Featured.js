import React, {Component} from 'react';
import {View} from 'react-native';
import {styles as s} from 'react-native-style-tachyons';

import SectionHeader from '../../components/SectionHeader';
import PostList from '../../components/PostList';
import ProductList from '../../components/ProductList';
import CustomActivityIndicator from '../../components/CustomActivityIndicator';
import CustomImage from '../../components/CustomImage';
import styles, {model} from '../../config/styles';

const _sizes = {
    "iPhone 6": {
        postImgSize: [
            300, 150
        ],
        brandImgSize: [
            375, 175
        ],
        productImgSizeBig: [
            150, 150
        ],
        productImgSizeSmall: [100, 100]
    },
    "iPhone 5s": {
        postImgSize: [
            275, 138
        ],
        brandImgSize: [
            320, 160
        ],
        productImgSizeBig: [
            130, 130
        ],
        productImgSizeSmall: [85, 85]
    }
}

export default class Featured extends Component {

    render() {
        let body = null;
        if (this.props.isReady) {
            const {postImgSize, brandImgSize, productImgSizeBig, productImgSizeSmall} = _sizes[model];
            body = (
                <View>
                    <PostList posts={this.props.posts} imgSize={postImgSize}/>
                    <SectionHeader title='每周品牌' supportText='brand' style={[s.mt5, s.mb2]}/>
                    <CustomImage
                        source={{
                        uri: this.props.brand.image,
                        width: brandImgSize[0],
                        height: brandImgSize[1]
                    }}
                        style={s.mb2}/>
                    <ProductList products={this.props.brandProducts} imgSize={productImgSizeSmall}/>
                    <SectionHeader title='最热单品' supportText='product' style={[s.mt5, s.mb2]}/>
                    <ProductList
                        products={this.props.products}
                        imgSize={productImgSizeBig}
                        itemsPerRow={2}
                        style={{
                        paddingHorizontal: (styles.viewPort.width - 2 * productImgSizeBig[0]) / 3
                    }}
                        withBrand/>
                </View>
            );
        }

        return (
            <View style={s.mt3}>
                <CustomActivityIndicator animating={!this.props.isReady}/>{body}
            </View>
        );
    }

}